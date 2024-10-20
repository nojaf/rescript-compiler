// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Belt_List = require("rescript/lib/js/Belt_List.js");
let Pervasives = require("rescript/lib/js/Pervasives.js");
let Belt_SetString = require("rescript/lib/js/Belt_SetString.js");
let Primitive_object = require("rescript/lib/js/Primitive_object.js");
let Primitive_exceptions = require("rescript/lib/js/Primitive_exceptions.js");

let graph = {
  hd: [
    "a",
    "b"
  ],
  tl: {
    hd: [
      "a",
      "c"
    ],
    tl: {
      hd: [
        "a",
        "d"
      ],
      tl: {
        hd: [
          "b",
          "e"
        ],
        tl: {
          hd: [
            "c",
            "f"
          ],
          tl: {
            hd: [
              "d",
              "e"
            ],
            tl: {
              hd: [
                "e",
                "f"
              ],
              tl: {
                hd: [
                  "e",
                  "g"
                ],
                tl: /* [] */0
              }
            }
          }
        }
      }
    }
  }
};

function nexts(x, g) {
  return Belt_List.reduce(g, /* [] */0, (acc, param) => {
    if (param[0] === x) {
      return {
        hd: param[1],
        tl: acc
      };
    } else {
      return acc;
    }
  });
}

function dfs1(_nodes, graph, _visited) {
  while (true) {
    let visited = _visited;
    let nodes = _nodes;
    if (!nodes) {
      return Belt_List.reverse(visited);
    }
    let xs = nodes.tl;
    let x = nodes.hd;
    if (Belt_List.has(visited, x, (prim0, prim1) => prim0 === prim1)) {
      _nodes = xs;
      continue;
    }
    console.log(x);
    _visited = {
      hd: x,
      tl: visited
    };
    _nodes = Pervasives.$at(nexts(x, graph), xs);
    continue;
  };
}

if (!Primitive_object.equal(dfs1({
    hd: "a",
    tl: /* [] */0
  }, graph, /* [] */0), {
    hd: "a",
    tl: {
      hd: "d",
      tl: {
        hd: "e",
        tl: {
          hd: "g",
          tl: {
            hd: "f",
            tl: {
              hd: "c",
              tl: {
                hd: "b",
                tl: /* [] */0
              }
            }
          }
        }
      }
    }
  })) {
  throw {
    RE_EXN_ID: "Assert_failure",
    _1: [
      "topsort_test.res",
      38,
      2
    ],
    Error: new Error()
  };
}

console.log();

if (!Primitive_object.equal(dfs1({
    hd: "b",
    tl: /* [] */0
  }, {
    hd: [
      "f",
      "d"
    ],
    tl: graph
  }, /* [] */0), {
    hd: "b",
    tl: {
      hd: "e",
      tl: {
        hd: "g",
        tl: {
          hd: "f",
          tl: {
            hd: "d",
            tl: /* [] */0
          }
        }
      }
    }
  })) {
  throw {
    RE_EXN_ID: "Assert_failure",
    _1: [
      "topsort_test.res",
      41,
      2
    ],
    Error: new Error()
  };
}

function dfs2(nodes, graph, visited) {
  let aux = (_nodes, graph, _visited) => {
    while (true) {
      let visited = _visited;
      let nodes = _nodes;
      if (!nodes) {
        return visited;
      }
      let xs = nodes.tl;
      let x = nodes.hd;
      if (Belt_List.has(visited, x, (prim0, prim1) => prim0 === prim1)) {
        _nodes = xs;
        continue;
      }
      _visited = aux(nexts(x, graph), graph, {
        hd: x,
        tl: visited
      });
      _nodes = xs;
      continue;
    };
  };
  return Belt_List.reverse(aux(nodes, graph, visited));
}

if (!Primitive_object.equal(dfs2({
    hd: "a",
    tl: /* [] */0
  }, graph, /* [] */0), {
    hd: "a",
    tl: {
      hd: "d",
      tl: {
        hd: "e",
        tl: {
          hd: "g",
          tl: {
            hd: "f",
            tl: {
              hd: "c",
              tl: {
                hd: "b",
                tl: /* [] */0
              }
            }
          }
        }
      }
    }
  })) {
  throw {
    RE_EXN_ID: "Assert_failure",
    _1: [
      "topsort_test.res",
      60,
      2
    ],
    Error: new Error()
  };
}

if (!Primitive_object.equal(dfs2({
    hd: "b",
    tl: /* [] */0
  }, {
    hd: [
      "f",
      "d"
    ],
    tl: graph
  }, /* [] */0), {
    hd: "b",
    tl: {
      hd: "e",
      tl: {
        hd: "g",
        tl: {
          hd: "f",
          tl: {
            hd: "d",
            tl: /* [] */0
          }
        }
      }
    }
  })) {
  throw {
    RE_EXN_ID: "Assert_failure",
    _1: [
      "topsort_test.res",
      61,
      2
    ],
    Error: new Error()
  };
}

function dfs3(nodes, graph) {
  let visited = {
    contents: /* [] */0
  };
  let aux = (node, graph) => {
    if (!Belt_List.has(visited.contents, node, (prim0, prim1) => prim0 === prim1)) {
      visited.contents = {
        hd: node,
        tl: visited.contents
      };
      return Belt_List.forEach(nexts(node, graph), x => aux(x, graph));
    }
    
  };
  Belt_List.forEach(nodes, node => aux(node, graph));
  return Belt_List.reverse(visited.contents);
}

