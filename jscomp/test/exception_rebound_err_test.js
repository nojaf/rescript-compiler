// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Mt = require("./mt.js");
let Primitive_exceptions = require("../../lib/js/primitive_exceptions.js");

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

let A = /* @__PURE__ */Primitive_exceptions.create("Exception_rebound_err_test.A");

let B = /* @__PURE__ */Primitive_exceptions.create("Exception_rebound_err_test.B");

let C = /* @__PURE__ */Primitive_exceptions.create("Exception_rebound_err_test.C");

function test_js_error4() {
  try {
    JSON.parse(" {\"x\"}");
    return 1;
  } catch (raw_e) {
    let e = Primitive_exceptions.internalToException(raw_e);
    if (e.RE_EXN_ID === "Not_found") {
      return 2;
    }
    if (e.RE_EXN_ID === "Invalid_argument" && e._1 === "x") {
      return 3;
    }
    if (e.RE_EXN_ID === A) {
      if (e._1 !== 2) {
        return 7;
      } else {
        return 4;
      }
    } else if (e.RE_EXN_ID === B) {
      return 5;
    } else if (e.RE_EXN_ID === C && !(e._1 !== 1 || e._2 !== 2)) {
      return 6;
    } else {
      return 7;
    }
  }
}

function f(g) {
  try {
    return g();
  } catch (raw_exn) {
    let exn = Primitive_exceptions.internalToException(raw_exn);
    if (exn.RE_EXN_ID === "Not_found") {
      return 1;
    }
    throw exn;
  }
}

eq("File \"exception_rebound_err_test.res\", line 34, characters 3-10", test_js_error4(), 7);

Mt.from_pair_suites("Exception_rebound_err_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.A = A;
exports.B = B;
exports.C = C;
exports.test_js_error4 = test_js_error4;
exports.f = f;
/*  Not a pure module */
