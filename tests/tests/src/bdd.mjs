// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Belt_Array from "rescript/lib/es6/Belt_Array.js";
import * as Primitive_array from "rescript/lib/es6/Primitive_array.js";

function $$eval(_bdd, vars) {
  while (true) {
    let bdd = _bdd;
    if (typeof bdd !== "object") {
      if (bdd === "One") {
        return true;
      } else {
        return false;
      }
    }
    if (Primitive_array.get(vars, bdd._1)) {
      _bdd = bdd._3;
      continue;
    }
    _bdd = bdd._0;
    continue;
  };
}

function getId(bdd) {
  if (typeof bdd !== "object") {
    if (bdd === "One") {
      return 1;
    } else {
      return 0;
    }
  } else {
    return bdd._2;
  }
}

let nodeC = {
  contents: 1
};

let sz_1 = {
  contents: 8191
};

let htab = {
  contents: Belt_Array.make(sz_1.contents + 1 | 0, /* [] */0)
};

let n_items = {
  contents: 0
};

function hashVal(x, y, v) {
  return ((x << 1) + y | 0) + (v << 2) | 0;
}

function resize(newSize) {
  let arr = htab.contents;
  let newSz_1 = newSize - 1 | 0;
  let newArr = Belt_Array.make(newSize, /* [] */0);
  let copyBucket = _bucket => {
    while (true) {
      let bucket = _bucket;
      if (!bucket) {
        return;
      }
      let n = bucket.hd;
      if (typeof n !== "object") {
        if (n === "One") {
          throw {
            RE_EXN_ID: "Assert_failure",
            _1: [
              "bdd.res",
              62,
              13
            ],
            Error: new Error()
          };
        }
        throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "bdd.res",
            62,
            13
          ],
          Error: new Error()
        };
      } else {
        let ind = hashVal(getId(n._0), getId(n._3), n._1) & newSz_1;
        Primitive_array.set(newArr, ind, {
          hd: n,
          tl: Primitive_array.get(newArr, ind)
        });
        _bucket = bucket.tl;
        continue;
      }
    };
  };
  for (let n = 0, n_finish = sz_1.contents; n <= n_finish; ++n) {
    copyBucket(Primitive_array.get(arr, n));
  }
  htab.contents = newArr;
  sz_1.contents = newSz_1;
}

function insert(idl, idh, v, ind, bucket, newNode) {
  if (n_items.contents <= sz_1.contents) {
    Primitive_array.set(htab.contents, ind, {
      hd: newNode,
      tl: bucket
    });
    n_items.contents = n_items.contents + 1 | 0;
    return;
  }
  resize((sz_1.contents + sz_1.contents | 0) + 2 | 0);
  let ind$1 = hashVal(idl, idh, v) & sz_1.contents;
  Primitive_array.set(htab.contents, ind$1, {
    hd: newNode,
    tl: Primitive_array.get(htab.contents, ind$1)
  });
}

function resetUnique() {
  sz_1.contents = 8191;
  htab.contents = Belt_Array.make(sz_1.contents + 1 | 0, /* [] */0);
  n_items.contents = 0;
  nodeC.contents = 1;
}

function mkNode(low, v, high) {
  let idl = getId(low);
  let idh = getId(high);
  if (idl === idh) {
    return low;
  }
  let ind = hashVal(idl, idh, v) & sz_1.contents;
  let bucket = Primitive_array.get(htab.contents, ind);
  let _b = bucket;
  while (true) {
    let b = _b;
    if (b) {
      let n = b.hd;
      if (typeof n !== "object") {
        if (n === "One") {
          throw {
            RE_EXN_ID: "Assert_failure",
            _1: [
              "bdd.res",
              123,
              15
            ],
            Error: new Error()
          };
        }
        throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "bdd.res",
            123,
            15
          ],
          Error: new Error()
        };
      } else {
        if (v === n._1 && idl === getId(n._0) && idh === getId(n._3)) {
          return n;
        }
        _b = b.tl;
        continue;
      }
    } else {
      let n_2 = (nodeC.contents = nodeC.contents + 1 | 0, nodeC.contents);
      let n$1 = {
        TAG: "Node",
        _0: low,
        _1: v,
        _2: n_2,
        _3: high
      };
      insert(getId(low), getId(high), v, ind, bucket, n$1);
      return n$1;
    }
  };
}

function cmpVar(x, y) {
  if (x < y) {
    return "LESS";
  } else if (x > y) {
    return "GREATER";
  } else {
    return "EQUAL";
  }
}

function mkVar(x) {
  return mkNode("Zero", x, "One");
}

let andslot1 = Belt_Array.make(1999, 0);

let andslot2 = Belt_Array.make(1999, 0);

let andslot3 = Belt_Array.make(1999, "Zero");

let xorslot1 = Belt_Array.make(1999, 0);

let xorslot2 = Belt_Array.make(1999, 0);

let xorslot3 = Belt_Array.make(1999, "Zero");

let notslot1 = Belt_Array.make(1999, 0);

let notslot2 = Belt_Array.make(1999, "One");

function hash(x, y) {
  return ((x << 1) + y | 0) % 1999;
}

function not(n) {
  if (typeof n !== "object") {
    if (n === "One") {
      return "Zero";
    } else {
      return "One";
    }
  }
  let id = n._2;
  let h = id % 1999;
  if (id === Primitive_array.get(notslot1, h)) {
    return Primitive_array.get(notslot2, h);
  }
  let f = mkNode(not(n._0), n._1, not(n._3));
  Primitive_array.set(notslot1, h, id);
  Primitive_array.set(notslot2, h, f);
  return f;
}

