import { v as createVNode, S as Fragment, _ as __astro_tag_component__ } from './astro/server.Dx2-getx.js';

const frontmatter = {
  "title": "Integrating Figma MCP with Cursor",
  "date": "2025-04-01T07:33:49.472Z",
  "updatedAt": "2025-04-03T07:32:36.809Z",
  "tags": ["Figma", "AI"],
  "draft": false,
  "slug": "2504-cursor-figma-mcp-en",
  "locale": "en",
  "translationKey": "2504-cursor-figma-mcp",
  "intro": "A complete guide on integrating Figma MCP with Cursor, including environment setup, starting the MCP service, configuring mcp.json, and efficiently converting designs to code.",
  "seoImage": "/post-assets/og/2504-cursor-figma-mcp.png",
  "seoTitle": "Integrating Figma MCP with Cursor | Converting Designs to Code",
  "seoDescription": "A complete guide on integrating Figma MCP with Cursor, including environment setup, starting the MCP service, configuring mcp.json, and efficiently converting designs to code.",
  "seoKeywords": ["Cursor", "Figma MCP", "MCP", "AI programming", "design to code", "mcp.json"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "mcp",
    "text": "MCP"
  }, {
    "depth": 2,
    "slug": "environment-configuration",
    "text": "Environment Configuration"
  }, {
    "depth": 3,
    "slug": "starting-the-figma-mcp-server",
    "text": "Starting the Figma MCP Server"
  }, {
    "depth": 3,
    "slug": "cursor-mcp-configuration",
    "text": "Cursor MCP Configuration"
  }, {
    "depth": 2,
    "slug": "using-figma-mcp",
    "text": "Using Figma MCP"
  }, {
    "depth": 3,
    "slug": "conversion-result",
    "text": "Conversion Result"
  }, {
    "depth": 2,
    "slug": "notes",
    "text": "Notes"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
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
      children: "MCP (Model Context Protocol) is a protocol provided by Cursor that allows external services to provide additional context information to Cursor AI. Through Figma MCP, we can enable Cursor to directly read information from Figma design drafts, thereby achieving more accurate code conversion."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m8yazve0-1.webp",
        alt: "1.webp"
      })
    }), "\n", createVNode(_components.h2, {
      id: "environment-configuration",
      children: "Environment Configuration"
    }), "\n", createVNode(_components.h3, {
      id: "starting-the-figma-mcp-server",
      children: "Starting the Figma MCP Server"
    }), "\n", createVNode(_components.p, {
      children: ["Obtain a ", createVNode(_components.code, {
        children: "figma-api-key"
      }), " in the Figma console (at least read-only permission is required). Copy the generated ", createVNode(_components.code, {
        children: "api-key"
      }), " and then execute the command in the terminal."]
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
      children: "After running, it will show that the Figma MCP Server has started on local port 3333."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m8yazve7-2.webp",
        alt: "2.webp"
      })
    }), "\n", createVNode(_components.h3, {
      id: "cursor-mcp-configuration",
      children: "Cursor MCP Configuration"
    }), "\n", createVNode(_components.p, {
      children: "Add the MCP configuration in Cursor settings (Cursor Version: 0.47.8)."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m8yazve4-3.webp",
        alt: "3.webp"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Set the Figma MCP Server address in ", createVNode(_components.code, {
        children: "mcp.json"
      }), "."]
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
      children: "Seeing the green light indicates that the configuration is successful."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m8yazve6-4.webp",
        alt: "4.webp"
      })
    }), "\n", createVNode(_components.h2, {
      id: "using-figma-mcp",
      children: "Using Figma MCP"
    }), "\n", createVNode(_components.p, {
      children: "Figma MCP simply enhances Cursor’s capabilities, giving it the ability to interact with Figma design drafts. We just need to attach the design draft information when using Cursor. Cursor will automatically fetch the design information of the target element for better conversion."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m8yazve6-5.webp",
        alt: "5.webp"
      })
    }), "\n", createVNode(_components.p, {
      children: "Attach the Figma Section URL in the Prompt and specify the file to write to (enable Agent mode)."
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
      id: "conversion-result",
      children: "Conversion Result"
    }), "\n", createVNode(_components.p, {
      children: "Judging from the results, the conversion is better than uploading screenshots."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m8yazve7-8.webp",
        alt: "8.webp"
      })
    }), "\n", createVNode(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "The Figma file needs to have appropriate access permissions."
      }), "\n", createVNode(_components.li, {
        children: "The MCP server needs to remain running; otherwise, Cursor will not be able to fetch design information."
      }), "\n", createVNode(_components.li, {
        children: "The copied Figma Section URL must be a link to a specific element, not a link to the entire page."
      }), "\n", createVNode(_components.li, {
        children: "Currently, MCP mainly supports basic style information; complex interactive effects may require manual adjustment."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "Figma MCP provides Cursor AI with the ability to directly obtain design draft information. Compared to the traditional method of uploading screenshots, it can:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "More accurately obtain style information such as colors, dimensions, and fonts."
      }), "\n", createVNode(_components.li, {
        children: "Reduce the workload of manual measurement and adjustment."
      }), "\n", createVNode(_components.li, {
        children: "Improve the efficiency and accuracy of code conversion."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This workflow is particularly suitable for frontend development teams and can significantly improve the efficiency of converting design drafts to code. However, when using it, pay attention to configuring the correct permissions and keeping the MCP server running stably."
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

const url = "src/content/posts/2504-cursor-figma-mcp.en.mdx";
const file = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2504-cursor-figma-mcp.en.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2504-cursor-figma-mcp.en.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
