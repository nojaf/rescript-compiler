// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Belt_MapInt = require("../../lib/js/belt_MapInt.js");

function test() {
  let m;
  for (let i = 0; i <= 1000000; ++i) {
    m = Belt_MapInt.set(m, i, i);
  }
  for (let i$1 = 0; i$1 <= 1000000; ++i$1) {
    Belt_MapInt.get(m, i$1);
  }
}

test();

/*  Not a pure module */
