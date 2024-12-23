// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Mt from "./mt.mjs";
import * as Belt_Array from "rescript/lib/es6/Belt_Array.js";

function test() {
  let v = {
    contents: 0
  };
  let f = (_n, _acc) => {
    while (true) {
      let acc = _acc;
      let n = _n;
      if (n === 0) {
        return acc();
      }
      _acc = () => {
        v.contents = v.contents + n | 0;
        return acc();
      };
      _n = n - 1 | 0;
      continue;
    };
  };
  f(10, () => {});
  return v.contents;
}

function test_closure() {
  let v = {
    contents: 0
  };
  let arr = Belt_Array.make(6, x => x);
  for (let i = 0; i <= 5; ++i) {
    arr[i] = param => i;
  }
  Belt_Array.forEach(arr, i => {
    v.contents = v.contents + i(0) | 0;
  });
  return v.contents;
}

function test_closure2() {
  let v = {
    contents: 0
  };
  let arr = Belt_Array.make(6, x => x);
  for (let i = 0; i <= 5; ++i) {
    let j = i + i | 0;
    arr[i] = param => j;
  }
  Belt_Array.forEach(arr, i => {
    v.contents = v.contents + i(0) | 0;
  });
  return v.contents;
}

Mt.from_pair_suites("Cps_test", {
  hd: [
    "cps_test_sum",
    () => ({
      TAG: "Eq",
      _0: 55,
      _1: test()
    })
  ],
  tl: {
    hd: [
      "cps_test_closure",
      () => ({
        TAG: "Eq",
        _0: 15,
        _1: test_closure()
      })
    ],
    tl: {
      hd: [
        "cps_test_closure2",
        () => ({
          TAG: "Eq",
          _0: 30,
          _1: test_closure2()
        })
      ],
      tl: /* [] */0
    }
  }
});

export {
  test,
  test_closure,
  test_closure2,
}
/*  Not a pure module */
