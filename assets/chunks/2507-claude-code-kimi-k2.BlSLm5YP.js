import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server.BPJSHmb2.js';
import 'clsx';

const frontmatter = {
  "title": "Claude Code 中接入 Kimi K2 大模型",
  "date": "2025-07-17T09:39:21.783Z",
  "updatedAt": "2025-07-17T09:44:32.159Z",
  "tags": ["AI"],
  "draft": false,
  "slug": "2507-claude-code-kimi-k2"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "前言",
    "text": "前言"
  }, {
    "depth": 2,
    "slug": "环境准备",
    "text": "环境准备"
  }, {
    "depth": 2,
    "slug": "api-key-配置",
    "text": "API Key 配置"
  }, {
    "depth": 3,
    "slug": "",
    "text": ""
  }, {
    "depth": 3,
    "slug": "macos--linux",
    "text": "macOS / Linux"
  }, {
    "depth": 2,
    "slug": "启动与模型切换验证",
    "text": "启动与模型切换验证"
  }, {
    "depth": 2,
    "slug": "常见问题与排查",
    "text": "常见问题与排查"
  }, {
    "depth": 2,
    "slug": "kimi-k2-大模型的真香时刻",
    "text": "Kimi K2 大模型的”真香”时刻"
  }, {
    "depth": 3,
    "slug": "注意事项",
    "text": "注意事项"
  }, {
    "depth": 2,
    "slug": "总结",
    "text": "总结"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
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
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "前言",
      children: "前言"
    }), "\n", createVNode(_components.p, {
      children: "Claude Code 是 Anthropic 推出的 AI 编程助手，具备强大的代码生成与理解能力。然而，受限于国内网络环境，Claude Sonnet 4、Claude Opus 4 等模型的使用门槛较高。为此，本文介绍如何将 Claude Code 切换为月之暗面最新发布的 Kimi K2 大模型，实现无缝对接与高效开发。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/md774iew-image-20250717161529431.webp",
        alt: "image-20250717161529431.webp"
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "环境准备",
      children: "环境准备"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "安装最新版 Node.js"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["请前往 ", createVNode(_components.a, {
        href: "https://nodejs.org/",
        children: "Node.js 官网"
      }), "下载并安装。"]
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "安装 Claude Code"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["终端执行：", createVNode(_components.code, {
        children: "npm install -g @anthropic-ai/claude-code"
      })]
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "注册 Kimi API 平台账号并获取 API Key"
        })
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["打开 ", createVNode(_components.a, {
          href: "https://kimi.moonshot.cn/",
          children: "Kimi API 平台"
        }), "，注册账号。"]
      }), "\n", createVNode(_components.li, {
        children: "登录后，新建 API Key。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/md774iey-image-20250717155709394.webp",
        alt: "image-20250717155709394.webp"
      })
    }), "\n", createVNode(_components.ol, {
      start: "4",
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "充值升级账号（强烈建议）"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "免费版 Kimi API 限制较多，建议充值 50 元升级至 Tier1，解锁更高额度和更稳定的调用权限。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/md774iez-image-20250717155753583.webp",
        alt: "image-20250717155753583.webp"
      })
    }), "\n", createVNode(_components.h2, {
      id: "api-key-配置",
      children: "API Key 配置"
    }), "\n", createVNode(_components.p, {
      children: "修改 Claude Code 的默认配置，使用自定义的模型能力。"
    }), "\n", createVNode(_components.h3, {
      id: ""
    }), "\n", createVNode(_components.p, {
      children: "Windows"
    }), "\n", createVNode(_components.p, {
      children: "在命令提示符中执行："
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "setx"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: " ANTHROPIC_AUTH_TOKEN"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: " \"你的 API 密钥\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "setx"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: " ANTHROPIC_BASE_URL"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: " \"https://api.moonshot.cn/anthropic\""
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "macos--linux",
      children: "macOS / Linux"
    }), "\n", createVNode(_components.p, {
      children: "根据所用终端类型，编辑对应配置文件："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Bash 用户：", createVNode(_components.code, {
          children: "~/.bashrc"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Zsh 用户：", createVNode(_components.code, {
          children: "~/.zshrc"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "添加如下内容："
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: " ANTHROPIC_AUTH_TOKEN"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "你的API密钥"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: " ANTHROPIC_BASE_URL"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "https"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "://"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "api"
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
            children: "moonshot"
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
            children: "cn"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "anthropic"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["保存后，执行 ", createVNode(_components.code, {
        children: "source ~/.zshrc"
      }), " 或重启终端使配置生效。"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "启动与模型切换验证",
      children: "启动与模型切换验证"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["进入项目目录，运行：", createVNode(_components.code, {
            children: "claude"
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "启动后，界面下方 Overrides 区域应显示 API Key 和 API Base 信息。"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/md774iez-image-20250717155925831.webp",
        alt: "image-20250717155925831.webp"
      })
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: "随便输入点啥（友情提示：每次输入都要花钱），只要 tokens 在跳动，恭喜你，模型已上线。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/md774iez-image-20250717160008829.webp",
        alt: "image-20250717160008829.webp"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/md774iez-image-20250717161127189.webp",
        alt: "image-20250717161127189.webp"
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.em, {
          children: "界面写着 claude，其实背后已经是 kimi-k2-0711-preview 在默默搬砖。"
        })
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "常见问题与排查",
      children: "常见问题与排查"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "1.API Key 配置无效"
      }), "："]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "检查密钥是否有误，或是否已生效（重启终端/重新加载配置文件）。"
      }), "\n", createVNode(_components.li, {
        children: "免费额度用尽或账号未充值也会导致调用失败。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "2.无法切换模型："
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["确认 ANTHROPIC_BASE_URL 是否正确填写为 ", createVNode(_components.code, {
          children: "https://api.moonshot.cn/anthropic"
        }), "。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "3.调用费用过高："
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "每次输入均计费，建议合理规划调用频率。"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "kimi-k2-大模型的真香时刻",
      children: "Kimi K2 大模型的”真香”时刻"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "代码能力爆表"
        }), "："]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "各种榜单吊打 GPT-4.1、DeepSeek-V3，自动化、企业开发都不在话下。"
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "超大上下文，记忆力惊人"
        }), "："]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "128k tokens，几十万字随便塞，长文档、老项目都能 hold 住。"
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "价格感人，合规省心"
        }), "："]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "输入 1 美元/百万 tokens，输出 3 美元/百万 tokens，省下的钱可以多喝几杯咖啡。"
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "4",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "生态丰富，接口友好"
        }), "："]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "兼容 Anthropic 协议，CLI、GUI、VSCode 插件全都能用。"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "API Key 属于敏感信息，请妥善保管，避免泄露。"
      }), "\n", createVNode(_components.li, {
        children: "免费额度有限，建议及时充值以保证服务稳定。"
      }), "\n", createVNode(_components.li, {
        children: "若需切换回 Claude 原生模型，只需恢复默认 ANTHROPIC_BASE_URL。"
      }), "\n", createVNode(_components.li, {
        children: "费用按 tokens 计费，注意控制调用频率。"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "总结",
      children: "总结"
    }), "\n", createVNode(_components.p, {
      children: "通过上述配置，即可在 Claude Code 中无缝接入 Kimi K2 大模型，享受高效、低成本的智能编程体验。Kimi K2 在代码生成、上下文处理、工程兼容性等方面均表现优异，是国内开发者的理想选择。"
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

const url = "src/content/posts/2507-claude-code-kimi-k2.mdx";
const file = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2507-claude-code-kimi-k2.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2507-claude-code-kimi-k2.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
