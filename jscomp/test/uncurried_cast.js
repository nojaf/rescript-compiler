// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Belt_List = require("../../lib/js/belt_List.js");
let Primitive_exceptions = require("../../lib/js/primitive_exceptions.js");

function raise(e) {
  throw e;
}

let map = Belt_List.map;

let List = {
  map: map
};

let Uncurried = {
  raise: raise,
  List: List
};

let E = /* @__PURE__ */Primitive_exceptions.create("Uncurried_cast.E");

function testRaise() {
  throw {
    RE_EXN_ID: E,
    Error: new Error()
  };
}

let l = Belt_List.map({
  hd: 1,
  tl: {
    hd: 2,
    tl: /* [] */0
  }
}, x => x + 1 | 0);

function partial(x) {
  return Belt_List.map({
    hd: 1,
    tl: {
      hd: 2,
      tl: /* [] */0
    }
  }, x);
}

let ll = partial(x => x + 1 | 0);

function withOpts(xOpt, y, zOpt, w) {
  let x = xOpt !== undefined ? xOpt : 3;
  let z = zOpt !== undefined ? zOpt : 4;
  return ((x + y | 0) + z | 0) + w | 0;
}

let StandardNotation = {
  testRaise: testRaise,
  l: l,
  partial: partial,
  ll: ll,
  withOpts: withOpts
};

function testRaise$1() {
  throw {
    RE_EXN_ID: E,
    Error: new Error()
  };
}

let l$1 = Belt_List.map({
  hd: 1,
  tl: {
    hd: 2,
    tl: /* [] */0
  }
}, x => x + 1 | 0);

function partial$1(extra) {
  return Belt_List.map({
    hd: 1,
    tl: {
      hd: 2,
      tl: /* [] */0
    }
  }, extra);
}

let ll$1 = partial$1(x => x + 1 | 0);

function withOpts$1(xOpt, y, zOpt, w) {
  let x = xOpt !== undefined ? xOpt : 3;
  let z = zOpt !== undefined ? zOpt : 4;
  return ((x + y | 0) + z | 0) + w | 0;
}

exports.Uncurried = Uncurried;
exports.E = E;
exports.StandardNotation = StandardNotation;
exports.testRaise = testRaise$1;
exports.l = l$1;
exports.partial = partial$1;
exports.ll = ll$1;
exports.withOpts = withOpts$1;
/* l Not a pure module */
