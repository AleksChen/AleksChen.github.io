import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server.C36FTnHO.js';
import 'clsx';

const frontmatter = {
  "title": "Cursor 接入 Figma MCP",
  "date": "2025-04-01T07:33:49.472Z",
  "updatedAt": "2025-04-03T07:32:36.809Z",
  "tags": ["Figma", "AI"],
  "draft": false,
  "slug": "2504-cursor-figma-mcp"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "mcp",
    "text": "MCP"
  }, {
    "depth": 2,
    "slug": "环境配置",
    "text": "环境配置"
  }, {
    "depth": 3,
    "slug": "启动-figma-mcp-服务器",
    "text": "启动 Figma MCP 服务器"
  }, {
    "depth": 3,
    "slug": "cursor-mcp-配置",
    "text": "Cursor MCP 配置"
  }, {
    "depth": 2,
    "slug": "figma-mcp-使用",
    "text": "Figma MCP 使用"
  }, {
    "depth": 3,
    "slug": "还原效果",
    "text": "还原效果"
  }, {
    "depth": 2,
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
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "mcp",
      children: "MCP"
    }), "\n", createVNode(_components.p, {
      children: "MCP (Model Control Protocol) 是 Cursor 提供的一个协议，允许外部服务为 Cursor AI 提供额外的上下文信息。通过 Figma MCP，我们可以让 Cursor 直接读取 Figma 设计稿的信息，从而实现更精准的代码还原。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m8yazve0-1.webp",
        alt: "1.webp"
      })
    }), "\n", createVNode(_components.h2, {
      id: "环境配置",
      children: "环境配置"
    }), "\n", createVNode(_components.h3, {
      id: "启动-figma-mcp-服务器",
      children: "启动 Figma MCP 服务器"
    }), "\n", createVNode(_components.p, {
      children: ["在 Figma 控制台获取到 figma-api-key（至少需要可读权限）。复制下来生成的 ", createVNode(_components.code, {
        children: "api-key"
      }), " 然后在终端执行命令。"]
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
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "pnpx"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: " figma-developer-mcp"
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#D19A66"
            },
            children: " --figma-api-key="
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#D19A66"
            },
            children: "your-figma-api-key"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#ABB2BF"
            },
            children: ">"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "运行后，显示在本地 3333 端口启动 Figma MCP Server"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m8yazve7-2.webp",
        alt: "2.webp"
      })
    }), "\n", createVNode(_components.h3, {
      id: "cursor-mcp-配置",
      children: "Cursor MCP 配置"
    }), "\n", createVNode(_components.p, {
      children: "在 Cursor 设置中添加 MCP 配置（Cursor Version: 0.47.8）"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m8yazve4-3.webp",
        alt: "3.webp"
      })
    }), "\n", createVNode(_components.p, {
      children: ["在 ", createVNode(_components.code, {
        children: "mcp.json"
      }), " 中设置 Figma MCP Server 地址"]
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
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#E06C75"
            },
            children: "  \"mcpServers\""
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#E06C75"
            },
            children: "    \"Figma\""
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#E06C75"
            },
            children: "      \"url\""
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
            children: "\"http://localhost:3333/sse\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "    }"
          })
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
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "看到绿灯亮起就是说明配置成功"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m8yazve6-4.webp",
        alt: "4.webp"
      })
    }), "\n", createVNode(_components.h2, {
      id: "figma-mcp-使用",
      children: "Figma MCP 使用"
    }), "\n", createVNode(_components.p, {
      children: "Figma MCP 只是增强了 Cursor 的能力，使其具备了和 Figma 设计稿交互的能力。我们只需要在使用 Cursor 的过程中，将设计稿的信息附上。Cursor 就能够自动去获取目标元素的设计信息，更好地还原。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m8yazve6-5.webp",
        alt: "5.webp"
      })
    }), "\n", createVNode(_components.p, {
      children: "在 Prompt 中附上 Figma Section URL 并指定需要写入的文件（开启 Agent 模式）"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m8yazve6-6.webp",
        alt: "6.webp"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m8yazve7-7.webp",
        alt: "7.webp"
      })
    }), "\n", createVNode(_components.h3, {
      id: "还原效果",
      children: "还原效果"
    }), "\n", createVNode(_components.p, {
      children: "从结果来看，还原效果比截图上传要好。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m8yazve7-8.webp",
        alt: "8.webp"
      })
    }), "\n", createVNode(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Figma 文件需要具有适当的访问权限"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "MCP 服务器需要保持运行状态，否则 Cursor 将无法获取设计信息"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "复制的 Figma Section URL 必须是具体元素的链接，而不是整个页面的链接"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "目前 MCP 主要支持基础的样式信息，复杂的交互效果可能需要手动调整"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "总结",
      children: "总结"
    }), "\n", createVNode(_components.p, {
      children: "Figma MCP 为 Cursor AI 提供了直接获取设计稿信息的能力，相比传统的截图上传方式，它能够："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "更准确地获取颜色、尺寸、字体等样式信息"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "减少手动测量和调整的工作量"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "提高代码还原的效率和准确度"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "这种工作流程特别适合前端开发团队，能够显著提升设计稿还原的效率。不过在使用过程中需要注意配置正确的权限和保持 MCP 服务器的稳定运行。"
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

const url = "src/content/posts/2504-cursor-figma-mcp.mdx";
const file = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2504-cursor-figma-mcp.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2504-cursor-figma-mcp.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
