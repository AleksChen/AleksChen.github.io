import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server.BR4veou0.js';
import 'clsx';

const frontmatter = {
  "title": "手写 instanceof",
  "date": "2017-08-23T03:32:22.000Z",
  "updatedAt": "2024-12-02T09:46:21.280Z",
  "tags": ["JavaScript"],
  "draft": false,
  "slug": "1708-implement-instanceof"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "类型判断",
    "text": "类型判断"
  }, {
    "depth": 2,
    "slug": "instanceof-是什么",
    "text": "instanceof 是什么"
  }, {
    "depth": 2,
    "slug": "instanceof-原理",
    "text": "instanceof 原理"
  }, {
    "depth": 2,
    "slug": "实现一个-instanceof",
    "text": "实现一个 instanceof"
  }, {
    "depth": 3,
    "slug": "手写-instanceof",
    "text": "手写 instanceof"
  }, {
    "depth": 3,
    "slug": "测试结果",
    "text": "测试结果"
  }, {
    "depth": 2,
    "slug": "总结",
    "text": "总结"
  }, {
    "depth": 2,
    "slug": "资料",
    "text": "资料"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["在前端面试中，", createVNode(_components.code, {
        children: "instanceof"
      }), " 是一个常见的问题。面试官通常会要求面试者手写 ", createVNode(_components.code, {
        children: "instanceof"
      }), " 的实现，以测试他们对 JavaScript 类型系统和原型链的理解。"]
    }), "\n", createVNode(_components.h2, {
      id: "类型判断",
      children: "类型判断"
    }), "\n", createVNode(_components.p, {
      children: "在 JavaScript 中数据分为基本类型和引用类型。"
    }), "\n", createVNode(_components.p, {
      children: "基本类型"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "Number"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "String"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "Boolean"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "undefined"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "null"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "Symbol"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "BigInt"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "引用类型"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "Object"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "Array"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "Function"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "Date"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "RegExp"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "Map"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "Set"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "Promise"
        })
      }), "\n", createVNode(_components.li, {
        children: "…"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["在实际工作中，我们常常需要判断一个变量的类型。对于基本类型(", createVNode(_components.code, {
        children: "null"
      }), " 除外) 和 ", createVNode(_components.code, {
        children: "Function"
      }), " 我们可以使用 ", createVNode(_components.code, {
        children: "typeof"
      }), " 进行判断。对于引用类型我们则需要使用 ", createVNode(_components.code, {
        children: "instanceof"
      }), " 进行判断。"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 基本数据类型"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " numberExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 123"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " stringExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"hello\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " booleanExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " true"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " nullExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " undefinedExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " undefined"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " symbolExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Symbol"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"example\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " bigIntExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " BigInt"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 引用类型"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " objectExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {};"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " arrayExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " [];"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " functionExample"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () {};"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " dateExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Date"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " regExpExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#DBEDFF"
            },
            children: "abc"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " mapExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Map"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " setExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Set"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " promiseExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " Promise"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {});"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// typeof 适用范围"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "typeof"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " numberExample); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// number"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "typeof"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " stringExample); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// string"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "typeof"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " booleanExample); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// boolean"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "typeof"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " undefinedExample); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// undefined"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "typeof"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " symbolExample); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// symbol"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "typeof"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " bigIntExample); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// bigint"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "typeof"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " functionExample); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// function"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// typeof 对 null 和于其他引用类型无法判断"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "typeof"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " nullExample); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// object。这是一个历史遗留问题，实际上 null 是基本数据类型"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "typeof"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " objectExample); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// object"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "typeof"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " arrayExample); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// object"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "typeof"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " dateExample); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// object"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "typeof"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " regExpExample); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// object"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "typeof"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " mapExample); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// object"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "typeof"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " setExample); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// object"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "typeof"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " promiseExample); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// object"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// instanceof 判断对象具体是哪种类型的对象"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(objectExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "instanceof"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Object"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// true"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(arrayExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "instanceof"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Array"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// true"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(functionExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "instanceof"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// true"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(dateExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "instanceof"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Date"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// true"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(regExpExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "instanceof"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " RegExp"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// true"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(mapExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "instanceof"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Map"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// true"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(setExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "instanceof"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Set"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// true"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(promiseExample "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "instanceof"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Promise"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// true"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "instanceof-是什么",
      children: "instanceof 是什么"
    }), "\n", createVNode(_components.p, {
      children: ["MDN 定义：", createVNode(_components.code, {
        children: "instanceof"
      }), " 是 JavaScript 的一个二元操作符，用于测试构造函数的 ", createVNode(_components.code, {
        children: "prototype"
      }), " 属性是否出现在对象的原型链中的任何位置。换句话说，", createVNode(_components.code, {
        children: "instanceof"
      }), " 可以用于判断一个对象是否由某个构造函数创建的。"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Car"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "make"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "model"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "year"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".make "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " make;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".model "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " model;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".year "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " year;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " auto"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Car"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Honda\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Accord\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1998"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(auto "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "instanceof"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Car"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// true"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["在这个例子中，auto 是 Car 的一个实例，所以 ", createVNode(_components.code, {
        children: "auto instanceof Car"
      }), " 返回 ", createVNode(_components.code, {
        children: "true"
      }), "。"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "注意：左侧可以是任意类型，而右侧必须是一个函数的实例。参数错误时会报错。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m46rsblg-%E5%8F%82%E6%95%B0%E8%A6%81%E6%B1%82.png",
        alt: "参数要求.png"
      })
    }), "\n", createVNode(_components.h2, {
      id: "instanceof-原理",
      children: "instanceof 原理"
    }), "\n", createVNode(_components.p, {
      children: ["每个对象都有一个 ", createVNode(_components.code, {
        children: "__proto__"
      }), " 属性。在对象创建的时候会将 ", createVNode(_components.code, {
        children: "__proto__"
      }), " 属性指向它的构造函数的 ", createVNode(_components.code, {
        children: "prototype"
      }), " 属性上。并且构造函数的 ", createVNode(_components.code, {
        children: "prototype"
      }), " 属性本身也是一个对象。它也有自己的 ", createVNode(_components.code, {
        children: "__proto__"
      }), " 属性。通过 ", createVNode(_components.code, {
        children: "__proto__"
      }), " -> ", createVNode(_components.code, {
        children: "prototype"
      }), " 这样串联形成一个链条，这个链条就是原型链。原型链的终点是 ", createVNode(_components.code, {
        children: "Object"
      }), "，", createVNode(_components.code, {
        children: "Object.prototype.__proto__"
      }), " 的值为 ", createVNode(_components.code, {
        children: "null"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: ["每个对象的构造函数都可以在原型链上找到，因此 ", createVNode(_components.code, {
        children: "instanceof"
      }), " 通过原型链可以判断对象是否由某个构造函数创建。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m46rsblj-%E5%8E%9F%E5%9E%8B%E9%93%BE.png",
        alt: "原型链.png"
      })
    }), "\n", createVNode(_components.h2, {
      id: "实现一个-instanceof",
      children: "实现一个 instanceof"
    }), "\n", createVNode(_components.h3, {
      id: "手写-instanceof",
      children: "手写 instanceof"
    }), "\n", createVNode(_components.p, {
      children: ["手写 ", createVNode(_components.code, {
        children: "instanceof"
      }), " 的实现可以帮助我们更深入地理解 JavaScript 的原型链。下面是一个简易的 ", createVNode(_components.code, {
        children: "instanceof"
      }), " 实现："]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "参数校验"
      }), "\n", createVNode(_components.li, {
        children: ["比较 ", createVNode(_components.code, {
          children: "obj.__proto === constructor.prototype"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["找到就立即返回 ", createVNode(_components.code, {
          children: "true"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["遍历到原型链终点 ", createVNode(_components.code, {
          children: "constructor.prototype === null"
        }), " 时，返回 ", createVNode(_components.code, {
          children: "false"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " myInstanceof"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "obj"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "constructor"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " BASIC_TYPE"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"[object Undefined]\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"[object Null]\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"[object Number]\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"[object String]\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"[object Boolean]\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"[object Symbol]\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    \"[object BigInt]\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ];"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " objType"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " Object"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "prototype"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".toString."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "call"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(obj);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " constructorType"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " Object"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "prototype"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".toString."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "call"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(constructor);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "BASIC_TYPE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "includes"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(constructorType)) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    throw"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " TypeError"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Right-hand side of 'instanceof' is not an object\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "typeof"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " constructor "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "!=="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"function\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    throw"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " TypeError"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Right-hand side of 'instanceof' is not callable\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "BASIC_TYPE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "includes"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(objType)) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " false"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  let"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " objProto "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Reflect."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getPrototypeOf"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(obj);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  while"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (objProto "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "!=="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (Object."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "is"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(objProto, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "constructor"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "prototype"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "      return"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " true"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    objProto "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Reflect."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getPrototypeOf"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(obj);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " false"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["当传入的参数是对象时，如果操作成功  ", createVNode(_components.code, {
          children: "Reflect.getPrototypeOf(target)"
        }), "  返回对象的原型，如果操作失败（比如，目标不是对象）则返回  ", createVNode(_components.code, {
          children: "false"
        }), "。"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "测试结果",
      children: "测试结果"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m46rsbli-%E6%B5%8B%E8%AF%95%E7%BB%93%E6%9E%9C.png",
        alt: "测试结果.png"
      })
    }), "\n", createVNode(_components.h2, {
      id: "总结",
      children: "总结"
    }), "\n", createVNode(_components.p, {
      children: ["本文介绍了 JavaScript 类型判断的方法。对 ", createVNode(_components.code, {
        children: "instanceof"
      }), " 的概念、用法和实现进行了介绍。"]
    }), "\n", createVNode(_components.h2, {
      id: "资料",
      children: "资料"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof",
          children: "instanceof - JavaScript | MDN"
        })
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/posts/1708-implement-instanceof.mdx";
const file = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/1708-implement-instanceof.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/1708-implement-instanceof.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
