import { v as createVNode, S as Fragment, _ as __astro_tag_component__ } from './astro/server.Dx2-getx.js';

const frontmatter = {
  "title": "The Minimum Delay Mechanism of setTimeout",
  "date": "2025-01-09T07:33:49.472Z",
  "updatedAt": "2025-01-09T08:12:09.482Z",
  "tags": ["JavaScript"],
  "draft": false,
  "slug": "2501-javascript-setTimeout-timeout-en",
  "locale": "en",
  "translationKey": "2501-javascript-setTimeout-timeout",
  "intro": "An in-depth explanation of JavaScript's setTimeout minimum delay mechanism, combining HTML specifications and browser implementations to explain why a 0ms timer is clamped to 4ms.",
  "seoImage": "/post-assets/og/2501-javascript-setTimeout-timeout.png",
  "seoTitle": "The Minimum Delay Mechanism of setTimeout | 4ms Clamp",
  "seoDescription": "An in-depth explanation of JavaScript's setTimeout minimum delay mechanism, combining HTML specifications and browser implementations to explain why a 0ms timer is clamped to 4ms.",
  "seoKeywords": ["JavaScript", "setTimeout", "minimum delay", "event loop", "HTML specification", "browser mechanism"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "the-evolution-of-the-minimum-delay-value",
    "text": "The Evolution of the Minimum Delay Value"
  }, {
    "depth": 3,
    "slug": "historical-changes",
    "text": "Historical Changes"
  }, {
    "depth": 2,
    "slug": "specification-basis",
    "text": "Specification Basis"
  }, {
    "depth": 3,
    "slug": "html-specification",
    "text": "HTML Specification"
  }, {
    "depth": 3,
    "slug": "chrome-source-code-analysis",
    "text": "Chrome Source Code Analysis"
  }, {
    "depth": 2,
    "slug": "technical-principle-analysis",
    "text": "Technical Principle Analysis"
  }, {
    "depth": 3,
    "slug": "1-event-loop-and-timers",
    "text": "1. Event Loop and Timers"
  }, {
    "depth": 3,
    "slug": "2-measuring-the-minimum-delay",
    "text": "2. Measuring the Minimum Delay"
  }, {
    "depth": 2,
    "slug": "performance-impact-and-optimization",
    "text": "Performance Impact and Optimization"
  }, {
    "depth": 3,
    "slug": "1-cpu-and-battery-impact",
    "text": "1. CPU and Battery Impact"
  }, {
    "depth": 3,
    "slug": "2-alternatives",
    "text": "2. Alternatives"
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
      children: ["In JavaScript, ", createVNode(_components.code, {
        children: "setTimeout"
      }), " is one of the most commonly used timer APIs. However, many developers may not know that when we set a theoretical “0 millisecond” delay, it is not actually 0ms. In some scenarios, the actual execution time will never be less than 4ms. Behind this seemingly strange limitation lie deep technical reasons and historical origins."]
    }), "\n", createVNode(_components.h2, {
      id: "the-evolution-of-the-minimum-delay-value",
      children: "The Evolution of the Minimum Delay Value"
    }), "\n", createVNode(_components.h3, {
      id: "historical-changes",
      children: "Historical Changes"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "1995: JavaScript was first introduced in Netscape Navigator."
      }), "\n", createVNode(_components.li, {
        children: "2003: IE implemented a minimum delay of 15.625ms."
      }), "\n", createVNode(_components.li, {
        children: "2009: Firefox adopted a 10ms limit."
      }), "\n", createVNode(_components.li, {
        children: "2010: The HTML5 specification standardized the minimum delay to 4ms for scenarios where the nesting level is greater than or equal to 5, and 0ms for levels less than 5."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "specification-basis",
      children: "Specification Basis"
    }), "\n", createVNode(_components.h3, {
      id: "html-specification",
      children: "HTML Specification"
    }), "\n", createVNode(_components.p, {
      children: "According to the HTML Living Standard:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["If the set ", createVNode(_components.code, {
          children: "timeout"
        }), " is less than 0, it is set to 0."]
      }), "\n", createVNode(_components.li, {
        children: ["If the nesting level exceeds 5, and the ", createVNode(_components.code, {
          children: "timeout"
        }), " is less than 4ms, the ", createVNode(_components.code, {
          children: "timeout"
        }), " is set to 4ms."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m5p0iae8-image.webp",
        alt: "image.webp"
      })
    }), "\n", createVNode(_components.h3, {
      id: "chrome-source-code-analysis",
      children: "Chrome Source Code Analysis"
    }), "\n", createVNode(_components.p, {
      children: "In the Chromium source code, we can see the relevant implementation:"
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
      "data-language": "cpp",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "static"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: " int"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: " kMaxTimerNestingLevel "
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#D19A66"
            },
            children: " 5"
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
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "static"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: " double"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: " kMinimumInterval "
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#D19A66"
            },
            children: " 0.004"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ";"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#7F848E",
              "--shiki-dark-font-style": "italic"
            },
            children: " // 4ms"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "technical-principle-analysis",
      children: "Technical Principle Analysis"
    }), "\n", createVNode(_components.h3, {
      id: "1-event-loop-and-timers",
      children: "1. Event Loop and Timers"
    }), "\n", createVNode(_components.p, {
      children: ["JavaScript’s event loop mechanism is key to understanding the behavior of ", createVNode(_components.code, {
        children: "setTimeout"
      }), ". A timer is not a true “sleep,” but rather places a callback function into a queue awaiting execution. The callback function is executed only after the timing conditions are met."]
    }), "\n", createVNode(_components.h3, {
      id: "2-measuring-the-minimum-delay",
      children: "2. Measuring the Minimum Delay"
    }), "\n", createVNode(_components.p, {
      children: ["Below is an example of measuring the actual delay time of ", createVNode(_components.code, {
        children: "setTimeout"
      }), ":"]
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
            children: "// Example: Behavior of nested timers"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: " nestedTimer"
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
            children: "depth"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#D19A66"
            },
            children: " 0"
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
            children: " start"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: " performance"
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
            children: "now"
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
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "    setTimeout"
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
            children: " delay"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: " performance"
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
            children: "now"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: " start"
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
              "--shiki-dark": "#E5C07B"
            },
            children: "        console"
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
            children: "`Depth "
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
            children: "depth"
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
            children: ", Actual delay: "
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
            children: "delay"
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
            children: "ms`"
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
            children: "        if"
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
            children: "depth"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#D19A66"
            },
            children: " 10"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "nestedTimer"
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
            children: "depth"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#D19A66"
            },
            children: " 1"
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
            children: "0"
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
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m5p0iae7-image.webp",
        alt: "image.webp"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Result Analysis"
      })
    }), "\n", createVNode(_components.p, {
      children: ["When the nesting level is less than 5, the theoretical delay time is 0ms; when the nesting level is greater than or equal to 5, the theoretical delay time is 4ms (this differs slightly from the HTML specification). However, the actual execution delay is subject to the event loop mechanism. The ", createVNode(_components.code, {
        children: "setTimeout"
      }), " callback needs to wait for:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "The current synchronous code to finish executing."
      }), "\n", createVNode(_components.li, {
        children: "The state of the microtask queue."
      }), "\n", createVNode(_components.li, {
        children: "The timer to expire."
      }), "\n", createVNode(_components.li, {
        children: "Waiting for the next macrotask execution opportunity."
      }), "\n", createVNode(_components.li, {
        children: "Code execution overhead."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Therefore, the actual delay will float upwards from the set value. But the lower bound of the ", createVNode(_components.code, {
        children: "timeout"
      }), " value is constrained by the nesting level."]
    }), "\n", createVNode(_components.h2, {
      id: "performance-impact-and-optimization",
      children: "Performance Impact and Optimization"
    }), "\n", createVNode(_components.h3, {
      id: "1-cpu-and-battery-impact",
      children: "1. CPU and Battery Impact"
    }), "\n", createVNode(_components.p, {
      children: "Overly frequent timer calls can lead to:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Increased CPU usage"
      }), "\n", createVNode(_components.li, {
        children: "Increased device heat"
      }), "\n", createVNode(_components.li, {
        children: "Reduced battery life"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2-alternatives",
      children: "2. Alternatives"
    }), "\n", createVNode(_components.p, {
      children: "For scenarios requiring high-precision timing, it is recommended to use:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "requestAnimationFrame"
        })
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
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "requestAnimationFrame"
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
            children: " { "
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
            children: "\t// Used for precise control of animations"
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
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: "Web Workers"
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
            children: "// worker.js "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "setInterval"
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
            children: " { "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "\tpostMessage"
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
            children: "'tick'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "); "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "}, "
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#D19A66"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "performance.now()"
        })
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
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
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
            children: " start"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: " performance"
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
            children: "now"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "(); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#7F848E",
              "--shiki-dark-font-style": "italic"
            },
            children: "// Used for precise timing"
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: ["The 4ms minimum delay of ", createVNode(_components.code, {
        children: "setTimeout"
      }), " is a well-thought-out design decision that balances development convenience, performance overhead, and browser compatibility. Understanding this mechanism helps us write better asynchronous code."]
    }), "\n", createVNode(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout",
          children: "HTML Standard"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://mp.weixin.qq.com/s/4P7ohpRmBChXQpLC-MHgHQ",
          children: "Why does setTimeout have a minimum delay of 4ms?"
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

const url = "src/content/posts/2501-javascript-setTimeout-timeout.en.mdx";
const file = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2501-javascript-setTimeout-timeout.en.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2501-javascript-setTimeout-timeout.en.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
