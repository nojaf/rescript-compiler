// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Mt = require("./mt.js");
let $$String = require("../../lib/js/string.js");

function u(v) {
  return v;
}

let s = $$String;

let N = {
  s: s
};

let v0 = s.length("x");

function v(x) {
  return s.length(x);
}

let suites_0 = [
  "const",
  param => ({
    TAG: "Eq",
    _0: 1,
    _1: v0
  })
];

let suites_1 = {
  hd: [
    "other",
    param => ({
      TAG: "Eq",
      _0: 3,
      _1: v("abc")
    })
  ],
  tl: /* [] */0
};

let suites = {
  hd: suites_0,
  tl: suites_1
};

Mt.from_pair_suites("Module_parameter_test", suites);

exports.u = u;
exports.N = N;
exports.v0 = v0;
exports.v = v;
exports.suites = suites;
/* v0 Not a pure module */