function and2(n1, n2) {
  if (typeof n1 !== "object") {
    if (n1 === "One") {
      return n2;
    } else {
      return "Zero";
    }
  }
  let r1 = n1._3;
  let i1 = n1._2;
  let v1 = n1._1;
  let l1 = n1._0;
  if (typeof n2 !== "object") {
    if (n2 === "One") {
      return n1;
    } else {
      return "Zero";
    }
  }
  let r2 = n2._3;
  let i2 = n2._2;
  let v2 = n2._1;
  let l2 = n2._0;
  let h = hash(i1, i2);
  if (i1 === Primitive_array.get(andslot1, h) && i2 === Primitive_array.get(andslot2, h)) {
    return Primitive_array.get(andslot3, h);
  }
  let match = cmpVar(v1, v2);
  let f;
  switch (match) {
    case "LESS" :
      f = mkNode(and2(l1, n2), v1, and2(r1, n2));
      break;
    case "EQUAL" :
      f = mkNode(and2(l1, l2), v1, and2(r1, r2));
      break;
    case "GREATER" :
      f = mkNode(and2(n1, l2), v2, and2(n1, r2));
      break;
  }
  Primitive_array.set(andslot1, h, i1);
  Primitive_array.set(andslot2, h, i2);
  Primitive_array.set(andslot3, h, f);
  return f;
}

function xor(n1, n2) {
  if (typeof n1 !== "object") {
    if (n1 === "One") {
      return not(n2);
    } else {
      return n2;
    }
  }
  let r1 = n1._3;
  let i1 = n1._2;
  let v1 = n1._1;
  let l1 = n1._0;
  if (typeof n2 !== "object") {
    if (n2 === "One") {
      return not(n1);
    } else {
      return n1;
    }
  }
  let r2 = n2._3;
  let i2 = n2._2;
  let v2 = n2._1;
  let l2 = n2._0;
  let h = hash(i1, i2);
  if (i1 === Primitive_array.get(andslot1, h) && i2 === Primitive_array.get(andslot2, h)) {
    return Primitive_array.get(andslot3, h);
  }
  let match = cmpVar(v1, v2);
  let f;
  switch (match) {
    case "LESS" :
      f = mkNode(xor(l1, n2), v1, xor(r1, n2));
      break;
    case "EQUAL" :
      f = mkNode(xor(l1, l2), v1, xor(r1, r2));
      break;
    case "GREATER" :
      f = mkNode(xor(n1, l2), v2, xor(n1, r2));
      break;
  }
  Primitive_array.set(andslot1, h, i1);
  Primitive_array.set(andslot2, h, i2);
  Primitive_array.set(andslot3, h, f);
  return f;
}

function hwb(n) {
  let h = (i, j) => {
    if (i === j) {
      return mkNode("Zero", i, "One");
    } else {
      return xor(and2(not(mkNode("Zero", j, "One")), h(i, j - 1 | 0)), and2(mkNode("Zero", j, "One"), g(i, j - 1 | 0)));
    }
  };
  let g = (i, j) => {
    if (i === j) {
      return mkNode("Zero", i, "One");
    } else {
      return xor(and2(not(mkNode("Zero", i, "One")), h(i + 1 | 0, j)), and2(mkNode("Zero", i, "One"), g(i + 1 | 0, j)));
    }
  };
  return h(0, n - 1 | 0);
}

let seed = {
  contents: 0
};

function random() {
  seed.contents = Math.imul(seed.contents, 25173) + 17431 | 0;
  return (seed.contents & 1) > 0;
}

function random_vars(n) {
  let vars = Belt_Array.make(n, false);
  for (let i = 0; i < n; ++i) {
    Primitive_array.set(vars, i, random());
  }
  return vars;
}

function bool_equal(a, b) {
  if (a) {
    if (b) {
      return true;
    } else {
      return false;
    }
  } else if (b) {
    return false;
  } else {
    return true;
  }
}

function test_hwb(bdd, vars) {
  let ntrue = 0;
  for (let i = 0, i_finish = vars.length; i < i_finish; ++i) {
    if (Primitive_array.get(vars, i)) {
      ntrue = ntrue + 1 | 0;
    }
    
  }
  return bool_equal($$eval(bdd, vars), ntrue > 0 ? Primitive_array.get(vars, ntrue - 1 | 0) : false);
}

function main() {
  let bdd = hwb(22);
  let succeeded = true;
  for (let i = 1; i <= 100; ++i) {
    succeeded = succeeded && test_hwb(bdd, random_vars(22));
  }
  if (succeeded) {
    return;
  }
  throw {
    RE_EXN_ID: "Assert_failure",
    _1: [
      "bdd.res",
      304,
      2
    ],
    Error: new Error()
  };
}

main();

let $$Array;

let initSize_1 = 8191;

let zero = "Zero";

let one = "One";

let cacheSize = 1999;

export {
  $$Array,
  $$eval,
  getId,
  initSize_1,
  nodeC,
  sz_1,
  htab,
  n_items,
  hashVal,
  resize,
  insert,
  resetUnique,
  mkNode,
  cmpVar,
  zero,
  one,
  mkVar,
  cacheSize,
  andslot1,
  andslot2,
  andslot3,
  xorslot1,
  xorslot2,
  xorslot3,
  notslot1,
  notslot2,
  hash,
  not,
  and2,
  xor,
  hwb,
  seed,
  random,
  random_vars,
  bool_equal,
  test_hwb,
  main,
}
/* htab Not a pure module */