import { v as createVNode, S as Fragment, _ as __astro_tag_component__ } from './astro/server.Dx2-getx.js';

const frontmatter = {
  "title": "Integrating Kimi K2 Model into Claude Code",
  "date": "2025-07-17T09:39:21.783Z",
  "updatedAt": "2025-07-17T09:44:32.159Z",
  "tags": ["AI"],
  "draft": false,
  "slug": "2507-claude-code-kimi-k2-en",
  "locale": "en",
  "translationKey": "2507-claude-code-kimi-k2",
  "cover": "/post-assets/md774iew-image-20250717161529431.webp",
  "intro": "A step-by-step guide on how to integrate the Kimi K2 model into Claude Code, including environment setup, API Key configuration, model switching verification, and troubleshooting.",
  "seoImage": "/post-assets/og/2507-claude-code-kimi-k2.png",
  "seoTitle": "Integrating Kimi K2 Model into Claude Code | Step-by-Step Guide",
  "seoDescription": "A complete step-by-step guide on integrating the Kimi K2 model into Claude Code, covering environment preparation, API Key configuration, model switching verification, and common troubleshooting.",
  "seoKeywords": ["Claude Code", "Kimi K2", "Large Language Model Integration", "API Key", "AI Programming", "Moonshot"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "environment-preparation",
    "text": "Environment Preparation"
  }, {
    "depth": 2,
    "slug": "api-key-configuration",
    "text": "API Key Configuration"
  }, {
    "depth": 3,
    "slug": "windows",
    "text": "Windows"
  }, {
    "depth": 3,
    "slug": "macos--linux",
    "text": "macOS / Linux"
  }, {
    "depth": 2,
    "slug": "startup-and-model-switching-verification",
    "text": "Startup and Model Switching Verification"
  }, {
    "depth": 2,
    "slug": "common-issues-and-troubleshooting",
    "text": "Common Issues and Troubleshooting"
  }, {
    "depth": 2,
    "slug": "the-sweet-spot-of-the-kimi-k2-model",
    "text": "The “Sweet Spot” of the Kimi K2 Model"
  }, {
    "depth": 3,
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
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "Claude Code is an AI programming assistant launched by Anthropic, featuring powerful code generation and comprehension capabilities. However, due to network environment limitations in some regions, accessing models like Claude Sonnet 4 and Claude Opus 4 can be challenging. Therefore, this article introduces how to switch Claude Code to use the newly released Kimi K2 large model by Moonshot AI, achieving seamless integration and efficient development."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/md774iew-image-20250717161529431.webp",
        alt: "image-20250717161529431.webp"
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "environment-preparation",
      children: "Environment Preparation"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "Install the latest version of Node.js"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Please visit the ", createVNode(_components.a, {
        href: "https://nodejs.org/",
        children: "Node.js official website"
      }), " to download and install."]
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "Install Claude Code"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Execute in the terminal: ", createVNode(_components.code, {
        children: "npm install -g @anthropic-ai/claude-code"
      })]
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "Register a Kimi API Platform Account and Obtain an API Key"
        })
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Open the ", createVNode(_components.a, {
          href: "https://kimi.moonshot.cn/",
          children: "Kimi API Platform"
        }), " and register an account."]
      }), "\n", createVNode(_components.li, {
        children: "After logging in, create a new API Key."
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
          children: "Recharge and Upgrade Account (Highly Recommended)"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The free tier of the Kimi API has many restrictions. It is recommended to recharge 50 RMB to upgrade to Tier 1, unlocking higher quotas and more stable calling privileges."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/md774iez-image-20250717155753583.webp",
        alt: "image-20250717155753583.webp"
      })
    }), "\n", createVNode(_components.h2, {
      id: "api-key-configuration",
      children: "API Key Configuration"
    }), "\n", createVNode(_components.p, {
      children: "Modify the default configuration of Claude Code to use custom model capabilities."
    }), "\n", createVNode(_components.h3, {
      id: "windows",
      children: "Windows"
    }), "\n", createVNode(_components.p, {
      children: "Execute in the Command Prompt:"
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
            children: " \"Your API Key\""
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
      children: "Depending on your terminal type, edit the corresponding configuration file:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Bash users: ", createVNode(_components.code, {
          children: "~/.bashrc"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Zsh users: ", createVNode(_components.code, {
          children: "~/.zshrc"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Add the following content:"
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
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "\"Your API Key\""
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
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "\"https://api.moonshot.cn/anthropic\""
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["After saving, execute ", createVNode(_components.code, {
        children: "source ~/.zshrc"
      }), " or restart the terminal to apply the configuration."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "startup-and-model-switching-verification",
      children: "Startup and Model Switching Verification"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Enter your project directory and run: ", createVNode(_components.code, {
            children: "claude"
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "After starting, the Overrides section at the bottom of the interface should display the API Key and API Base information."
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
        children: "Type anything (friendly reminder: every input costs money). As long as the tokens are ticking, congratulations, the model is online."
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
          children: ["The interface says “claude”, but behind the scenes, ", createVNode(_components.code, {
            children: "kimi-k2-0711-preview"
          }), " is silently doing the heavy lifting."]
        })
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "common-issues-and-troubleshooting",
      children: "Common Issues and Troubleshooting"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "1. Invalid API Key Configuration"
      }), ":"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Check if the key is correct, or if it has taken effect (restart the terminal/reload the configuration file)."
      }), "\n", createVNode(_components.li, {
        children: "Exhausted free quota or an unrecharged account will also cause call failures."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "2. Unable to Switch Model:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Confirm whether ", createVNode(_components.code, {
          children: "ANTHROPIC_BASE_URL"
        }), " is correctly filled as ", createVNode(_components.code, {
          children: "https://api.moonshot.cn/anthropic"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "3. High Call Costs:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Every input is billed. It is recommended to plan your call frequency reasonably."
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "the-sweet-spot-of-the-kimi-k2-model",
      children: "The “Sweet Spot” of the Kimi K2 Model"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Outstanding Coding Capabilities"
        }), ":"]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "It outperforms GPT-4.1 and DeepSeek-V3 on various leaderboards, handling automation and enterprise development with ease."
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Massive Context, Amazing Memory"
        }), ":"]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "With 128k tokens, you can easily stuff in hundreds of thousands of words. It can handle long documents and legacy projects effortlessly."
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Attractive Pricing, Compliance Peace of Mind"
        }), ":"]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Input costs $1/million tokens, and output costs $3/million tokens. The money saved can buy you a few more cups of coffee."
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "4",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Rich Ecosystem, Friendly Interfaces"
        }), ":"]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Compatible with the Anthropic protocol, meaning CLI, GUI, and VSCode extensions all work seamlessly."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "notes",
      children: "Notes"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "The API Key is sensitive information. Please keep it safe to prevent leakage."
      }), "\n", createVNode(_components.li, {
        children: "Free quota is limited; timely recharging is recommended to ensure stable service."
      }), "\n", createVNode(_components.li, {
        children: ["If you need to switch back to the native Claude model, simply restore the default ", createVNode(_components.code, {
          children: "ANTHROPIC_BASE_URL"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Costs are billed by tokens; pay attention to controlling your call frequency."
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "With the above configuration, you can seamlessly integrate the Kimi K2 large model into Claude Code, enjoying an efficient and low-cost intelligent programming experience. Kimi K2 performs excellently in code generation, context processing, and engineering compatibility, making it an ideal choice for developers."
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

const url = "src/content/posts/2507-claude-code-kimi-k2.en.mdx";
const file = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2507-claude-code-kimi-k2.en.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2507-claude-code-kimi-k2.en.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
