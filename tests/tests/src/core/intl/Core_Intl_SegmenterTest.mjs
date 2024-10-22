// Generated by ReScript, PLEASE EDIT WITH CARE


console.log("---");

console.log("Intl.Segmenter");

Intl.Segmenter.supportedLocalesOf([
  "en-US",
  "en-GB"
]);

Intl.Segmenter.supportedLocalesOf([
  "en-US",
  "en-GB"
], {
  localeMatcher: "lookup"
});

new Intl.Segmenter();

new Intl.Segmenter([
  "en-US",
  "en-GB"
]);

let _formatter = new Intl.Segmenter(undefined, {
  granularity: "word"
});

let formatter = new Intl.Segmenter(["en-US"], {
  granularity: "word"
});

console.log(formatter.resolvedOptions());

let segments = formatter.segment("This is a sentence with several words");

console.log(segments);

console.log(segments.containing());

console.log(segments.containing(1));

export {
  _formatter,
  formatter,
  segments,
}
/*  Not a pure module */