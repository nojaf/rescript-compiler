@get external location: Dom.window => Dom.location = "location"

@send
external /* actually the cb is Dom.event => unit, but let's restrict the access for now */
addEventListener: (Dom.window, string, unit => unit) => unit = "addEventListener"

@send
external removeEventListener: (Dom.window, string, unit => unit) => unit = "removeEventListener"

@send
external dispatchEvent: (Dom.window, Dom.event) => unit = "dispatchEvent"

@get external pathname: Dom.location => string = "pathname"

@get external hash: Dom.location => string = "hash"

@get external search: Dom.location => string = "search"

@send
external pushState: (Dom.history, @as(json`null`) _, @as("") _, ~href: string) => unit = "pushState"

@send
external replaceState: (Dom.history, @as(json`null`) _, @as("") _, ~href: string) => unit =
  "replaceState"

@val external event: 'a = "Event"

@new external makeEventIE11Compatible: string => Dom.event = "Event"

@val @scope("document")
external createEventNonIEBrowsers: string => Dom.event = "createEvent"

@send
external initEventNonIEBrowsers: (Dom.event, string, bool, bool) => unit = "initEvent"

@val @scope("globalThis")
external window: option<Dom.window> = "window"

@val @scope("globalThis")
external history: option<Dom.history> = "history"

let safeMakeEvent = eventName =>
  if Js.typeof(event) == "function" {
    makeEventIE11Compatible(eventName)
  } else {
    let event = createEventNonIEBrowsers("Event")
    initEventNonIEBrowsers(event, eventName, true, true)
    event
  }

/* This is copied from array.ml. We want to cut dependencies for ReasonReact so
 that it's friendlier to use in size-constrained codebases */
let arrayToList = a => {
  open Belt
  let rec tolist = (i, res) =>
    if i < 0 {
      res
    } else {
      tolist(i - 1, list{Array.getUnsafe(a, i), ...res})
    }
  tolist(Array.length(a) - 1, list{})
}
/* if we ever roll our own parser in the future, make sure you test all url combinations
   e.g. foo.com/?#bar
 */
/* sigh URLSearchParams doesn't work on IE11, edge16, etc. */
/* actually you know what, not gonna provide search for now. It's a mess.
 We'll let users roll their own solution/data structure for now */
let path = () =>
  switch window {
  | None => list{}
  | Some(window) =>
    switch pathname(location(window)) {
    | ""
    | "/" =>
      list{}
    | raw =>
      /* remove the preceeding /, which every pathname seems to have */
      let raw = Js.String.sliceToEnd(~from=1, raw)
      /* remove the trailing /, which some pathnames might have. Ugh */
      let raw = switch Js.String.get(raw, Js.String.length(raw) - 1) {
      | "/" => Js.String.slice(~from=0, ~to_=-1, raw)
      | _ => raw
      }
      arrayToList(Js.String.split("/", raw))
    }
  }
let hash = () =>
  switch window {
  | None => ""
  | Some(window) =>
    switch hash(location(window)) {
    | ""
    | "#" => ""
    | raw =>
      /* remove the preceeding #, which every hash seems to have.
       Why is this even included in location.hash?? */
      Js.String.sliceToEnd(~from=1, raw)
    }
  }
let search = () =>
  switch window {
  | None => ""
  | Some(window) =>
    switch search(location(window)) {
    | ""
    | "?" => ""
    | raw =>
      /* remove the preceeding ?, which every search seems to have. */
      Js.String.sliceToEnd(~from=1, raw)
    }
  }
let push = path =>
  switch (history, window) {
  | (None, _)
  | (_, None) => ()
  | (Some(history), Some(window)) =>
    pushState(history, ~href=path)
    dispatchEvent(window, safeMakeEvent("popstate"))
  }
let replace = path =>
  switch (history, window) {
  | (None, _)
  | (_, None) => ()
  | (Some(history), Some(window)) =>
    replaceState(history, ~href=path)
    dispatchEvent(window, safeMakeEvent("popstate"))
  }
type url = {
  path: list<string>,
  hash: string,
  search: string,
}
let urlNotEqual = (a, b) => {
  let rec listNotEqual = (aList, bList) =>
    switch (aList, bList) {
    | (list{}, list{}) => false
    | (list{}, list{_, ..._})
    | (list{_, ..._}, list{}) => true
    | (list{aHead, ...aRest}, list{bHead, ...bRest}) =>
      if aHead !== bHead {
        true
      } else {
        listNotEqual(aRest, bRest)
      }
    }
  a.hash !== b.hash || (a.search !== b.search || listNotEqual(a.path, b.path))
}
type watcherID = unit => unit
let url = () => {path: path(), hash: hash(), search: search()}
/* alias exposed publicly */
let dangerouslyGetInitialUrl = url
let watchUrl = callback =>
  switch window {
  | None => () => ()
  | Some(window) =>
    let watcherID = () => callback(url())
    addEventListener(window, "popstate", watcherID)
    watcherID
  }
let unwatchUrl = watcherID =>
  switch window {
  | None => ()
  | Some(window) => removeEventListener(window, "popstate", watcherID)
  }

let useUrl = (~serverUrl=?, ()) => {
  let (url, setUrl) = React.useState(() =>
    switch serverUrl {
    | Some(url) => url
    | None => dangerouslyGetInitialUrl()
    }
  )

  React.useEffect0(() => {
    let watcherId = watchUrl(url => setUrl(_ => url))

    /*
     * check for updates that may have occured between
     * the initial state and the subscribe above
     */
    let newUrl = dangerouslyGetInitialUrl()
    if urlNotEqual(newUrl, url) {
      setUrl(_ => newUrl)
    }

    Some(() => unwatchUrl(watcherId))
  })

  url
}
