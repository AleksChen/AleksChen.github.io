import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server.BR4veou0.js';
import 'clsx';

const frontmatter = {
  "title": "setTimeout 最小延迟机制",
  "date": "2025-01-09T07:33:49.472Z",
  "updatedAt": "2025-01-09T08:12:09.482Z",
  "tags": ["JavaScript"],
  "draft": false,
  "slug": "2501-javascript-setTimeout-timeout"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "引言",
    "text": "引言"
  }, {
    "depth": 2,
    "slug": "最小延迟值的演变",
    "text": "最小延迟值的演变"
  }, {
    "depth": 3,
    "slug": "历史变迁",
    "text": "历史变迁"
  }, {
    "depth": 2,
    "slug": "规范依据",
    "text": "规范依据"
  }, {
    "depth": 3,
    "slug": "html-规范",
    "text": "HTML 规范"
  }, {
    "depth": 3,
    "slug": "chrome-源码分析",
    "text": "Chrome 源码分析"
  }, {
    "depth": 2,
    "slug": "技术原理解析",
    "text": "技术原理解析"
  }, {
    "depth": 3,
    "slug": "1-事件循环与定时器",
    "text": "1. 事件循环与定时器"
  }, {
    "depth": 3,
    "slug": "2-最小延迟测算",
    "text": "2. 最小延迟测算"
  }, {
    "depth": 2,
    "slug": "性能影响与优化",
    "text": "性能影响与优化"
  }, {
    "depth": 3,
    "slug": "1-cpu-和电池影响",
    "text": "1. CPU 和电池影响"
  }, {
    "depth": 3,
    "slug": "2-替代方案",
    "text": "2. 替代方案"
  }, {
    "depth": 2,
    "slug": "结论",
    "text": "结论"
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
      children: ["在 JavaScript 中，", createVNode(_components.code, {
        children: "setTimeout"
      }), " 是最常用的定时器 API 之一。然而，很多开发者可能并不了解，当我们设置一个理论上的”0毫秒”延迟时，实际上并不会为 0ms。在某些场景下实际执行时间甚至永远不会小于 4ms。这个看似奇怪的限制背后有着深层的技术原因和历史渊源。"]
    }), "\n", createVNode(_components.h2, {
      id: "最小延迟值的演变",
      children: "最小延迟值的演变"
    }), "\n", createVNode(_components.h3, {
      id: "历史变迁",
      children: "历史变迁"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "1995年：JavaScript 首次在 Netscape Navigator 中引入"
      }), "\n", createVNode(_components.li, {
        children: "2003年：IE 实现了 15.625ms 的最小延迟"
      }), "\n", createVNode(_components.li, {
        children: "2009年：Firefox 采用了 10ms 的限制"
      }), "\n", createVNode(_components.li, {
        children: "2010年：HTML5 规范将嵌套层级大于等于 5 的场景的最小延迟标准化为 4ms，层级小于 5 的情况下最小延迟标准化为 0ms"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "规范依据",
      children: "规范依据"
    }), "\n", createVNode(_components.h3, {
      id: "html-规范",
      children: "HTML 规范"
    }), "\n", createVNode(_components.p, {
      children: "根据 HTML Living Standard 规范："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["如果设置的 ", createVNode(_components.code, {
          children: "timeout"
        }), " 小于 0，则设置为 0"]
      }), "\n", createVNode(_components.li, {
        children: "如果嵌套的层级超过了 5 层，并且 timeout 小于 4ms，则设置 timeout 为 4ms。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m5p0iae8-image.png",
        alt: "image.png"
      })
    }), "\n", createVNode(_components.h3, {
      id: "chrome-源码分析",
      children: "Chrome 源码分析"
    }), "\n", createVNode(_components.p, {
      children: "在 Chromium 的源代码中，我们可以看到相关实现："
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cpp",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "static"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " int"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " kMaxTimerNestingLevel "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 5"
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
            children: "static"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " double"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " kMinimumInterval "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0.004"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: " // 4ms"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "技术原理解析",
      children: "技术原理解析"
    }), "\n", createVNode(_components.h3, {
      id: "1-事件循环与定时器",
      children: "1. 事件循环与定时器"
    }), "\n", createVNode(_components.p, {
      children: "JavaScript 的事件循环机制是理解 setTimeout 行为的关键。定时器不是一个真正的”睡眠”，而是将回调函数放入一个待执行队列。等到满足定时条件后，再执行回调函数。"
    }), "\n", createVNode(_components.h3, {
      id: "2-最小延迟测算",
      children: "2. 最小延迟测算"
    }), "\n", createVNode(_components.p, {
      children: ["下面是一个测算 ", createVNode(_components.code, {
        children: "setTimeout"
      }), " 实际延迟时间的示例"]
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
            children: "// 示例：嵌套定时器的行为"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " nestedTimer"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "depth"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0"
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
            children: "    const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " start"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " performance."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "now"
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
              color: "#B392F0"
            },
            children: "    setTimeout"
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
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " delay"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " performance."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "now"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " start;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        console."
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
              color: "#9ECBFF"
            },
            children: "`Depth ${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "depth"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}, Actual delay: ${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "delay"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}ms`"
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
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (depth "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "nestedTimer"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(depth "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1"
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
            children: "    }, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
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
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m5p0iae7-image.png",
        alt: "image.png"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "结果分析"
      })
    }), "\n", createVNode(_components.p, {
      children: ["当嵌套层数少于 5 层时，；理论延迟时间是 0ms；当嵌套层数大于等于 5 层时，理论延迟时间是 4ms（此处和 HTML 规范不一样）。但实际的执行延时受制于事件循环机制，", createVNode(_components.code, {
        children: "setTimeout"
      }), " 回调需要等待："]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "当前同步代码执行完；"
      }), "\n", createVNode(_components.li, {
        children: "微任务队列情况"
      }), "\n", createVNode(_components.li, {
        children: "定时器到期"
      }), "\n", createVNode(_components.li, {
        children: "等待下一个宏任务执行时机"
      }), "\n", createVNode(_components.li, {
        children: "代码执行开销"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "因此，实际的时延会比设置值向上浮动。但 timeout 值的下限是受到嵌套层级约束的。"
    }), "\n", createVNode(_components.h2, {
      id: "性能影响与优化",
      children: "性能影响与优化"
    }), "\n", createVNode(_components.h3, {
      id: "1-cpu-和电池影响",
      children: "1. CPU 和电池影响"
    }), "\n", createVNode(_components.p, {
      children: "过于频繁的定时器调用会导致："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "CPU 使用率上升"
      }), "\n", createVNode(_components.li, {
        children: "设备发热增加"
      }), "\n", createVNode(_components.li, {
        children: "电池寿命减少"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2-替代方案",
      children: "2. 替代方案"
    }), "\n", createVNode(_components.p, {
      children: "对于需要高精度计时的场景，推荐使用："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "requestAnimationFrame"
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
              color: "#B392F0"
            },
            children: "requestAnimationFrame"
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
            children: " { "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "\t// 用于动画的精确控制 "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Web Workers"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// worker.js "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "setInterval"
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
            children: " { "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "\tpostMessage"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'tick'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Performance.now()"
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
        children: createVNode(_components.span, {
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
            children: " start"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Performance."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "now"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 用于精确计时"
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "结论",
      children: "结论"
    }), "\n", createVNode(_components.p, {
      children: "setTimeout 的 4ms 最小延迟是一个经过深思熟虑的设计决策，它平衡了开发便利性、性能开销和浏览器兼容性。理解这个机制有助于我们写出更好的异步代码。"
    }), "\n", createVNode(_components.h2, {
      id: "参考资料",
      children: "参考资料"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout",
          children: "HTML Standard"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://mp.weixin.qq.com/s/4P7ohpRmBChXQpLC-MHgHQ",
          children: "为什么 setTimeout 有最小时延 4ms ?"
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

const url = "src/content/posts/2501-javascript-setTimeout-timeout.mdx";
const file = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2501-javascript-setTimeout-timeout.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2501-javascript-setTimeout-timeout.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
