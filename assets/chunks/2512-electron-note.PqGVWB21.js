import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server.BPJSHmb2.js';
import 'clsx';

const frontmatter = {
  "title": "Electron 小记",
  "date": "2025-12-23T19:54:00.000Z",
  "updatedAt": "2025-12-23T19:54:00.000Z",
  "tags": ["Electron", "Native"],
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "桌面开发的范式electron-小记",
    "text": "桌面开发的范式：Electron 小记"
  }, {
    "depth": 2,
    "slug": "一-序幕为什么我们需要-electron",
    "text": "一、 序幕：为什么我们需要 Electron？"
  }, {
    "depth": 3,
    "slug": "11-跨平台开发的痛点",
    "text": "1.1 跨平台开发的痛点"
  }, {
    "depth": 3,
    "slug": "12-electron-的诞生与核心价值",
    "text": "1.2 Electron 的诞生与核心价值"
  }, {
    "depth": 2,
    "slug": "二-核心架构揭秘-electron-的运行机制",
    "text": "二、 核心架构：揭秘 Electron 的运行机制"
  }, {
    "depth": 3,
    "slug": "21-它们怎么沟通ipc-机制",
    "text": "2.1 它们怎么沟通？(IPC 机制)"
  }, {
    "depth": 3,
    "slug": "22-架构示意图",
    "text": "2.2 架构示意图"
  }, {
    "depth": 3,
    "slug": "23-代码怎么写",
    "text": "2.3 代码怎么写？"
  }, {
    "depth": 2,
    "slug": "三-为什么这么设计",
    "text": "三、 为什么这么设计？"
  }, {
    "depth": 3,
    "slug": "31-隔离安全与性能",
    "text": "3.1 隔离安全与性能"
  }, {
    "depth": 3,
    "slug": "32-赋予-web-原生超能力",
    "text": "3.2 赋予 Web 原生超能力"
  }, {
    "depth": 3,
    "slug": "33-事件循环的融合",
    "text": "3.3 事件循环的融合"
  }, {
    "depth": 2,
    "slug": "四-electron-面临的问题",
    "text": "四、 Electron 面临的问题"
  }, {
    "depth": 3,
    "slug": "41-内存杀手",
    "text": "4.1 “内存杀手”"
  }, {
    "depth": 3,
    "slug": "42-安全性风险",
    "text": "4.2 安全性风险"
  }, {
    "depth": 3,
    "slug": "43-体验对比表",
    "text": "4.3 体验对比表"
  }, {
    "depth": 2,
    "slug": "五-进化与未来electron-的演进方向",
    "text": "五、 进化与未来：Electron 的演进方向"
  }, {
    "depth": 3,
    "slug": "51-asar-技术",
    "text": "5.1 ASAR 技术"
  }, {
    "depth": 3,
    "slug": "52-性能优化与-v8",
    "text": "5.2 性能优化与 V8"
  }, {
    "depth": 3,
    "slug": "53-竞争对手",
    "text": "5.3 竞争对手"
  }, {
    "depth": 2,
    "slug": "六-总结2026-年我们还应该学-electron-吗",
    "text": "六、 总结：2026 年我们还应该学 Electron 吗？"
  }];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    br: "br",
    code: "code",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "桌面开发的范式electron-小记",
      children: "桌面开发的范式：Electron 小记"
    }), "\n", createVNode(_components.h2, {
      id: "一-序幕为什么我们需要-electron",
      children: "一、 序幕：为什么我们需要 Electron？"
    }), "\n", createVNode(_components.p, {
      children: "如果你是一个前端开发者，或者是刚接触编程的新手，你可能每天都在使用 VS Code 写代码，用 Discord 或 Slack 沟通，用 Notion 记笔记。你是否好奇过，为什么这些体验极佳的“桌面应用”，长得那么像网页？"
    }), "\n", createVNode(_components.p, {
      children: ["答案是：", createVNode(_components.strong, {
        children: "它们本质上就是网页。"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["这就是 ", createVNode(_components.strong, {
        children: "Electron"
      }), " 的魔法。"]
    }), "\n", createVNode(_components.h3, {
      id: "11-跨平台开发的痛点",
      children: "1.1 跨平台开发的痛点"
    }), "\n", createVNode(_components.p, {
      children: "在 Electron 出现之前，开发一个同时能在 Windows、macOS 和 Linux 上运行的桌面软件，简直是噩梦："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Windows"
        }), ": 需要学 C# (.NET) 或 C++。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "macOS"
        }), ": 需要学 Objective-C 或 Swift。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Linux"
        }), ": 需要学 C++ (Qt/GTK)。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "这意味着开发成本要乘以 3。而 Web 技术（HTML/CSS/JS）拥有全球最庞大的开发者群体，且界面迭代速度极快。"
    }), "\n", createVNode(_components.h3, {
      id: "12-electron-的诞生与核心价值",
      children: "1.2 Electron 的诞生与核心价值"
    }), "\n", createVNode(_components.p, {
      children: "GitHub 为了打造 Atom 编辑器（VS Code 的前身），创造了 Electron。它的核心理念非常简单粗暴："
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "把 Chrome 浏览器和 Node.js 打包在一起，装进一个盒子里。"
        })
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Chromium"
        }), "：负责展示漂亮的界面（UI）。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Node.js"
        }), "：负责接触底层系统（读写文件、网络通信）。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "于是，Web 开发者可以直接用自己熟悉的 JavaScript，画出原生级别的桌面应用。"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "二-核心架构揭秘-electron-的运行机制",
      children: "二、 核心架构：揭秘 Electron 的运行机制"
    }), "\n", createVNode(_components.p, {
      children: ["Electron 并不是把网页简单地“套壳”。它设计了一套独特的", createVNode(_components.strong, {
        children: "多进程架构"
      }), "，这稍微有点复杂，但我们用一个比喻来理解。"]
    }), "\n", createVNode(_components.p, {
      children: ["想象 Electron 是一个", createVNode(_components.strong, {
        children: "公司"
      }), "："]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "主进程 (Main Process) —— 公司 CEO"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "数量"
            }), "：只有一个。"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "职责"
            }), "：拥有最高权限。它负责招聘员工（创建窗口）、管理公司资源（文件系统、菜单栏、系统托盘）、处理由于生老病死带来的突发状况（生命周期管理）。"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "能力"
            }), "：基于 Node.js，可以随意操作电脑底层。"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "渲染进程 (Renderer Process) —— 部门员工"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "数量"
            }), "：每个窗口（Web 页面）就是一个员工，可以有多个。"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "职责"
            }), "：只负责把界面画得好看（HTML/CSS/JS 渲染）。"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "能力"
            }), "：基于 Chromium，为了安全，通常被限制在一个“沙盒”里，不能随意读写电脑文件。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "21-它们怎么沟通ipc-机制",
      children: "2.1 它们怎么沟通？(IPC 机制)"
    }), "\n", createVNode(_components.p, {
      children: ["CEO 和员工不在同一个房间（进程隔离），不能直接对话。他们必须通过一条特殊的", createVNode(_components.strong, {
        children: "内部电话线"
      }), "来沟通，这就是 ", createVNode(_components.strong, {
        children: "IPC (进程间通信)"
      }), "。"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "IPC Main"
        }), ": 主进程端的电话。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "IPC Renderer"
        }), ": 渲染进程端的电话。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/2512-electron-note/IPC%20%E9%80%9A%E4%BF%A1.jpg",
        alt: ""
      })
    }), "\n", createVNode(_components.h3, {
      id: "22-架构示意图",
      children: "2.2 架构示意图"
    }), "\n", createVNode(_components.div, {
      class: "mermaid",
      children: ["graph TD\n    subgraph MainProcess [\"主进程 (Node.js)\"]\n        MainScript[\"主脚本 (Main Script)", createVNode(_components.br, {}), "«核心控制»\"]\n        NativeAPI[\"原生 API", createVNode(_components.br, {}), "«系统能力»\"]\n        WindowManager[\"窗口管理", createVNode(_components.br, {}), "«业务逻辑»\"]\n    end\n\n    IPC((\"IPC 通信通道\"))\n\n    subgraph RendererA [\"渲染进程 A (Chromium)\"]\n        PageA[\"Web 页面 A", createVNode(_components.br, {}), "«用户界面»\"]\n        PreloadA[\"预加载脚本 A (Preload)", createVNode(_components.br, {}), "«桥接层»\"]\n    end\n\n    subgraph RendererB [\"渲染进程 B (Chromium)\"]\n        PageB[\"Web 页面 B", createVNode(_components.br, {}), "«用户界面»\"]\n        PreloadB[\"预加载脚本 B (Preload)", createVNode(_components.br, {}), "«桥接层»\"]\n    end\n\n    subgraph OS [\"操作系统 (OS)\"]\n        FileSystem[(\"文件系统\")]\n        Network[(\"网络\")]\n        NativeGUI[(\"原生 GUI\")]\n    end\n\n    %% 关系连接\n    MainScript <--> IPC\n    IPC <--> PreloadA\n    IPC <--> PreloadB\n\n    MainScript --> NativeAPI\n    NativeAPI --- OS\n    PageA -. \"Context Bridge (上下文桥接)\" .-> PreloadA\n    PageB -. \"Context Bridge (上下文桥接)\" .-> PreloadB"]
    }), "\n", createVNode(_components.h3, {
      id: "23-代码怎么写",
      children: "2.3 代码怎么写？"
    }), "\n", createVNode(_components.p, {
      children: ["为了安全，现在官方推荐使用 ", createVNode(_components.code, {
        children: "ContextBridge"
      }), "。这就像在员工和 CEO 之间设立一个“传达室”，防止外部黑客通过网页直接控制 CEO。"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "主进程 (CEO)"
          }), ": 监听请求。"]
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
          "data-language": "js",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D",
                  "--shiki-light-font-style": "inherit",
                  "--shiki-dark": "#7F848E",
                  "--shiki-dark-font-style": "italic"
                },
                children: "// main.js"
              })
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
                  color: "#24292E",
                  "--shiki-dark": "#ABB2BF"
                },
                children: " { "
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#E5C07B"
                },
                children: "ipcMain"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ABB2BF"
                },
                children: " } "
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#56B6C2"
                },
                children: "="
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
                children: "\"electron\""
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
                  color: "#6A737D",
                  "--shiki-light-font-style": "inherit",
                  "--shiki-dark": "#7F848E",
                  "--shiki-dark-font-style": "italic"
                },
                children: "// 监听 'get-system-info' 请求"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E5C07B"
                },
                children: "ipcMain"
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
                children: "handle"
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
                children: "\"get-system-info\""
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
                children: "async"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ABB2BF"
                },
                children: " () "
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
                children: "  return"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ABB2BF"
                },
                children: " { "
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E06C75"
                },
                children: "platform"
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
                children: "process"
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
                children: "platform"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ABB2BF"
                },
                children: " };"
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
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "预加载脚本 (传达室)"
          }), ": 暴露安全的方法。"]
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
          "data-language": "js",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D",
                  "--shiki-light-font-style": "inherit",
                  "--shiki-dark": "#7F848E",
                  "--shiki-dark-font-style": "italic"
                },
                children: "// preload.js"
              })
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
                  color: "#24292E",
                  "--shiki-dark": "#ABB2BF"
                },
                children: " { "
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#E5C07B"
                },
                children: "contextBridge"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ABB2BF"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#E5C07B"
                },
                children: "ipcRenderer"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ABB2BF"
                },
                children: " } "
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#56B6C2"
                },
                children: "="
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
                children: "\"electron\""
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
                  color: "#6A737D",
                  "--shiki-light-font-style": "inherit",
                  "--shiki-dark": "#7F848E",
                  "--shiki-dark-font-style": "italic"
                },
                children: "// 给网页暴露一个叫 electronAPI 的对象"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E5C07B"
                },
                children: "contextBridge"
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
                children: "exposeInMainWorld"
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
                children: "\"electronAPI\""
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
                  color: "#6F42C1",
                  "--shiki-dark": "#61AFEF"
                },
                children: "  getStats"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ABB2BF"
                },
                children: ": () "
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#C678DD"
                },
                children: "=>"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E5C07B"
                },
                children: " ipcRenderer"
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
                children: "invoke"
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
                children: "\"get-system-info\""
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ABB2BF"
                },
                children: "),"
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
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "渲染进程 (员工)"
          }), ": 调用方法。"]
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
          "data-language": "js",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D",
                  "--shiki-light-font-style": "inherit",
                  "--shiki-dark": "#7F848E",
                  "--shiki-dark-font-style": "italic"
                },
                children: "// renderer.js"
              })
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
                children: " info"
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
                children: " await"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E5C07B"
                },
                children: " window"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ABB2BF"
                },
                children: "."
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E5C07B"
                },
                children: "electronAPI"
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
                children: "getStats"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ABB2BF"
                },
                children: "();"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E5C07B"
                },
                children: "console"
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
                children: "info"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ABB2BF"
                },
                children: ");"
              })]
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/2512-electron-note/contentBridge.jpg",
        alt: ""
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "三-为什么这么设计",
      children: "三、 为什么这么设计？"
    }), "\n", createVNode(_components.h3, {
      id: "31-隔离安全与性能",
      children: "3.1 隔离安全与性能"
    }), "\n", createVNode(_components.p, {
      children: "如果 Chrome 也是单进程的，这意味着只要你打开的一个网页崩溃了，整个浏览器就会闪退。Electron 同理："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "渲染进程崩溃"
        }), "：只是当前窗口白屏，主程序还在，可以尝试刷新恢复。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "主进程崩溃"
        }), "：那是真的“全剧终”，整个应用退出。"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "32-赋予-web-原生超能力",
      children: "3.2 赋予 Web 原生超能力"
    }), "\n", createVNode(_components.p, {
      children: ["普通的浏览器网页无法读取你电脑上的 ", createVNode(_components.code, {
        children: "C:\\Users\\Documents"
      }), "。但 Electron 通过 Node.js 打破了这个限制。"]
    }), "\n", createVNode(_components.p, {
      children: "下面的流程图展示了 Web 页面是如何一步步获取到操作系统的文件的："
    }), "\n", createVNode(_components.div, {
      class: "mermaid",
      children: "sequenceDiagram\n    autonumber\n    title Electron 获取原生能力逻辑流\n\n    participant UI as 渲染层 (JS/HTML)\n    participant Preload as 预加载脚本 (Preload)\n    participant IPCR as IPC (渲染端)\n    participant IPCM as IPC (主进程端)\n    participant Main as 主进程 (Node.js)\n    participant OS as 系统 API / 原生库\n\n    UI->>Preload: 调用暴露的方法 (例如: selectFile())\n    Preload->>IPCR: ipcRenderer.invoke('select-file')\n    IPCR->>IPCM: 发送异步消息 (Mojo/Pipe)\n    IPCM->>Main: 触发 ipcMain.handle 监听器\n    Main->>OS: 调用 Node.js fs 模块或 Electron dialog API\n    OS-->>Main: 返回执行结果 (文件路径/数据)\n    Main-->>IPCM: 返回 Promise 结果\n    IPCM-->>IPCR: 跨进程回传数据\n    IPCR-->>Preload: 得到结果\n    Preload-->>UI: 回调更新界面"
    }), "\n", createVNode(_components.h3, {
      id: "33-事件循环的融合",
      children: "3.3 事件循环的融合"
    }), "\n", createVNode(_components.p, {
      children: "Electron 最厉害的技术难点之一，是将 Node.js 的事件循环（Libuv）和 Chromium 的事件循环（MessageLoop）融合在一起。如果不融合，UI 渲染的时候 Node.js 就会卡住，反之亦然。"
    }), "\n", createVNode(_components.div, {
      class: "mermaid",
      children: "sequenceDiagram\n    title Node.js 与 Chromium 事件循环集成\n\n    box \"Electron 运行环境\" #e6f3ff\n        participant CML as Chromium 消息循环\n        participant Bridge as Electron 桥接层\n        participant UV as Node.js Libuv 循环\n    end\n\n    participant OS as 系统事件 (I/O, 定时器, UI)\n\n    OS->>CML: 捕获系统事件 (鼠标点击/绘制)\n    CML->>CML: 处理 Web 渲染逻辑\n\n    loop 轮询集成 (Polling Integration)\n        CML->>Bridge: 检查 Node.js 任务状态\n        Bridge->>UV: 询问: \"有待处理的异步任务吗?\"\n        UV->>UV: 处理文件 I/O、网络请求、定时器\n        UV-->>Bridge: 返回结果/回调\n        Bridge->>CML: 将 Node 回调注入消息队列\n    end\n\n    CML->>OS: 更新 UI / 执行系统响应"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "四-electron-面临的问题",
      children: "四、 Electron 面临的问题"
    }), "\n", createVNode(_components.p, {
      children: "虽然 Electron 开发爽，但它也不是完美的。"
    }), "\n", createVNode(_components.h3, {
      id: "41-内存杀手",
      children: "4.1 “内存杀手”"
    }), "\n", createVNode(_components.p, {
      children: "每个 Electron 应用都相当于带了一个迷你版的 Chrome 浏览器。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "体积大"
        }), "：哪怕写一个 Hello World，打包出来也得 100MB+。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "吃内存"
        }), "：多开几个 Electron 应用（VS Code + Slack + Notion），你的内存条就开始尖叫了。"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "42-安全性风险",
      children: "4.2 安全性风险"
    }), "\n", createVNode(_components.p, {
      children: ["早期开发者为了图方便，喜欢开启 ", createVNode(_components.code, {
        children: "nodeIntegration: true"
      }), "。这相当于把自家的钥匙直接挂在门把手上。如果你的应用加载了一个恶意网页，黑客可以用一行 JS 代码删光你的硬盘。\n", createVNode(_components.strong, {
        children: "现在的最佳实践是：默认关闭 Node 集成，使用 Context Isolation（上下文隔离）。"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "43-体验对比表",
      children: "4.3 体验对比表"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "指标"
          }), createVNode(_components.th, {
            children: "Electron"
          }), createVNode(_components.th, {
            children: "Tauri"
          }), createVNode(_components.th, {
            children: "原生开发 (Native)"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "安装包大小"
            })
          }), createVNode(_components.td, {
            children: "~150MB+ (胖)"
          }), createVNode(_components.td, {
            children: "~10MB (瘦)"
          }), createVNode(_components.td, {
            children: "< 5MB (精)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "内存占用"
            })
          }), createVNode(_components.td, {
            children: "~100MB+"
          }), createVNode(_components.td, {
            children: "~30MB"
          }), createVNode(_components.td, {
            children: "< 20MB"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "UI 渲染"
            })
          }), createVNode(_components.td, {
            children: "Chromium 内核"
          }), createVNode(_components.td, {
            children: "调用系统自带 WebView"
          }), createVNode(_components.td, {
            children: "操作系统原生引擎"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "开发语言"
            })
          }), createVNode(_components.td, {
            children: "JS / TS"
          }), createVNode(_components.td, {
            children: "Rust + JS"
          }), createVNode(_components.td, {
            children: "C++ / Swift / C#"
          })]
        })]
      })]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "那么，什么情况下不应该用 Electron？"
        })
      }), "\n", createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "轻量级工具"
          }), "：如果你只是想做一个简单的计算器或便签，为了这点功能塞进 150MB 的体积简直是杀鸡用牛刀。"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "对性能极其敏感"
          }), "：比如高频交易软件、大型 3D 游戏，原生开发依然是王道。"]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "老旧硬件"
          }), "：如果你的目标用户还在用 4GB 内存的电脑，Electron 应用会让他们非常痛苦。"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "五-进化与未来electron-的演进方向",
      children: "五、 进化与未来：Electron 的演进方向"
    }), "\n", createVNode(_components.h3, {
      id: "51-asar-技术",
      children: "5.1 ASAR 技术"
    }), "\n", createVNode(_components.p, {
      children: ["这是一个简单的归档格式。Electron 把你的成千上万个小 JS 文件打包成一个 ", createVNode(_components.code, {
        children: ".asar"
      }), " 文件。"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "好处"
        }), "：Windows 读取大文件的速度远快于读取一万个小文件。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "副作用"
        }), "：稍微隐藏了一下源代码（虽然还是能被解包）。"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "52-性能优化与-v8",
      children: "5.2 性能优化与 V8"
    }), "\n", createVNode(_components.p, {
      children: "随着 V8 引擎的升级，JS 的执行速度越来越快。WebAssembly (WASM) 的引入，让视频剪辑、图像处理等重计算任务在 Electron 中也变得可行（参考 Figma 的桌面版）。"
    }), "\n", createVNode(_components.h3, {
      id: "53-竞争对手",
      children: "5.3 竞争对手"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Tauri"
      }), " 是目前最强有力的挑战者。它用 Rust 写后端，前端复用系统自带的 WebView（Edge on Windows, Safari on macOS）。这解决了安装包体积大的问题，但系统兼容性处理起来比 Electron 麻烦得多。"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "六-总结2026-年我们还应该学-electron-吗",
      children: "六、 总结：2026 年我们还应该学 Electron 吗？"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "答案是肯定的。"
      })
    }), "\n", createVNode(_components.p, {
      children: ["虽然它有体积大、吃内存的缺点，但在", createVNode(_components.strong, {
        children: "构建复杂的、重交互的生产力工具"
      }), "（如 IDE、设计软件、协同办公软件）方面，Electron 依然是霸主。"]
    }), "\n", createVNode(_components.p, {
      children: "它的生态最成熟，坑最少，能在最短时间内把产品做出来并推向所有平台。对于大多数公司和开发者来说，“开发效率”和“跨平台一致性”远比那 100MB 的硬盘空间重要。"
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

const url = "src/content/posts/2512-electron-note.mdx";
const file = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2512-electron-note.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2512-electron-note.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
