// Generated by ReScript, PLEASE EDIT WITH CARE

import * as ErrorHandler from "./ErrorHandler.res.js";

function notification(s) {
  return [
    s,
    s
  ];
}

let Error1 = {
  notification: notification
};

let MyErrorHandler = ErrorHandler.Make(Error1);

MyErrorHandler.notify("abc");

export {
  Error1,
  MyErrorHandler,
}
/* MyErrorHandler Not a pure module */
