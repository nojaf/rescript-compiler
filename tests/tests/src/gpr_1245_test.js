// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Primitive_exceptions = require("rescript/lib/js/Primitive_exceptions.js");

let x = {
  contents: 1
};

let y = {
  contents: 2
};

function f(param) {
  let a = {
    contents: param[0]
  };
  let b = {
    contents: param[1]
  };
  console.log(a, b);
}

function g() {
  return 3;
}

function a0(f) {
  let u = f();
  if (u !== null) {
    console.log(u);
    console.log(u);
    return 1;
  } else {
    return 0;
  }
}

function a1(f) {
  let E = /* @__PURE__ */Primitive_exceptions.create("E");
  try {
    return f();
  } catch (raw_exn) {
    let exn = Primitive_exceptions.internalToException(raw_exn);
    if (exn.RE_EXN_ID === E) {
      return 1;
    }
    throw exn;
  }
}

let a = 1;

let b = 2;

exports.a = a;
exports.b = b;
exports.x = x;
exports.y = y;
exports.f = f;
exports.g = g;
exports.a0 = a0;
exports.a1 = a1;
/* No side effect */
