import { v as createVNode, S as Fragment, _ as __astro_tag_component__ } from './astro/server.Dx2-getx.js';

const frontmatter = {
  "title": "SSE Server-Sent Events",
  "date": "2025-04-03T07:35:49.000Z",
  "updatedAt": "2025-12-01T09:28:48.190Z",
  "tags": ["Network"],
  "draft": false,
  "slug": "2504-sse-en",
  "locale": "en",
  "translationKey": "2504-sse",
  "cover": "/post-assets/m911icos-Pasted-image-20250402200626.webp",
  "intro": "A comprehensive guide to Server-Sent Events (SSE) from principles to code, covering communication mechanisms, client APIs, server implementations, and common use cases.",
  "seoImage": "/post-assets/og/2504-sse.png",
  "seoTitle": "Server-Sent Events (SSE) Explained | Principles & Implementation",
  "seoDescription": "A comprehensive guide to Server-Sent Events (SSE) from principles to code, covering communication mechanisms, client APIs, server implementations, and common use cases.",
  "seoKeywords": ["SSE", "Server-Sent Events", "server push", "real-time communication", "EventSource", "network"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "the-essence-of-sse",
    "text": "The Essence of SSE"
  }, {
    "depth": 2,
    "slug": "characteristics-of-sse",
    "text": "Characteristics of SSE"
  }, {
    "depth": 2,
    "slug": "sse-client-api",
    "text": "SSE Client API"
  }, {
    "depth": 2,
    "slug": "sse-server-implementation",
    "text": "SSE Server Implementation"
  }, {
    "depth": 3,
    "slug": "data-format",
    "text": "Data Format"
  }, {
    "depth": 3,
    "slug": "the-data-field",
    "text": "The data Field"
  }, {
    "depth": 3,
    "slug": "the-id-field",
    "text": "The id Field"
  }, {
    "depth": 3,
    "slug": "the-event-field",
    "text": "The event Field"
  }, {
    "depth": 3,
    "slug": "the-retry-field",
    "text": "The retry Field"
  }, {
    "depth": 2,
    "slug": "node-server-example",
    "text": "Node Server Example"
  }, {
    "depth": 2,
    "slug": "notes",
    "text": "Notes"
  }, {
    "depth": 2,
    "slug": "differences-between-sse-and-websocket",
    "text": "Differences Between SSE and WebSocket"
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
    "slug": "conclusion",
    "text": "Conclusion"
  }, {
    "depth": 2,
    "slug": "references",
    "text": "References"
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
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "Server-Sent Events (SSE) is a server push technology that allows servers to push data to clients in real-time. It is particularly useful in the following scenarios:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Real-time data updates (e.g., stock prices, weather information)"
      }), "\n", createVNode(_components.li, {
        children: "Social media feeds"
      }), "\n", createVNode(_components.li, {
        children: "Real-time log display"
      }), "\n", createVNode(_components.li, {
        children: "Progress notifications"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m911icos-Pasted-image-20250402200626.webp",
        alt: "Pasted image 20250402200626.webp"
      })
    }), "\n", createVNode(_components.h2, {
      id: "the-essence-of-sse",
      children: "The Essence of SSE"
    }), "\n", createVNode(_components.p, {
      children: "SSE is essentially a one-way communication mechanism based on the HTTP protocol:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "It uses HTTP long connections to achieve a one-way data flow from the server to the client."
      }), "\n", createVNode(_components.li, {
        children: "The data format is plain text, and the encoding must be UTF-8."
      }), "\n", createVNode(_components.li, {
        children: "It is based on the standard HTTP protocol and does not require special protocol support."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "characteristics-of-sse",
      children: "Characteristics of SSE"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "One-way communication: A one-way data flow from the server to the client."
      }), "\n", createVNode(_components.li, {
        children: "Automatic reconnection: Automatically reconnects by default after a disconnection."
      }), "\n", createVNode(_components.li, {
        children: "Easy to use: Uses standard HTTP, without the complex configuration of WebSockets."
      }), "\n", createVNode(_components.li, {
        children: "Supports custom events."
      }), "\n", createVNode(_components.li, {
        children: "Natively supports Cross-Origin Resource Sharing (CORS)."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "sse-client-api",
      children: "SSE Client API"
    }), "\n", createVNode(_components.p, {
      children: "Basic usage example:"
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
            children: "// Listen for messages"
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
            children: "// Listen for connection open"
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
            children: "'Connection established'"
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
            children: "// Listen for errors"
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
            children: "'Error occurred:'"
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
            children: "// Listen for custom events"
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
            children: "'Custom event:'"
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
            children: "// Close connection"
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
      id: "sse-server-implementation",
      children: "SSE Server Implementation"
    }), "\n", createVNode(_components.h3, {
      id: "data-format",
      children: "Data Format"
    }), "\n", createVNode(_components.p, {
      children: "The data sent by the server must follow a specific format:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Each message starts with ", createVNode(_components.code, {
          children: "data: "
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Each message ends with ", createVNode(_components.code, {
          children: "\\n\\n"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Supports multiple fields: ", createVNode(_components.code, {
          children: "data"
        }), ", ", createVNode(_components.code, {
          children: "event"
        }), ", ", createVNode(_components.code, {
          children: "id"
        }), ", ", createVNode(_components.code, {
          children: "retry"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "the-data-field",
      children: "The data Field"
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
            children: "data: Message content\\n\\n"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Multi-line data:"
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
            children: "data: First line\\n"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "data: Second line\\n\\n"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "the-id-field",
      children: "The id Field"
    }), "\n", createVNode(_components.p, {
      children: ["Used for message identification; the ", createVNode(_components.code, {
        children: "Last-Event-ID"
      }), " header will be sent upon reconnection after a disconnection:"]
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
            children: "data: Message content\\n\\n"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "the-event-field",
      children: "The event Field"
    }), "\n", createVNode(_components.p, {
      children: "Used to specify the event type:"
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
            children: "data: Message content\\n\\n"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "the-retry-field",
      children: "The retry Field"
    }), "\n", createVNode(_components.p, {
      children: "Specifies the reconnection time (in milliseconds):"
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
            children: "data: Message content\\n\\n"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "node-server-example",
      children: "Node Server Example"
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
            children: "    // Set headers required for SSE"
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
            children: "    // Send initial data"
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
            children: "'data: Connection established"
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
            children: "    // Send data periodically"
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
            children: "    // Listen for connection close"
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
            children: "'SSE server running on port 3000'"
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
      id: "notes",
      children: "Notes"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Specific format requirements: Starts with ", createVNode(_components.code, {
          children: "data: "
        }), " and ends with ", createVNode(_components.code, {
          children: "\\n\\n"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "There is a limit to the number of concurrent SSE connections per browser."
      }), "\n", createVNode(_components.li, {
        children: "Some proxy servers may not support long connections."
      }), "\n", createVNode(_components.li, {
        children: "It is recommended to implement an error retry mechanism."
      }), "\n", createVNode(_components.li, {
        children: "Pay attention to server resource management when using it on a large scale."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "differences-between-sse-and-websocket",
      children: "Differences Between SSE and WebSocket"
    }), "\n", createVNode(_components.h3, {
      id: "sse",
      children: createVNode(_components.strong, {
        children: "SSE"
      })
    }), "\n", createVNode(_components.p, {
      children: "SSE is implemented based on the traditional HTTP protocol, using a long-polling mechanism. The client sends an HTTP request to the server, and the server keeps the connection open, periodically sending data to the client."
    }), "\n", createVNode(_components.p, {
      children: ["SSE is implemented through the ", createVNode(_components.code, {
        children: "EventSource"
      }), " object, and the client can receive data sent by the server by listening to the ", createVNode(_components.code, {
        children: "onmessage"
      }), " event."]
    }), "\n", createVNode(_components.h3, {
      id: "websocket",
      children: createVNode(_components.strong, {
        children: "WebSocket"
      })
    }), "\n", createVNode(_components.p, {
      children: "WebSocket is implemented based on an independent TCP connection, using a custom protocol. A persistent, full-duplex communication connection can be established between the client and the server, allowing data to be sent and received in both directions."
    }), "\n", createVNode(_components.p, {
      children: "The WebSocket protocol is frame-based, and communication can be achieved by sending different types of frames."
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "SSE is a simple yet powerful server push solution:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Lighter and simpler to implement than WebSocket."
      }), "\n", createVNode(_components.li, {
        children: "One-way communication satisfies most push scenarios."
      }), "\n", createVNode(_components.li, {
        children: "Based on the HTTP protocol, offering good compatibility."
      }), "\n", createVNode(_components.li, {
        children: "Automatic reconnection mechanism improves reliability."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Applicable scenarios:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Real-time data updates"
      }), "\n", createVNode(_components.li, {
        children: "Message notifications"
      }), "\n", createVNode(_components.li, {
        children: "Log streaming"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.ruanyifeng.com/blog/2017/05/server-sent_events.html",
          children: "Server-Sent Events Tutorial - Ruan Yifeng’s Network Log"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://juejin.cn/post/7487831341591511067",
          children: "Why do major companies choose SSE over WebSocket in high-concurrency scenarios?"
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

const url = "src/content/posts/2504-sse.en.mdx";
const file = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2504-sse.en.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2504-sse.en.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