if (!Primitive_object.equal(dfs3({
    hd: "a",
    tl: /* [] */0
  }, graph), {
    hd: "a",
    tl: {
      hd: "d",
      tl: {
        hd: "e",
        tl: {
          hd: "g",
          tl: {
            hd: "f",
            tl: {
              hd: "c",
              tl: {
                hd: "b",
                tl: /* [] */0
              }
            }
          }
        }
      }
    }
  })) {
  throw {
    RE_EXN_ID: "Assert_failure",
    _1: [
      "topsort_test.res",
      77,
      2
    ],
    Error: new Error()
  };
}

if (!Primitive_object.equal(dfs3({
    hd: "b",
    tl: /* [] */0
  }, {
    hd: [
      "f",
      "d"
    ],
    tl: graph
  }), {
    hd: "b",
    tl: {
      hd: "e",
      tl: {
        hd: "g",
        tl: {
          hd: "f",
          tl: {
            hd: "d",
            tl: /* [] */0
          }
        }
      }
    }
  })) {
  throw {
    RE_EXN_ID: "Assert_failure",
    _1: [
      "topsort_test.res",
      78,
      2
    ],
    Error: new Error()
  };
}

let grwork = {
  hd: [
    "wake",
    "shower"
  ],
  tl: {
    hd: [
      "shower",
      "dress"
    ],
    tl: {
      hd: [
        "dress",
        "go"
      ],
      tl: {
        hd: [
          "wake",
          "eat"
        ],
        tl: {
          hd: [
            "eat",
            "washup"
          ],
          tl: {
            hd: [
              "washup",
              "go"
            ],
            tl: /* [] */0
          }
        }
      }
    }
  }
};

function unsafe_topsort(graph) {
  let visited = {
    contents: /* [] */0
  };
  let sort_node = node => {
    if (Belt_List.has(visited.contents, node, (prim0, prim1) => prim0 === prim1)) {
      return;
    }
    let nodes = nexts(node, graph);
    Belt_List.forEach(nodes, sort_node);
    visited.contents = {
      hd: node,
      tl: visited.contents
    };
  };
  Belt_List.forEach(graph, param => sort_node(param[0]));
  return visited.contents;
}

if (!Primitive_object.equal(unsafe_topsort(grwork), {
    hd: "wake",
    tl: {
      hd: "shower",
      tl: {
        hd: "dress",
        tl: {
          hd: "eat",
          tl: {
            hd: "washup",
            tl: {
              hd: "go",
              tl: /* [] */0
            }
          }
        }
      }
    }
  })) {
  throw {
    RE_EXN_ID: "Assert_failure",
    _1: [
      "topsort_test.res",
      115,
      9
    ],
    Error: new Error()
  };
}

let Cycle = /* @__PURE__ */Primitive_exceptions.create("Topsort_test.Cycle");

function pathsort(graph) {
  let visited = {
    contents: /* [] */0
  };
  let empty_path = [
    undefined,
    /* [] */0
  ];
  let $plus$great = (node, param) => {
    let stack = param[1];
    let set = param[0];
    if (Belt_SetString.has(set, node)) {
      throw {
        RE_EXN_ID: Cycle,
        _1: {
          hd: node,
          tl: stack
        },
        Error: new Error()
      };
    }
    return [
      Belt_SetString.add(set, node),
      {
        hd: node,
        tl: stack
      }
    ];
  };
  let sort_nodes = (path, nodes) => Belt_List.forEach(nodes, node => sort_node(path, node));
  let sort_node = (path, node) => {
    if (!Belt_List.has(visited.contents, node, (prim0, prim1) => prim0 === prim1)) {
      sort_nodes($plus$great(node, path), nexts(node, graph));
      visited.contents = {
        hd: node,
        tl: visited.contents
      };
      return;
    }
    
  };
  Belt_List.forEach(graph, param => sort_node(empty_path, param[0]));
  return visited.contents;
}

if (!Primitive_object.equal(pathsort(grwork), {
    hd: "wake",
    tl: {
      hd: "shower",
      tl: {
        hd: "dress",
        tl: {
          hd: "eat",
          tl: {
            hd: "washup",
            tl: {
              hd: "go",
              tl: /* [] */0
            }
          }
        }
      }
    }
  })) {
  throw {
    RE_EXN_ID: "Assert_failure",
    _1: [
      "topsort_test.res",
      147,
      9
    ],
    Error: new Error()
  };
}

try {
  pathsort({
    hd: [
      "go",
      "eat"
    ],
    tl: grwork
  });
  throw {
    RE_EXN_ID: "Assert_failure",
    _1: [
      "topsort_test.res",
      151,
      2
    ],
    Error: new Error()
  };
} catch (raw_exn) {
  let exn = Primitive_exceptions.internalToException(raw_exn);
  let exit = 0;
  if (exn.RE_EXN_ID === Cycle) {
    let match = exn._1;
    if (match && match.hd === "go") {
      let match$1 = match.tl;
      if (match$1 && match$1.hd === "washup") {
        let match$2 = match$1.tl;
        if (match$2 && match$2.hd === "eat") {
          let match$3 = match$2.tl;
          if (!(match$3 && match$3.hd === "go" && !match$3.tl)) {
            exit = 1;
          }
          
        } else {
          exit = 1;
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
  } else {
    exit = 1;
  }
  if (exit === 1) {
    throw {
      RE_EXN_ID: "Assert_failure",
      _1: [
        "topsort_test.res",
        154,
        7
      ],
      Error: new Error()
    };
  }
  
}

let String_set;

exports.graph = graph;
exports.nexts = nexts;
exports.dfs1 = dfs1;
exports.dfs2 = dfs2;
exports.dfs3 = dfs3;
exports.grwork = grwork;
exports.unsafe_topsort = unsafe_topsort;
exports.String_set = String_set;
exports.Cycle = Cycle;
exports.pathsort = pathsort;
/*  Not a pure module */
