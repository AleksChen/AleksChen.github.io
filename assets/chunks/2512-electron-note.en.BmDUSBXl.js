import { v as createVNode, S as Fragment, _ as __astro_tag_component__ } from './astro/server.Dx2-getx.js';

const frontmatter = {
  "title": "Electron Notes",
  "date": "2025-12-23T19:54:00.000Z",
  "updatedAt": "2025-12-23T19:54:00.000Z",
  "tags": ["Electron", "Native"],
  "draft": false,
  "slug": "2512-electron-note-en",
  "locale": "en",
  "translationKey": "2512-electron-note",
  "cover": "/post-assets/2512-electron-note/IPC 通信.webp",
  "intro": "A comprehensive guide to mastering the core of Electron desktop development: Main and Renderer processes, IPC communication, ContextBridge security practices, engineering workflows, and performance optimization strategies.",
  "seoImage": "/post-assets/og/2512-electron-note.png",
  "seoTitle": "Electron Notes: Core Architecture, IPC & Performance Optimization",
  "seoDescription": "A comprehensive guide to mastering the core of Electron desktop development: Main and Renderer processes, IPC communication, ContextBridge security practices, engineering workflows, and performance optimization strategies.",
  "seoKeywords": ["Electron", "desktop development", "Main Process", "Renderer Process", "IPC", "ContextBridge", "cross-platform"]
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "the-paradigm-of-desktop-development-electron-notes",
    "text": "The Paradigm of Desktop Development: Electron Notes"
  }, {
    "depth": 2,
    "slug": "1-prologue-why-do-we-need-electron",
    "text": "1. Prologue: Why Do We Need Electron?"
  }, {
    "depth": 3,
    "slug": "11-the-pain-points-of-cross-platform-development",
    "text": "1.1 The Pain Points of Cross-Platform Development"
  }, {
    "depth": 3,
    "slug": "12-the-birth-and-core-value-of-electron",
    "text": "1.2 The Birth and Core Value of Electron"
  }, {
    "depth": 2,
    "slug": "2-core-architecture-unveiling-electrons-operating-mechanism",
    "text": "2. Core Architecture: Unveiling Electron’s Operating Mechanism"
  }, {
    "depth": 3,
    "slug": "21-how-do-they-communicate-ipc-mechanism",
    "text": "2.1 How Do They Communicate? (IPC Mechanism)"
  }, {
    "depth": 3,
    "slug": "22-example-code",
    "text": "2.2 Example Code"
  }, {
    "depth": 2,
    "slug": "3-design-considerations",
    "text": "3. Design Considerations"
  }, {
    "depth": 3,
    "slug": "31-security-and-performance-isolation",
    "text": "3.1 Security and Performance Isolation"
  }, {
    "depth": 3,
    "slug": "32-giving-web-native-superpowers",
    "text": "3.2 Giving Web Native Superpowers"
  }, {
    "depth": 3,
    "slug": "33-integration-of-event-loops",
    "text": "3.3 Integration of Event Loops"
  }, {
    "depth": 2,
    "slug": "4-limitations-of-electron",
    "text": "4. Limitations of Electron"
  }, {
    "depth": 3,
    "slug": "41-memory-killer",
    "text": "4.1 “Memory Killer”"
  }, {
    "depth": 3,
    "slug": "42-security-risks",
    "text": "4.2 Security Risks"
  }, {
    "depth": 3,
    "slug": "43-experience-comparison-table",
    "text": "4.3 Experience Comparison Table"
  }, {
    "depth": 2,
    "slug": "5-the-evolutionary-direction-of-electron",
    "text": "5. The Evolutionary Direction of Electron"
  }, {
    "depth": 3,
    "slug": "51-asar-a-special-archive-format",
    "text": "5.1 ASAR: A Special Archive Format"
  }, {
    "depth": 3,
    "slug": "52-the-deep-waters-of-performance-optimization",
    "text": "5.2 The Deep Waters of Performance Optimization"
  }, {
    "depth": 3,
    "slug": "53-strong-challengers-tauri-and-flutter",
    "text": "5.3 Strong Challengers: Tauri and Flutter"
  }, {
    "depth": 2,
    "slug": "6-conclusion-should-we-still-learn-electron-in-2026",
    "text": "6. Conclusion: Should We Still Learn Electron in 2026?"
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
      id: "the-paradigm-of-desktop-development-electron-notes",
      children: "The Paradigm of Desktop Development: Electron Notes"
    }), "\n", createVNode(_components.h2, {
      id: "1-prologue-why-do-we-need-electron",
      children: "1. Prologue: Why Do We Need Electron?"
    }), "\n", createVNode(_components.p, {
      children: "If you are a frontend developer or a beginner just getting into programming, you probably use VS Code to write code, Discord or Slack to communicate, and Notion to take notes every day. Have you ever wondered why these desktop applications, which offer excellent user experiences, look so much like web pages?"
    }), "\n", createVNode(_components.p, {
      children: ["The answer is: ", createVNode(_components.strong, {
        children: "They are essentially web pages."
      })]
    }), "\n", createVNode(_components.p, {
      children: ["This is the magic of ", createVNode(_components.strong, {
        children: "Electron"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "11-the-pain-points-of-cross-platform-development",
      children: "1.1 The Pain Points of Cross-Platform Development"
    }), "\n", createVNode(_components.p, {
      children: "Before Electron came along, developing desktop software that could run simultaneously on Windows, macOS, and Linux was a nightmare:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Windows"
        }), ": You needed to learn C# (.NET) or C++."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "macOS"
        }), ": You needed to learn Objective-C or Swift."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Linux"
        }), ": You needed to learn C++ (Qt/GTK)."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This meant development costs were multiplied by three. Meanwhile, web technologies (HTML/CSS/JS) have the largest developer community globally, and interface iteration is extremely fast."
    }), "\n", createVNode(_components.h3, {
      id: "12-the-birth-and-core-value-of-electron",
      children: "1.2 The Birth and Core Value of Electron"
    }), "\n", createVNode(_components.p, {
      children: "GitHub created Electron to build the Atom editor (the predecessor to VS Code). Its core philosophy is very straightforward:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "Package the Chrome browser and Node.js together into one box."
        })
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Chromium"
        }), ": Responsible for displaying beautiful interfaces (UI)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Node.js"
        }), ": Responsible for interacting with the underlying system (reading/writing files, network communication)."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Thus, web developers can directly use their familiar JavaScript to draw native-level desktop applications."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "2-core-architecture-unveiling-electrons-operating-mechanism",
      children: "2. Core Architecture: Unveiling Electron’s Operating Mechanism"
    }), "\n", createVNode(_components.p, {
      children: ["Electron isn’t just a simple “wrapper” around web pages. It has designed a unique ", createVNode(_components.strong, {
        children: "multi-process architecture"
      }), ", which is slightly complex, but we can use a metaphor to understand it."]
    }), "\n", createVNode(_components.p, {
      children: ["Imagine Electron is a ", createVNode(_components.strong, {
        children: "company"
      }), ":"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Main Process — The Company CEO"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Quantity"
            }), ": Only one."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Responsibilities"
            }), ": Holds the highest authority. It is responsible for hiring employees (creating windows), managing company resources (file system, menu bar, system tray), and handling emergencies (lifecycle management)."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Capabilities"
            }), ": Based on Node.js, it can freely manipulate the underlying computer system."]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Renderer Process — Department Employees"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Quantity"
            }), ": Each window (web page) is an employee, and there can be multiple."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Responsibilities"
            }), ": Only responsible for making the interface look good (HTML/CSS/JS rendering)."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Capabilities"
            }), ": Based on Chromium, for security reasons, it is usually restricted to a “sandbox” and cannot freely read or write computer files."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "21-how-do-they-communicate-ipc-mechanism",
      children: "2.1 How Do They Communicate? (IPC Mechanism)"
    }), "\n", createVNode(_components.p, {
      children: ["The CEO and employees are not in the same room (process isolation) and cannot speak directly. They must communicate through a special ", createVNode(_components.strong, {
        children: "internal telephone line"
      }), ", which is ", createVNode(_components.strong, {
        children: "IPC (Inter-Process Communication)"
      }), "."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "IPC Main"
        }), ": The telephone on the Main Process side."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "IPC Renderer"
        }), ": The telephone on the Renderer Process side.\n![](/post-assets/2512-electron-note/IPC 通信.webp)"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "22-example-code",
      children: "2.2 Example Code"
    }), "\n", createVNode(_components.p, {
      children: ["For security, the official recommendation now is to use ", createVNode(_components.code, {
        children: "ContextBridge"
      }), ". This is like setting up a “reception room” between the employees and the CEO to prevent external hackers from directly controlling the CEO through web pages."]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Main Process (CEO)"
          }), ": Listens for requests."]
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
                children: "// Listen for the 'get-system-info' request"
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
            children: "Preload Script (Reception Room)"
          }), ": Exposes secure methods."]
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
                children: "// Expose an object named electronAPI to the web page"
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
            children: "Renderer Process (Employee)"
          }), ": Calls the method."]
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
        src: "/post-assets/2512-electron-note/contentBridge.webp",
        alt: ""
      })
    }), "\n", createVNode(_components.div, {
      class: "mermaid",
      children: ["graph TD\n    subgraph MainProcess [\"Main Process (Node.js)\"]\n        MainScript[\"Main Script", createVNode(_components.br, {}), "«Core Control»\"]\n        NativeAPI[\"Native API", createVNode(_components.br, {}), "«System Capabilities»\"]\n        WindowManager[\"Window Manager", createVNode(_components.br, {}), "«Business Logic»\"]\n    end\n\n    IPC((\"IPC Communication Channel\"))\n\n    subgraph RendererA [\"Renderer Process A (Chromium)\"]\n        PageA[\"Web Page A", createVNode(_components.br, {}), "«User Interface»\"]\n        PreloadA[\"Preload Script A", createVNode(_components.br, {}), "«Bridge Layer»\"]\n    end\n\n    subgraph RendererB [\"Renderer Process B (Chromium)\"]\n        PageB[\"Web Page B", createVNode(_components.br, {}), "«User Interface»\"]\n        PreloadB[\"Preload Script B", createVNode(_components.br, {}), "«Bridge Layer»\"]\n    end\n\n    subgraph OS [\"Operating System (OS)\"]\n        FileSystem[(\"File System\")]\n        Network[(\"Network\")]\n        NativeGUI[(\"Native GUI\")]\n    end\n\n    %% Relationships\n    MainScript <--> IPC\n    IPC <--> PreloadA\n    IPC <--> PreloadB\n\n    MainScript --> NativeAPI\n    NativeAPI --- OS\n    PageA -. \"Context Bridge\" .-> PreloadA\n    PageB -. \"Context Bridge\" .-> PreloadB"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "3-design-considerations",
      children: "3. Design Considerations"
    }), "\n", createVNode(_components.h3, {
      id: "31-security-and-performance-isolation",
      children: "3.1 Security and Performance Isolation"
    }), "\n", createVNode(_components.p, {
      children: "If Chrome were also a single-process application, it would mean that if one web page you opened crashed, the entire browser would crash. The same applies to Electron:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Renderer Process Crash"
        }), ": Only the current window goes white; the main program is still running, and you can try refreshing to recover."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Main Process Crash"
        }), ": That’s truly “game over,” and the entire application exits."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "32-giving-web-native-superpowers",
      children: "3.2 Giving Web Native Superpowers"
    }), "\n", createVNode(_components.p, {
      children: ["Ordinary browser web pages cannot read ", createVNode(_components.code, {
        children: "C:\\Users\\Documents"
      }), " on your computer. But Electron breaks this limitation through Node.js."]
    }), "\n", createVNode(_components.p, {
      children: "The following flowchart shows how a web page step-by-step obtains files from the operating system:"
    }), "\n", createVNode(_components.div, {
      class: "mermaid",
      children: "sequenceDiagram\n    autonumber\n    title Electron Native Capability Logic Flow\n\n    participant UI as Rendering Layer (JS/HTML)\n    participant Preload as Preload Script\n    participant IPCR as IPC (Renderer Side)\n    participant IPCM as IPC (Main Side)\n    participant Main as Main Process (Node.js)\n    participant OS as System API / Native Library\n\n    UI->>Preload: Call exposed method (e.g., selectFile())\n    Preload->>IPCR: ipcRenderer.invoke('select-file')\n    IPCR->>IPCM: Send asynchronous message (Mojo/Pipe)\n    IPCM->>Main: Trigger ipcMain.handle listener\n    Main->>OS: Call Node.js fs module or Electron dialog API\n    OS-->>Main: Return execution result (file path/data)\n    Main-->>IPCM: Return Promise result\n    IPCM-->>IPCR: Cross-process return data\n    IPCR-->>Preload: Get result\n    Preload-->>UI: Callback to update UI"
    }), "\n", createVNode(_components.h3, {
      id: "33-integration-of-event-loops",
      children: "3.3 Integration of Event Loops"
    }), "\n", createVNode(_components.p, {
      children: "One of the most impressive technical challenges of Electron is integrating Node.js’s event loop (Libuv) with Chromium’s event loop (MessageLoop). If they weren’t integrated, Node.js would freeze during UI rendering, and vice versa."
    }), "\n", createVNode(_components.div, {
      class: "mermaid",
      children: "sequenceDiagram\n    title Node.js and Chromium Event Loop Integration\n\n    box \"Electron Runtime Environment\" #e6f3ff\n        participant CML as Chromium Message Loop\n        participant Bridge as Electron Bridge Layer\n        participant UV as Node.js Libuv Loop\n    end\n\n    participant OS as System Events (I/O, Timers, UI)\n\n    OS->>CML: Capture system events (mouse clicks/drawing)\n    CML->>CML: Process Web rendering logic\n\n    loop Polling Integration\n        CML->>Bridge: Check Node.js task status\n        Bridge->>UV: Ask: \"Any pending async tasks?\"\n        UV->>UV: Process file I/O, network requests, timers\n        UV-->>Bridge: Return results/callbacks\n        Bridge->>CML: Inject Node callbacks into message queue\n    end\n\n    CML->>OS: Update UI / Execute system response"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "4-limitations-of-electron",
      children: "4. Limitations of Electron"
    }), "\n", createVNode(_components.p, {
      children: "Although developing with Electron is enjoyable, it is not perfect."
    }), "\n", createVNode(_components.h3, {
      id: "41-memory-killer",
      children: "4.1 “Memory Killer”"
    }), "\n", createVNode(_components.p, {
      children: "Every Electron application essentially comes with a mini version of the Chrome browser."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Large Size"
        }), ": Even a simple Hello World application will be 100MB+ when packaged."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Memory Hungry"
        }), ": Open a few Electron applications (VS Code + Slack + Notion), and your RAM will start screaming."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "42-security-risks",
      children: "4.2 Security Risks"
    }), "\n", createVNode(_components.p, {
      children: ["Early developers, for convenience, liked to enable ", createVNode(_components.code, {
        children: "nodeIntegration: true"
      }), ". This is equivalent to hanging your house keys directly on the door handle. If your application loads a malicious web page, hackers can delete your entire hard drive with a single line of JS code.\n", createVNode(_components.strong, {
        children: "The current best practice is: Default to disabling Node integration and use Context Isolation."
      })]
    }), "\n", createVNode(_components.h3, {
      id: "43-experience-comparison-table",
      children: "4.3 Experience Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Metric"
          }), createVNode(_components.th, {
            children: "Electron"
          }), createVNode(_components.th, {
            children: "Tauri"
          }), createVNode(_components.th, {
            children: "Native Development"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Package Size"
            })
          }), createVNode(_components.td, {
            children: "~150MB+ (Fat)"
          }), createVNode(_components.td, {
            children: "~10MB (Thin)"
          }), createVNode(_components.td, {
            children: "< 5MB (Lean)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Memory Usage"
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
              children: "UI Rendering"
            })
          }), createVNode(_components.td, {
            children: "Chromium Engine"
          }), createVNode(_components.td, {
            children: "System WebView"
          }), createVNode(_components.td, {
            children: "OS Native Engine"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Language"
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
          children: "So, when should you NOT use Electron?"
        })
      }), "\n", createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Lightweight Tools"
          }), ": If you just want to build a simple calculator or sticky note app, stuffing 150MB for such functionality is overkill."]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Extremely Performance-Sensitive"
          }), ": For things like high-frequency trading software or large 3D games, native development is still king."]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Old Hardware"
          }), ": If your target users are still using computers with 4GB of RAM, Electron applications will make them suffer."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "5-the-evolutionary-direction-of-electron",
      children: "5. The Evolutionary Direction of Electron"
    }), "\n", createVNode(_components.h3, {
      id: "51-asar-a-special-archive-format",
      children: "5.1 ASAR: A Special Archive Format"
    }), "\n", createVNode(_components.p, {
      children: ["Electron applications usually consist of thousands of small JavaScript, CSS, and HTML files. When distributing the application, Electron defaults to using the ", createVNode(_components.strong, {
        children: "ASAR (Atom Shell Archive)"
      }), " format to package these source files into a single file."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Solving Windows I/O Bottlenecks"
        }), ": On the Windows file system (NTFS), the overhead of reading thousands of small files is very high, and it easily triggers the real-time scanning hooks of antivirus software, leading to slow application startup. ASAR merges them into a large file, significantly improving read efficiency."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Read-Only and Random Access"
        }), ": ASAR is similar to a tarball; it ", createVNode(_components.strong, {
          children: "does not compress"
        }), " and supports random access. This means Electron can directly read specific bytes of a file from the ASAR without unpacking the entire archive."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Source Code Protection (Limited)"
        }), ": Although it slightly hides the source code, preventing users from directly modifying files in the file explorer, it is not an encryption technology. Simple CLI tools can unpack it."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "52-the-deep-waters-of-performance-optimization",
      children: "5.2 The Deep Waters of Performance Optimization"
    }), "\n", createVNode(_components.p, {
      children: "Besides the native JS performance improvements brought by the V8 engine every year, Electron has more weapons when handling high-performance scenarios:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "WebAssembly (WASM)"
        }), ": Through WASM, we can compile high-performance libraries written in C/C++ (like FFmpeg, OpenCV) to run in the renderer process. This allows compute-intensive tasks like video editing and image processing to achieve near-native speeds in Electron (Figma is the best example)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Worker Threads"
        }), ": To avoid blocking the UI rendering main thread, heavy computational tasks (like large file parsing, encryption/decryption) should be placed in Worker threads to execute."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Native Addons (C++)"
        }), ": For performance needs that cannot be met at the Node.js level, developers can write C++ native modules (Node Native Addons) to directly call the underlying OS APIs and interact with JavaScript via N-API."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "53-strong-challengers-tauri-and-flutter",
      children: "5.3 Strong Challengers: Tauri and Flutter"
    }), "\n", createVNode(_components.p, {
      children: "Electron’s dominance is being challenged, mainly by frameworks pursuing extreme size and performance:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Tauri (Rust + Web Frontend)"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Advantages"
            }), ": Extremely lightweight. It does not package Chromium; instead, it reuses the operating system’s built-in WebView (WebView2/Edge on Windows, WebKit on macOS). The installation package is usually only 1/20th the size of Electron."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Disadvantages"
            }), ": Browser compatibility hell. Because it relies on the system WebView, you cannot guarantee that the user’s computer has the latest WebView version. You may need to write Polyfills for rendering differences across different systems. Also, the backend requires Rust knowledge."]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Flutter (Dart)"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Advantages"
            }), ": Comes with its own rendering engine (Skia/Impeller). It does not rely on WebView and directly calls the GPU to draw the UI, offering extremely strong performance and an experience closest to native."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Disadvantages"
            }), ": Ecosystem isolation. You cannot directly use the vast ocean of JavaScript libraries on NPM; you must use the Dart ecosystem."]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Electron’s Moat"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Consistency"
            }), ": Because it comes with Chromium, Electron guarantees ", createVNode(_components.strong, {
              children: "pixel-perfect consistency"
            }), ". Developers don’t have to worry about whether the user’s computer is Windows 10 or 11; the web page rendering result is always the same. This is the stability most valued by enterprise-level software."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "6-conclusion-should-we-still-learn-electron-in-2026",
      children: "6. Conclusion: Should We Still Learn Electron in 2026?"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "The answer is yes."
      })
    }), "\n", createVNode(_components.p, {
      children: ["Although it has the disadvantages of large size and high memory consumption, when it comes to ", createVNode(_components.strong, {
        children: "building complex, highly interactive productivity tools"
      }), " (like IDEs, design software, collaborative office software), Electron remains the undisputed leader."]
    }), "\n", createVNode(_components.p, {
      children: "Its ecosystem is the most mature, it has the fewest pitfalls, and it can help you build a product and push it to all platforms in the shortest amount of time. For most companies and developers, “development efficiency” and “cross-platform consistency” are far more important than 100MB of hard drive space."
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

const url = "src/content/posts/2512-electron-note.en.mdx";
const file = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2512-electron-note.en.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/2512-electron-note.en.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
