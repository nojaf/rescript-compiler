// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Belt_Array from "rescript/lib/es6/Belt_Array.js";
import * as Primitive_module from "rescript/lib/es6/Primitive_module.js";

let PA = Primitive_module.init([
  "gpr_3931_test.res",
  3,
  4
], {
  TAG: "Module",
  _0: [[
      "Function",
      "print"
    ]]
});

let P = Primitive_module.init([
  "gpr_3931_test.res",
  12,
  4
], {
  TAG: "Module",
  _0: [[
      "Function",
      "print"
    ]]
});

function print(a) {
  Belt_Array.forEach(a, P.print);
}

Primitive_module.update({
  TAG: "Module",
  _0: [[
      "Function",
      "print"
    ]]
}, PA, {
  print: print
});

function print$1(i) {
  console.log("%d", i);
}

Primitive_module.update({
  TAG: "Module",
  _0: [[
      "Function",
      "print"
    ]]
}, P, {
  print: print$1
});

PA.print([
  1,
  2
]);

export {
  PA,
  P,
}
/* PA Not a pure module */