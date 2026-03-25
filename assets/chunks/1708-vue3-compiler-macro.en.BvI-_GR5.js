import { v as createVNode, S as Fragment, _ as __astro_tag_component__ } from './astro/server.Dx2-getx.js';

const frontmatter = {
  "title": "Vue3 Compiler Macros: Usage and Principles",
  "date": "2020-10-23T13:19:02.000Z",
  "updatedAt": "2024-12-13T10:07:53.938Z",
  "tags": ["Vue"],
  "draft": false,
  "slug": "1708-vue3-compiler-macro-en",
  "locale": "en",
  "translationKey": "1708-vue3-compiler-macro",
  "intro": "A systematic overview of the usage and underlying principles of Vue3 compiler macros, covering common macros like defineProps, defineEmits, withDefaults, and defineModel.",
  "seoImage": "/post-assets/og/1708-vue3-compiler-macro.png",
  "seoTitle": "Vue3 Compiler Macros: Usage and Principles | defineProps, defineEmits",
  "seoDescription": "A systematic overview of the usage and underlying principles of Vue3 compiler macros, covering common macros like defineProps, defineEmits, withDefaults, defineModel, and their behavior during the compilation phase.",
  "seoKeywords": ["Vue3", "compiler macros", "defineProps", "defineEmits", "withDefaults", "defineModel", "script setup"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "i-what-are-compiler-macros",
    "text": "I. What are Compiler Macros?"
  }, {
    "depth": 2,
    "slug": "ii-what-are-compiler-macros-used-for",
    "text": "II. What are Compiler Macros Used For?"
  }, {
    "depth": 2,
    "slug": "iii-common-compiler-macros",
    "text": "III. Common Compiler Macros"
  }, {
    "depth": 2,
    "slug": "iv-implementation-principles-of-compiler-macros",
    "text": "IV. Implementation Principles of Compiler Macros"
  }, {
    "depth": 3,
    "slug": "1-implementing-a-compiler-macro-feature-using-defineprops-as-an-example",
    "text": "1. Implementing a Compiler Macro Feature using defineProps as an Example"
  }, {
    "depth": 3,
    "slug": "2-transformation-effect",
    "text": "2. Transformation Effect"
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
    children: [createVNode(_components.p, {
      children: ["Vue3 compiler macros are a special type of syntactic sugar used to simplify the declaration of component options. They can be used within ", createVNode(_components.code, {
        children: "<script setup>"
      }), " and are processed during the compilation phase. Compiler macros provide features such as type inference, runtime elimination, and optimization of the development experience."]
    }), "\n", createVNode(_components.h2, {
      id: "i-what-are-compiler-macros",
      children: "I. What are Compiler Macros?"
    }), "\n", createVNode(_components.p, {
      children: ["Vue3 compiler macros are ", createVNode(_components.strong, {
        children: "special directives or functions processed during the code compilation phase"
      }), ". Vue3’s compiler macros are primarily designed for the ", createVNode(_components.code, {
        children: "<script setup>"
      }), " syntax. Compiler macros can be used directly without being imported, and they are compiled away along with the processing of ", createVNode(_components.code, {
        children: "<script setup>"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "ii-what-are-compiler-macros-used-for",
      children: "II. What are Compiler Macros Used For?"
    }), "\n", createVNode(_components.p, {
      children: "Compiler macros provide a more concise way to write and maintain existing configurations. In Vue3, compiler macros mainly serve the following purposes:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Type Inference and Checking"
        }), ": Macros can provide type safety, helping developers avoid type errors when writing code."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Runtime Elimination"
        }), ": In Vue3’s ", createVNode(_components.code, {
          children: "<script setup>"
        }), ", the macros introduced are processed during the compilation phase, and the final generated code may not contain these macros. This means macros can provide additional functionality without increasing runtime overhead."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Code Reuse and Maintenance"
        }), ": By defining macros, the same logic can be reused across different components. This helps maintain code consistency and reduces the writing of boilerplate code."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Simplified Configuration"
        }), ": Certain macros can be used to simplify the configuration of Vue components, making the configuration more concise and clear."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Optimized Development Experience"
        }), ": Macros can reduce boilerplate files and provide a more concise syntax, thereby improving development efficiency and experience."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Advanced Features"
        }), ": Some macros may provide advanced features, such as automatic component registration, automatic dependency import, etc."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "iii-common-compiler-macros",
      children: "III. Common Compiler Macros"
    }), "\n", createVNode(_components.p, {
      children: "Vue 3 introduced several Compile-time Macros to improve performance and development experience. These macros are transformed into efficient code during compilation. Here are the main compiler macros:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "defineProps"
        })
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Used to declare component props"
      }), "\n", createVNode(_components.li, {
        children: ["Example: ", createVNode(_components.code, {
          children: "const props = defineProps(['title', 'likes'])"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "defineEmits"
        })
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Used to declare events that the component may trigger"
      }), "\n", createVNode(_components.li, {
        children: ["Example: ", createVNode(_components.code, {
          children: "const emit = defineEmits(['change', 'delete'])"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "defineExpose"
        })
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Used to explicitly specify which properties and methods can be accessed by the parent component"
      }), "\n", createVNode(_components.li, {
        children: ["Example: ", createVNode(_components.code, {
          children: "defineExpose({ method1, property1 })"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "4",
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "withDefaults"
        })
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Used to provide default values for props defined by ", createVNode(_components.code, {
          children: "defineProps"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Example: ", createVNode(_components.code, {
          children: "const props = withDefaults(defineProps<Props>(), { message: 'hello' })"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "5",
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "defineOptions"
        })
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Used to define component options, such as ", createVNode(_components.code, {
          children: "name"
        }), ", ", createVNode(_components.code, {
          children: "inheritAttrs"
        }), ", etc."]
      }), "\n", createVNode(_components.li, {
        children: ["Example: ", createVNode(_components.code, {
          children: "defineOptions({ name: 'MyComponent', inheritAttrs: false })"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "6",
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "defineSlots"
        })
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Used to define types for slots when using TypeScript"
      }), "\n", createVNode(_components.li, {
        children: ["Example: ", createVNode(_components.code, {
          children: "const slots = defineSlots<{ default: (props: { item: string }) => any }>()"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "7",
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "defineModel"
        })
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Used to simplify the use of ", createVNode(_components.code, {
          children: "v-model"
        }), " in version 3.4+"]
      }), "\n", createVNode(_components.li, {
        children: ["Example: ", createVNode(_components.code, {
          children: "const model = defineModel<string>({ default: '' })"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "8",
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "defineAsyncComponent"
        })
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Although not a compiler macro, it is a runtime helper function used to define asynchronous components"
      }), "\n", createVNode(_components.li, {
        children: ["Example: ", createVNode(_components.code, {
          children: "const AsyncComp = defineAsyncComponent(() => import('./components/AsyncComponent.vue'))"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["These compiler macros are primarily used in ", createVNode(_components.code, {
        children: "<script setup>"
      }), ", providing a more concise syntax and better type inference. Using these macros can reduce boilerplate code and improve code readability and maintainability."]
    }), "\n", createVNode(_components.h2, {
      id: "iv-implementation-principles-of-compiler-macros",
      children: "IV. Implementation Principles of Compiler Macros"
    }), "\n", createVNode(_components.p, {
      children: "The essence of a compiler macro is a transformation function executed during the compilation phase. Its working principle is as follows:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Identification: The compiler identifies specific macro calls (e.g., ", createVNode(_components.code, {
          children: "defineProps()"
        }), ")."]
      }), "\n", createVNode(_components.li, {
        children: "Analysis: It analyzes the arguments and context of the macro call."
      }), "\n", createVNode(_components.li, {
        children: "Transformation: It transforms the macro call into appropriate runtime code or component options."
      }), "\n", createVNode(_components.li, {
        children: "Type Generation: (In a TypeScript environment) It generates corresponding type declarations."
      }), "\n", createVNode(_components.li, {
        children: "Code Generation: It generates the final JavaScript code, typically removing the macro call itself."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m4ml4fgx-vue3-compile-macro.webp",
        alt: "vue3-compile-macro.webp"
      })
    }), "\n", createVNode(_components.h3, {
      id: "1-implementing-a-compiler-macro-feature-using-defineprops-as-an-example",
      children: "1. Implementing a Compiler Macro Feature using defineProps as an Example"
    }), "\n", createVNode(_components.p, {
      children: ["Below is a simple implementation of a babel plugin. It can transform the Vue3 compiler macro ", createVNode(_components.code, {
        children: "defineProps"
      }), " into a Vue props object. From this example, you can better understand the essence of compiler macro syntactic sugar."]
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
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#E5C07B"
            },
            children: "declare"
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
            children: "'@babel/helper-plugin-utils'"
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
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#E36209",
              "--shiki-dark": "#E06C75"
            },
            children: "types"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#E5C07B"
            },
            children: "t"
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
            children: "'@babel/core'"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#E5C07B"
            },
            children: "module"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#E5C07B"
            },
            children: "exports"
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
            children: " declare"
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
            children: "api"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: " =>"
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
            children: "  api"
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
            children: "assertVersion"
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
            children: "7"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#7F848E",
              "--shiki-dark-font-style": "italic"
            },
            children: "// Ensure Babel version compatibility"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "    name"
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
            children: "\"babel-plugin-transform-define-props\""
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
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "    visitor"
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
              color: "#6F42C1",
              "--shiki-dark": "#61AFEF"
            },
            children: "      CallExpression"
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
            children: "path"
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
            children: "        // Check if it is a defineProps function call"
          })
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
              "--shiki-dark": "#E5C07B"
            },
            children: "path"
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
            children: "node"
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
            children: "callee"
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
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#56B6C2"
            },
            children: " ==="
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: " 'defineProps'"
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
            children: "          const"
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#E5C07B"
            },
            children: " arg"
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
            children: " path"
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
            children: "node"
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
            children: "arguments"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "["
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
            children: "];"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "          "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "          if"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "t"
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
            children: "isObjectExpression"
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
            children: "arg"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ")) {"
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
            children: "            // Handle object syntax: defineProps({ prop: String })"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "            const"
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#E5C07B"
            },
            children: " properties"
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
            children: " arg"
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
            children: "properties"
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
            children: "map"
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
            children: "prop"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: " =>"
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
            children: "              // Transform each property into the form { prop: { type: PropType } }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "              return"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: " t"
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
            children: "objectProperty"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "                prop"
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
            children: "key"
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
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "                t"
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
            children: "objectExpression"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "(["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "                  t"
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
            children: "objectProperty"
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
            children: "t"
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
            children: "identifier"
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
            children: "'type'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "), "
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "prop"
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
            children: "value"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "                ])"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "              );"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "            });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "            "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "            const"
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#E5C07B"
            },
            children: " propsObject"
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
            children: " t"
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
            children: "objectExpression"
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
            children: "properties"
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
            children: "            "
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
            children: "            // Replace the defineProps call with an __props__ assignment"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "            path"
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
            children: "replaceWith"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "              t"
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
            children: "variableDeclaration"
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
            children: "'const'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ", ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "                t"
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
            children: "variableDeclarator"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "                  t"
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
            children: "identifier"
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
            children: "'__props__'"
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
              "--shiki-dark": "#E06C75"
            },
            children: "                  propsObject"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "                )"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "              ])"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "            );"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "          } "
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "else"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: " if"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "t"
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
            children: "isArrayExpression"
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
            children: "arg"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ")) {"
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
            children: "            // Handle array syntax: defineProps(['prop1', 'prop2'])"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "            const"
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#E5C07B"
            },
            children: " properties"
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
            children: " arg"
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
            children: "elements"
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
            children: "map"
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
            children: "element"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: " =>"
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
            children: "              // Transform each element into the form { prop: null }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "              return"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: " t"
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
            children: "objectProperty"
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
            children: "element"
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
            children: "t"
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
            children: "identifier"
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
            children: "'null'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "            });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "            "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#C678DD"
            },
            children: "            const"
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#E5C07B"
            },
            children: " propsObject"
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
            children: " t"
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
            children: "objectExpression"
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
            children: "properties"
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
            children: "            "
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
            children: "            // Replace the defineProps call with an __props__ assignment"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "            path"
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
            children: "replaceWith"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "              t"
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
            children: "variableDeclaration"
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
            children: "'const'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ", ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "                t"
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
            children: "variableDeclarator"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E5C07B"
            },
            children: "                  t"
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
            children: "identifier"
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
            children: "'__props__'"
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
              "--shiki-dark": "#E06C75"
            },
            children: "                  propsObject"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "                )"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "              ])"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "            );"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "          }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "      }"
          })
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
            children: "  };"
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
    }), "\n", createVNode(_components.h3, {
      id: "2-transformation-effect",
      children: "2. Transformation Effect"
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
            children: "// Before transformation: Object syntax"
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
            children: " props1"
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
            children: " defineProps"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "({"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "  name"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "String"
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
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "  age"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "Number"
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
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "  isActive"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "Boolean"
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
            children: "// After transformation: Object syntax transformation result"
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
            children: " __props__"
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
            children: "  name"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": { "
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "String"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "  age"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": { "
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "Number"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "  isActive"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": { "
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "Boolean"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: " }"
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
            children: "// Before transformation: Array syntax"
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
            children: " props2"
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
            children: " defineProps"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "(["
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "'title'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#98C379"
            },
            children: "'content'"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: "]);"
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
            children: "// After transformation: Array syntax transformation result"
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
            children: " __props__"
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
            children: "  title"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#D19A66"
            },
            children: "null"
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
              color: "#24292E",
              "--shiki-dark": "#E06C75"
            },
            children: "  content"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#D19A66"
            },
            children: "null"
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
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "During compilation, it identifies specific code patterns and transforms them into equivalent but potentially more complex or optimized code. In the actual implementation of Vue, this process would be much more complex, including handling type inference, default values, validation, and various other aspects."
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "This article introduced Vue3 compiler macros. Compiler macros are a powerful feature of Vue3; they provide a more concise syntax and better type inference, making component writing more efficient and enjoyable."
    }), "\n", createVNode(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits",
          children: "Vue3 Official Documentation"
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

const url = "src/content/posts/1708-vue3-compiler-macro.en.mdx";
const file = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/1708-vue3-compiler-macro.en.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/1708-vue3-compiler-macro.en.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
