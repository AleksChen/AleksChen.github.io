import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server.C36FTnHO.js';
import 'clsx';

const frontmatter = {
  "title": "SSE 服务端推送",
  "date": "2025-04-03T07:35:49.000Z",
  "updatedAt": "2025-12-01T09:28:48.190Z",
  "tags": ["Network"],
  "draft": false,
  "slug": "2504-sse"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "引言",
    "text": "引言"
  }, {
    "depth": 2,
    "slug": "sse-的本质",
    "text": "SSE 的本质"
  }, {
    "depth": 2,
    "slug": "sse-的特点",
    "text": "SSE 的特点"
  }, {
    "depth": 2,
    "slug": "sse-客户端-api",
    "text": "SSE 客户端 API"
  }, {
    "depth": 2,
    "slug": "sse-服务端实现",
    "text": "SSE 服务端实现"
  }, {
    "depth": 3,
    "slug": "数据格式",
    "text": "数据格式"
  }, {
    "depth": 3,
    "slug": "data-字段",
    "text": "data 字段"
  }, {
    "depth": 3,
    "slug": "id-字段",
    "text": "id 字段"
  }, {
    "depth": 3,
    "slug": "event-字段",
    "text": "event 字段"
  }, {
    "depth": 3,
    "slug": "retry-字段",
    "text": "retry 字段"
  }, {
    "depth": 2,
    "slug": "node-服务器实例",
    "text": "Node 服务器实例"
  }, {
    "depth": 2,
    "slug": "注意事项",
    "text": "注意事项"
  }, {
    "depth": 2,
    "slug": "sse-与-websocket-的区别",
    "text": "SSE 与 Websocket 的区别"
  }, {
    "depth": 3,
    "slug": "sse",
    "text": "SSE"
  }, {
    "depth": 3,
    "slug": "websocket",
    "text": "WebSocket"
  }, {
    "depth": 2,
    "slug": "总结",
    "text": "总结"
  }, {
    "depth": 2,
    "slug": "参考资料",
    "text": "参考资料"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "引言",
      children: "引言"
    }), "\n", createVNode(_components.p, {
      children: "Server-Sent Events (SSE) 是一种服务器推送技术，允许服务器向客户端实时推送数据。在以下场景特别有用："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "实时数据更新（如股票价格、天气信息）"
      }), "\n", createVNode(_components.li, {
        children: "社交媒体信息流"
      }), "\n", createVNode(_components.li, {
        children: "实时日志显示"
      }), "\n", createVNode(_components.li, {
        children: "进度通知"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m911icos-Pasted-image-20250402200626.webp",
        alt: "Pasted image 20250402200626.webp"
      })
    }), "\n", createVNode(_components.h2, {
      id: "sse-的本质",
      children: "SSE 的本质"
    }), "\n", createVNode(_components.p, {
      children: "SSE 本质上是基于 HTTP 协议的单向通信机制："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "使用 HTTP 长连接实现服务器到客户端的单向数据流"
      }), "\n", createVNode(_components.li, {
        children: "数据格式为纯文本，编码必须是 UTF-8"
      }), "\n", createVNode(_components.li, {
        children: "基于标准 HTTP 协议，无需特殊协议支持"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "sse-的特点",
      children: "SSE 的特点"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "单向通信：服务器到客户端的单向数据流"
      }), "\n", createVNode(_components.li, {
        children: "自动重连：断开后默认自动重连"
      }), "\n", createVNode(_components.li, {
        children: "简单易用：使用标准 HTTP，无需 WebSocket 的复杂配置"
      }), "\n", createVNode(_components.li, {
        children: "支持自定义事件"
      }), "\n", createVNode(_components.li, {
        children: "天然支持跨域（CORS）"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "sse-客户端-api",
      children: "SSE 客户端 API"
    }), "\n", createVNode(_components.p, {
      children: "基本使用示例："
    }), "\n", createVNode(_components.pre, {
      class: "astro-code astro-code-themes github-light one-dark-pro",
      style: {
        backgroundColor: "#fff",
        "--shiki-dark-bg": "#282c34",
        color: "#24292e",
        "--shiki-dark": "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#E5C07B"
            },
            children: " evtSource"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: " EventSource"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "'/events'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#7F848E",
              "--shiki-dark-font-style": "italic"
            },
            children: "// 监听消息"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "evtSource"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "onmessage"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E36209",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#E06C75",
              "--shiki-dark-font-style": "italic"
            },
            children: "event"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "    const"
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#E5C07B"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#E5C07B"
            },
            children: " JSON"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "parse"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "event"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "data"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "    console"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "data"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#7F848E",
              "--shiki-dark-font-style": "italic"
            },
            children: "// 监听连接打开"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "evtSource"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "onopen"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "    console"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "'连接已建立'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#7F848E",
              "--shiki-dark-font-style": "italic"
            },
            children: "// 监听错误"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "evtSource"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "onerror"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E36209",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#E06C75",
              "--shiki-dark-font-style": "italic"
            },
            children: "err"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "    console"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "error"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "'发生错误:'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "err"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#7F848E",
              "--shiki-dark-font-style": "italic"
            },
            children: "// 监听自定义事件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "evtSource"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "addEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "'custom-event'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E36209",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#E06C75",
              "--shiki-dark-font-style": "italic"
            },
            children: "e"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "    console"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "'自定义事件:'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "e"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "data"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#7F848E",
              "--shiki-dark-font-style": "italic"
            },
            children: "// 关闭连接"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#7F848E",
              "--shiki-dark-font-style": "italic"
            },
            children: "// evtSource.close();"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "sse-服务端实现",
      children: "SSE 服务端实现"
    }), "\n", createVNode(_components.h3, {
      id: "数据格式",
      children: "数据格式"
    }), "\n", createVNode(_components.p, {
      children: "服务器发送的数据必须遵循特定格式："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["每条消息以 ", createVNode(_components.code, {
          children: "data:"
        }), " 开头"]
      }), "\n", createVNode(_components.li, {
        children: ["每条消息以 ", createVNode(_components.code, {
          children: "\\n\\n"
        }), " 结尾"]
      }), "\n", createVNode(_components.li, {
        children: "支持多个字段：data、event、id、retry"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "data-字段",
      children: "data 字段"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code astro-code-themes github-light one-dark-pro",
      style: {
        backgroundColor: "#fff",
        "--shiki-dark-bg": "#282c34",
        color: "#24292e",
        "--shiki-dark": "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "text",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "data: 消息内容\\n\\n"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "多行数据："
    }), "\n", createVNode(_components.pre, {
      class: "astro-code astro-code-themes github-light one-dark-pro",
      style: {
        backgroundColor: "#fff",
        "--shiki-dark-bg": "#282c34",
        color: "#24292e",
        "--shiki-dark": "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "text",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "data: 第一行\\n"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "data: 第二行\\n\\n"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "id-字段",
      children: "id 字段"
    }), "\n", createVNode(_components.p, {
      children: ["用于消息标识，断线重连时会发送 ", createVNode(_components.code, {
        children: "Last-Event-ID"
      }), " 头："]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code astro-code-themes github-light one-dark-pro",
      style: {
        backgroundColor: "#fff",
        "--shiki-dark-bg": "#282c34",
        color: "#24292e",
        "--shiki-dark": "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "text",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "id: 1\\n"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "data: 消息内容\\n\\n"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "event-字段",
      children: "event 字段"
    }), "\n", createVNode(_components.p, {
      children: "用于指定事件类型："
    }), "\n", createVNode(_components.pre, {
      class: "astro-code astro-code-themes github-light one-dark-pro",
      style: {
        backgroundColor: "#fff",
        "--shiki-dark-bg": "#282c34",
        color: "#24292e",
        "--shiki-dark": "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "text",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "event: custom-event\\n"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "data: 消息内容\\n\\n"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "retry-字段",
      children: "retry 字段"
    }), "\n", createVNode(_components.p, {
      children: "指定重连时间（毫秒）："
    }), "\n", createVNode(_components.pre, {
      class: "astro-code astro-code-themes github-light one-dark-pro",
      style: {
        backgroundColor: "#fff",
        "--shiki-dark-bg": "#282c34",
        color: "#24292e",
        "--shiki-dark": "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "text",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "retry: 10000\\n"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "data: 消息内容\\n\\n"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "node-服务器实例",
      children: "Node 服务器实例"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code astro-code-themes github-light one-dark-pro",
      style: {
        backgroundColor: "#fff",
        "--shiki-dark-bg": "#282c34",
        color: "#24292e",
        "--shiki-dark": "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#E5C07B"
            },
            children: " express"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "'express'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#E5C07B"
            },
            children: " app"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: " express"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "app"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "get"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "'/events'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ", ("
          }), createVNode(_components.span, {
            style: {
              color: "#E36209",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#E06C75",
              "--shiki-dark-font-style": "italic"
            },
            children: "req"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E36209",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#E06C75",
              "--shiki-dark-font-style": "italic"
            },
            children: "res"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#7F848E",
              "--shiki-dark-font-style": "italic"
            },
            children: "    // 设置 SSE 所需的 headers"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "    res"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "writeHead"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#D19A66"
            },
            children: "200"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ", {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "        'Content-Type'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "'text/event-stream'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "        'Cache-Control'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "'no-cache'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "        'Connection'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "'keep-alive'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "    });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#7F848E",
              "--shiki-dark-font-style": "italic"
            },
            children: "    // 发送初始数据"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "    res"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "write"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "'data: 连接已建立"
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#56B6C2"
            },
            children: "\\n\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#7F848E",
              "--shiki-dark-font-style": "italic"
            },
            children: "    // 定时发送数据"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "    const"
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#E5C07B"
            },
            children: " intervalId"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: " setInterval"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "(() "
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "        const"
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#E5C07B"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "            time"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "new"
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: " Date"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "toISOString"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "(),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "            value"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "Math"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "random"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "        };"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "        res"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "write"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "`data: "
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#C678DD"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#E5C07B"
            },
            children: "JSON"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "stringify"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "data"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#ABB2BF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#C678DD"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#56B6C2"
            },
            children: "\\n\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "    }, "
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#D19A66"
            },
            children: "1000"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#7F848E",
              "--shiki-dark-font-style": "italic"
            },
            children: "    // 监听连接关闭"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "    req"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "on"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "'close'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "        clearInterval"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "intervalId"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "    });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "app"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "listen"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#D19A66"
            },
            children: "3000"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "    console"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "'SSE 服务器运行在 3000 端口'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["格式有特定要求：开头为 ", createVNode(_components.code, {
          children: "data:"
        }), "、结尾为 ", createVNode(_components.code, {
          children: "\\n\\n"
        })]
      }), "\n", createVNode(_components.li, {
        children: "每个浏览器的并发 SSE 连接数有限制"
      }), "\n", createVNode(_components.li, {
        children: "某些代理服务器可能不支持长连接"
      }), "\n", createVNode(_components.li, {
        children: "建议实现错误重试机制"
      }), "\n", createVNode(_components.li, {
        children: "大规模使用时注意服务器资源管理"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "sse-与-websocket-的区别",
      children: "SSE 与 Websocket 的区别"
    }), "\n", createVNode(_components.h3, {
      id: "sse",
      children: createVNode(_components.strong, {
        children: "SSE"
      })
    }), "\n", createVNode(_components.p, {
      children: "SSE 是基于传统的 HTTP 协议实现的，采用了长轮询（long-polling）机制。客户端通过向服务器发送一个 HTTP 请求，服务器保持连接打开并周期性地向客户端发送数据。"
    }), "\n", createVNode(_components.p, {
      children: ["SSE 通过 ", createVNode(_components.code, {
        children: "EventSource"
      }), " 对象来实现，在客户端可以通过监听 ", createVNode(_components.code, {
        children: "onmessage"
      }), " 事件来接收服务器端发送的数据。"]
    }), "\n", createVNode(_components.h3, {
      id: "websocket",
      children: createVNode(_components.strong, {
        children: "WebSocket"
      })
    }), "\n", createVNode(_components.p, {
      children: "WebSocket 是基于独立的 TCP 连接实现的，使用自定义的协议。客户端和服务器之间可以建立持久的全双工通信的连接，可以双向发送和接收数据。"
    }), "\n", createVNode(_components.p, {
      children: "WebSocket 协议是基于帧的，可以通过发送不同类型的帧进行通信。"
    }), "\n", createVNode(_components.h2, {
      id: "总结",
      children: "总结"
    }), "\n", createVNode(_components.p, {
      children: "SSE 是一个简单但强大的服务器推送方案："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "相比 WebSocket 更轻量，实现更简单"
      }), "\n", createVNode(_components.li, {
        children: "单向通信满足大多数推送场景"
      }), "\n", createVNode(_components.li, {
        children: "基于 HTTP 协议，兼容性好"
      }), "\n", createVNode(_components.li, {
        children: "自动重连机制提高可靠性"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "适用场景："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "实时数据更新"
      }), "\n", createVNode(_components.li, {
        children: "消息通知"
      }), "\n", createVNode(_components.li, {
        children: "日志流式处理"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "参考资料",
      children: "参考资料"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.ruanyifeng.com/blog/2017/05/server-sent_events.html",
          children: "Server-Sent Events 教程 - 阮一峰的网络日志"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://juejin.cn/post/7487831341591511067",
          children: "高并发场景下，为什么大厂都选择SSE而不是WebSocket？"
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

const url = "src/content/posts/2504-sse.mdx";
const file = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2504-sse.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2504-sse.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
