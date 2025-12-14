import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server.BR4veou0.js';
import 'clsx';

const frontmatter = {
  "title": "Vue3 编译宏使用与原理",
  "date": "2020-10-23T13:19:02.000Z",
  "updatedAt": "2024-12-13T10:07:53.938Z",
  "tags": ["Vue"],
  "draft": false,
  "slug": "1708-vue3-compiler-macro"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "一什么是编译宏",
    "text": "一、什么是编译宏"
  }, {
    "depth": 2,
    "slug": "二编译宏有什么用",
    "text": "二、编译宏有什么用"
  }, {
    "depth": 2,
    "slug": "三常见的编译宏",
    "text": "三、常见的编译宏"
  }, {
    "depth": 2,
    "slug": "四编译宏的实现原理",
    "text": "四、编译宏的实现原理"
  }, {
    "depth": 3,
    "slug": "1-以-defineprops-为例子实现一个编译宏功能",
    "text": "1. 以 defineProps 为例子实现一个编译宏功能"
  }, {
    "depth": 3,
    "slug": "2-转换效果",
    "text": "2. 转换效果"
  }, {
    "depth": 2,
    "slug": "总结",
    "text": "总结"
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
    children: [createVNode(_components.p, {
      children: ["Vue3 编译宏是一种特殊的语法糖，用于简化组件选项的声明。它们可以在 ", createVNode(_components.code, {
        children: "<script setup>"
      }), " 中使用，并且会在编译阶段被处理。编译宏可以提供类型推断、运行时消除以及开发体验优化等功能。"]
    }), "\n", createVNode(_components.h2, {
      id: "一什么是编译宏",
      children: "一、什么是编译宏"
    }), "\n", createVNode(_components.p, {
      children: ["Vue3 编译宏是在代码", createVNode(_components.strong, {
        children: "编译阶段处理的特殊指令或函数"
      }), "。Vue3 的编译宏主要是为 ", createVNode(_components.code, {
        children: "<script setup>"
      }), " 语法设计的。编译宏不需要导入就可以直接使用，且会随着 ", createVNode(_components.code, {
        children: "<script setup>"
      }), " 的处理过程一同被编译掉。"]
    }), "\n", createVNode(_components.h2, {
      id: "二编译宏有什么用",
      children: "二、编译宏有什么用"
    }), "\n", createVNode(_components.p, {
      children: "编译宏提供了一种更简洁的方式来编写和维护已有的配置。在 Vue3 中，编译宏主要有以下几个作用："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "类型推断和检查"
        }), "：宏可以提供类型安全，帮助开发者在编写代码时避免类型错误。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "运行时消除"
        }), "：在 Vue3 的 ", createVNode(_components.code, {
          children: "<script setup>"
        }), " 中，引入的宏在编译阶段处理后，最终生成的代码中可能不会包含这些宏。这意味着宏可以提供额外的功能，而不会增加运行时的开销。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "代码重用和维护"
        }), "：通过定义宏，可以在不同的组件中重用相同的逻辑。这有助于维护代码的一致性，并减少重复代码的编写。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "简化配置"
        }), "：某些宏可以用于简化 Vue 组件的配置，使得配置更加简洁明了。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "优化开发体验"
        }), "：宏可以减少样板文件，提供更简洁的语法，从而提高开发效率和体验。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "高级功能"
        }), "：一些宏可能提供高级功能，如自动注册组件、自动导入依赖等。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "三常见的编译宏",
      children: "三、常见的编译宏"
    }), "\n", createVNode(_components.p, {
      children: "Vue 3 引入了几个编译宏（Compile-time Macros）来提高性能和开发体验。这些宏在编译时会被转换为高效的代码。下面是主要的编译宏："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "defineProps"
        })
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "用于声明组件的 props"
      }), "\n", createVNode(_components.li, {
        children: ["例如：", createVNode(_components.code, {
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
        children: "用于声明组件可能触发的事件"
      }), "\n", createVNode(_components.li, {
        children: ["例如：", createVNode(_components.code, {
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
        children: "用于显式地指定哪些属性和方法可以被父组件访问"
      }), "\n", createVNode(_components.li, {
        children: ["例如：", createVNode(_components.code, {
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
        children: ["用于为 ", createVNode(_components.code, {
          children: "defineProps"
        }), " 定义的 props 提供默认值"]
      }), "\n", createVNode(_components.li, {
        children: ["例如：", createVNode(_components.code, {
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
        children: ["用于定义组件选项，如 ", createVNode(_components.code, {
          children: "name"
        }), "、", createVNode(_components.code, {
          children: "inheritAttrs"
        }), " 等"]
      }), "\n", createVNode(_components.li, {
        children: ["例如：", createVNode(_components.code, {
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
        children: "用于在使用 TypeScript 时为插槽定义类型"
      }), "\n", createVNode(_components.li, {
        children: ["例如：", createVNode(_components.code, {
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
        children: ["用于在 3.4+ 版本中简化 ", createVNode(_components.code, {
          children: "v-model"
        }), " 的使用"]
      }), "\n", createVNode(_components.li, {
        children: ["例如：", createVNode(_components.code, {
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
        children: "虽然不是编译宏，但它是一个用于定义异步组件的运行时辅助函数"
      }), "\n", createVNode(_components.li, {
        children: ["例如：", createVNode(_components.code, {
          children: "const AsyncComp = defineAsyncComponent(() => import('./components/AsyncComponent.vue'))"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["这些编译宏主要用在 ", createVNode(_components.code, {
        children: "<script setup>"
      }), " 中，它们提供了更简洁的语法和更好的类型推断。使用这些宏可以减少样板代码，提高代码的可读性和维护性。"]
    }), "\n", createVNode(_components.h2, {
      id: "四编译宏的实现原理",
      children: "四、编译宏的实现原理"
    }), "\n", createVNode(_components.p, {
      children: "编译宏的本质就是在编译阶段执行的一个转化函数。它的工作原理如下："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["识别：编译器识别特定的宏调用（如 ", createVNode(_components.code, {
          children: "defineProps()"
        }), "）。"]
      }), "\n", createVNode(_components.li, {
        children: "分析：分析宏调用的参数和上下文。"
      }), "\n", createVNode(_components.li, {
        children: "转换：将宏调用转换为适当的运行时代码或组件选项。"
      }), "\n", createVNode(_components.li, {
        children: "类型生成：（在 TypeScript 环境中）生成相应的类型声明。"
      }), "\n", createVNode(_components.li, {
        children: "代码生成：生成最终的 JavaScript 代码，通常会移除宏调用本身。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/post-assets/m4ml4fgx-vue3-compile-macro.png",
        alt: "vue3-compile-macro.png"
      })
    }), "\n", createVNode(_components.h3, {
      id: "1-以-defineprops-为例子实现一个编译宏功能",
      children: "1. 以 defineProps 为例子实现一个编译宏功能"
    }), "\n", createVNode(_components.p, {
      children: ["下面是一个 babel 插件的简单实现。它能将 Vue3 编译宏 ", createVNode(_components.code, {
        children: "defineProps"
      }), " 转换成 Vue 的 props 对象。从这个例子可以更好地理解编译宏语法糖的本质。"]
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
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "declare"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'@babel/helper-plugin-utils'"
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
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "types"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "t"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'@babel/core'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "module"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "exports"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " declare"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "api"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
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
              color: "#E1E4E8"
            },
            children: "  api."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "assertVersion"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "7"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 确保 Babel 版本兼容性"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  return"
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
              color: "#E1E4E8"
            },
            children: "    name: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"babel-plugin-transform-define-props\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    visitor: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "      CallExpression"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "path"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // 检查是否是 defineProps 函数调用"
          })
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
            children: " (path.node.callee.name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'defineProps'"
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
            children: "          const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " arg"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " path.node.arguments["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "];"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "          "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "          if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (t."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "isObjectExpression"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(arg)) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "            // 处理对象语法: defineProps({ prop: String })"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "            const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " properties"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " arg.properties."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "map"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "prop"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "              // 将每个属性转换为 { prop: { type: PropType } } 的形式"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "              return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " t."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "objectProperty"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                prop.key,"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                t."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "objectExpression"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                  t."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "objectProperty"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(t."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "identifier"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'type'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), prop.value)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                ])"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "              );"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "            const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " propsObject"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " t."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "objectExpression"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(properties);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "            // 将 defineProps 调用替换为 __props__ 赋值"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            path."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "replaceWith"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "              t."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "variableDeclaration"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'const'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                t."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "variableDeclarator"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                  t."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "identifier"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'__props__'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                  propsObject"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                )"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "              ])"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            );"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "          } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "else"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (t."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "isArrayExpression"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(arg)) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "            // 处理数组语法: defineProps(['prop1', 'prop2'])"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "            const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " properties"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " arg.elements."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "map"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "element"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "              // 将每个元素转换为 { prop: null } 的形式"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "              return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " t."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "objectProperty"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(element, t."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "identifier"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'null'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "            const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " propsObject"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " t."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "objectExpression"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(properties);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "            // 将 defineProps 调用替换为 __props__ 赋值"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            path."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "replaceWith"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "              t."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "variableDeclaration"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'const'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                t."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "variableDeclarator"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                  t."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "identifier"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'__props__'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                  propsObject"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                )"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "              ])"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            );"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "          }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  };"
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
    }), "\n", createVNode(_components.h3, {
      id: "2-转换效果",
      children: "2. 转换效果"
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
            children: "// 转换前：对象语法"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " props1"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " defineProps"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "({"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  name: String,"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  age: Number,"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  isActive: Boolean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 转换后：对象语法转换结果"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " __props__"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  name: { type: String },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  age: { type: Number },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  isActive: { type: Boolean }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 转换前：数组语法"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " props2"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " defineProps"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'title'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'content'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 转换后：数组语法转换结果"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " __props__"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
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
              color: "#E1E4E8"
            },
            children: "  title: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "null"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  content: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "null"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "在编译时识别特定的代码模式，并将其转换为等效但可能更复杂或更优化的代码。在 Vue 的实际实现中，这个过程会更加复杂，包括处理类型推断、默认值、验证等多个方面。"
    }), "\n", createVNode(_components.h2, {
      id: "总结",
      children: "总结"
    }), "\n", createVNode(_components.p, {
      children: "本文介绍了 Vue3 编译宏。编译宏是 Vue3 的一个强大特性，它们提供了更简洁的语法和更好的类型推断，使得组件编写更加高效和愉快。"
    }), "\n", createVNode(_components.h2, {
      id: "参考资料",
      children: "参考资料"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://cn.vuejs.org/api/sfc-script-setup.html#defineprops-defineemits",
          children: "Vue3 官方文档"
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

const url = "src/content/posts/1708-vue3-compiler-macro.mdx";
const file = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/1708-vue3-compiler-macro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/AleksChen.github.io/AleksChen.github.io/src/content/posts/1708-vue3-compiler-macro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
