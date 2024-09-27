// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Mt = require("./mt.js");
let Primitive_object = require("../../lib/js/primitive_object.js");

let suites = {
  contents: /* [] */0
};

let test_id = {
  contents: 0
};

function eq(loc, x, y) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + test_id.contents.toString()),
      () => ({
        TAG: "Eq",
        _0: x,
        _1: y
      })
    ],
    tl: suites.contents
  };
}

function f() {
  let x = new Date();
  let y = new Date();
  return [
    Primitive_object.greaterthan(y, x),
    Primitive_object.lessthan(y, x),
    true
  ];
}

let match = f();

let a2 = match[2];

let a1 = match[1];

let a0 = match[0];

console.log(a0, a1);

eq("File \"gpr_1817_test.res\", line 23, characters 3-10", a2, true);

Mt.from_pair_suites("Gpr_1817_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.f = f;
exports.a0 = a0;
exports.a1 = a1;
exports.a2 = a2;
/* match Not a pure module */
