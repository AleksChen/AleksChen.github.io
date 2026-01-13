import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server.C36FTnHO.js';
import 'clsx';

const frontmatter = {
  "title": "H5 中的浮点数渲染差异：iOS vs Android",
  "date": "2024-12-13T09:26:35.808Z",
  "updatedAt": "2024-12-13T09:26:35.809Z",
  "tags": ["Android", "iOS"],
  "draft": false,
  "slug": "2412-float-attribute-in-ios-android"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "一概述",
    "text": "一、概述"
  }, {
    "depth": 2,
    "slug": "二渲染差异对比",
    "text": "二、渲染差异对比"
  }, {
    "depth": 3,
    "slug": "1-文字渲染",
    "text": "1. 文字渲染"
  }, {
    "depth": 4,
    "slug": "ios-webkit",
    "text": "iOS (WebKit)"
  }, {
    "depth": 4,
    "slug": "android-chromium",
    "text": "Android (Chromium)"
  }, {
    "depth": 3,
    "slug": "2-ui-元素",
    "text": "2. UI 元素"
  }, {
    "depth": 2,
    "slug": "三产生差异的原因",
    "text": "三、产生差异的原因"
  }, {
    "depth": 3,
    "slug": "1-技术层面",
    "text": "1. 技术层面"
  }, {
    "depth": 3,
    "slug": "2-历史原因",
    "text": "2. 历史原因"
  }, {
    "depth": 2,
    "slug": "四开发建议",
    "text": "四、开发建议"
  }, {
    "depth": 3,
    "slug": "1-通用处理方案",
    "text": "1. 通用处理方案"
  }, {
    "depth": 3,
    "slug": "2-特殊场景处理",
    "text": "2. 特殊场景处理"
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
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "一概述",
      children: createVNode(_components.strong, {
        children: "一、概述"
      })
    }), "\n", createVNode(_components.p, {
      children: "移动端 H5 开发中，浮点数的渲染处理是一个常见但容易被忽视的问题。iOS 和 Android 平台由于底层渲染引擎的差异，对浮点数的处理存在明显不同。了解这些差异对于开发高质量的跨平台 H5 应用至关重要。"
    }), "\n", createVNode(_components.h2, {
      id: "二渲染差异对比",
      children: createVNode(_components.strong, {
        children: "二、渲染差异对比"
      })
    }), "\n", createVNode(_components.h3, {
      id: "1-文字渲染",
      children: createVNode(_components.strong, {
        children: "1. 文字渲染"
      })
    }), "\n", createVNode(_components.h4, {
      id: "ios-webkit",
      children: "iOS (WebKit)"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "行高强制对齐整数像素，如 14.3px 会被四舍五入为 14px"
      }), "\n", createVNode(_components.li, {
        children: "字号会被四舍五入到最近的整数"
      }), "\n", createVNode(_components.li, {
        children: "原因：CoreText 渲染引擎为保证文字清晰度，强制像素对齐"
      }), "\n"]
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "14.3px -> 14px"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "14.7px -> 15px"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "14.5px -> 15px"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "android-chromium",
      children: "Android (Chromium)"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "完整支持浮点数渲染"
      }), "\n", createVNode(_components.li, {
        children: "可以实现精确的小数行高和字号"
      }), "\n", createVNode(_components.li, {
        children: "使用 Skia 渲染引擎，支持亚像素渲染"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2-ui-元素",
      children: createVNode(_components.strong, {
        children: "2. UI 元素"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "共同支持浮点数的属性"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "transform: 支持精确的小数值动画"
      }), "\n", createVNode(_components.li, {
        children: "opacity: 支持 0-1 之间的任意浮点数"
      }), "\n", createVNode(_components.li, {
        children: "position: 支持精确定位"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "平台特定行为"
      })
    }), "\n", createVNode(_components.p, {
      children: "iOS:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "border: 强制对齐到整数像素"
      }), "\n", createVNode(_components.li, {
        children: "box-shadow: 支持浮点数但可能存在性能问题"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Android:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "几乎所有属性都支持浮点数"
      }), "\n", createVNode(_components.li, {
        children: "渲染精度取决于设备的硬件能力"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "三产生差异的原因",
      children: createVNode(_components.strong, {
        children: "三、产生差异的原因"
      })
    }), "\n", createVNode(_components.h3, {
      id: "1-技术层面",
      children: createVNode(_components.strong, {
        children: "1. 技术层面"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "iOS CoreText 追求文字渲染的清晰度和一致性"
      }), "\n", createVNode(_components.li, {
        children: "Android Skia 更注重渲染的灵活性和精确性"
      }), "\n", createVNode(_components.li, {
        children: "硬件加速实现方式的不同导致精度差异"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2-历史原因",
      children: createVNode(_components.strong, {
        children: "2. 历史原因"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Apple 一直强调用户体验的一致性"
      }), "\n", createVNode(_components.li, {
        children: "Android 的开放性导致更灵活的渲染策略"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "四开发建议",
      children: createVNode(_components.strong, {
        children: "四、开发建议"
      })
    }), "\n", createVNode(_components.h3, {
      id: "1-通用处理方案",
      children: createVNode(_components.strong, {
        children: "1. 通用处理方案"
      })
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#7F848E",
              "--shiki-dark-font-style": "italic"
            },
            children: "// 检测平台"
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
            children: " isIOS"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#E06C75"
            },
            children: " /iPhone"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#ABB2BF"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#E06C75"
            },
            children: "iPad"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#ABB2BF"
            },
            children: "|"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#E06C75"
            },
            children: "iPod/"
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
            children: "test"
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
            children: "navigator"
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
            children: "userAgent"
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
            children: "// 行高处理"
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
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: " getLineHeight"
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
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#E36209",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#E06C75",
              "--shiki-dark-font-style": "italic"
            },
            children: "value"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: " isIOS"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: " ?"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: " Math"
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
            children: "round"
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
            children: "value"
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
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: " value"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ";"
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
            children: "// 使用示例"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "element"
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
            children: "style"
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
            children: "lineHeight"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: " `"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#C678DD"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "getLineHeight"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#D19A66"
            },
            children: "14.3"
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
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "px`"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ";"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "2-特殊场景处理",
      children: createVNode(_components.strong, {
        children: "2. 特殊场景处理"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "动画效果"
      })
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#7F848E",
              "--shiki-dark-font-style": "italic"
            },
            children: "// 文字动画处理"
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
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: " animateText"
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
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#E36209",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#E06C75",
              "--shiki-dark-font-style": "italic"
            },
            children: "element"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "  if"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "isIOS"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ") {"
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
            children: "    // iOS 使用整数步进"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "    element"
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
            children: "style"
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
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: " `translateY("
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#C678DD"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "Math"
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
            children: "round"
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
            children: "value"
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
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "px)`"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "  } "
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "else"
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
            children: "    // Android 可以使用浮点数"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "    element"
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
            children: "style"
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
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: " `translateY("
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#C678DD"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "value"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#C678DD"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "px)`"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "文字排版"
      })
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#7F848E",
              "--shiki-dark-font-style": "italic"
            },
            children: "/* 跨平台一致性处理 */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
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
            children: "text"
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
            children: "  /* 使用整数值避免差异 */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "  line"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#E06C75"
            },
            children: "height"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": 20"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "px"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "  font"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#E06C75"
            },
            children: "size"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": 16"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "px"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "  "
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
            children: "  /* 需要精确控制时使用 transform */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#E06C75"
            },
            children: "  transform"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "translateY"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "(0.5"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "px"
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
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "结论",
      children: "结论"
    }), "\n", createVNode(_components.p, {
      children: "理解和妥善处理浮点数渲染差异，是开发高质量 H5 应用的重要环节。在实际开发中，应该根据具体场景选择合适的处理策略，在保证体验一致性的同时，也要充分利用各平台的特性。"
    }), "\n", createVNode(_components.h2, {
      id: "参考资料",
      children: "参考资料"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/Introduction/Introduction.html",
          children: "Developing Web Content for Safari"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.chromium.org/developers/design-documents/graphics-and-skia/",
          children: "Graphics and Skia"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.w3.org/TR/css-values-3/",
          children: "CSS Values and Units Module Level 3"
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

const url = "src/content/posts/2412-float-attribute-in-ios-android.mdx";
const file = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2412-float-attribute-in-ios-android.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2412-float-attribute-in-ios-android.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
