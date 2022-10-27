/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  html: [
    doc("html/index", "HTML"),
    category("html/elements/index", "标签", [
      doc("html/elements/text", "文本"),
      doc("html/elements/hyperlink", "超链接"),
      doc("html/elements/img", "图片"),
    ]),
    doc("html/character-entities", "字符实体"),
    category("html/solutions/index", "解决方案", [
      doc("html/solutions/autocomplete", "禁用浏览器的自动补全"),
    ]),
    category("html/canvas/index", "Canvas", [
      doc("html/canvas/canvas-clock", "Canvas 时钟"),
    ]),
  ],

  css: [
    doc("css/index", "CSS"),
    doc("css/selectors", "选择器"),
    doc("css/box-model", "盒模型"),
    doc("css/bfc", "BFC"),
    doc("css/centered", "垂直水平居中"),
  ],

  javascript: [
    doc("javascript/index", "JavaScript"),
    doc("javascript/code-specification", "代码规范"),
    doc("javascript/variable", "变量"),
    category("javascript/data-type/index", "数据类型", [
      doc("javascript/data-type/number", "Number"),
      doc("javascript/data-type/string", "String"),
      doc("javascript/data-type/type-conversion", "类型转换"),
    ]),
    category("javascript/operators-and-expressions/index", "运算符和表达式", [
      doc("javascript/operators-and-expressions/bitwise-not", "按位非 ~"),
      doc("javascript/operators-and-expressions/logic-or", "逻辑或 ||"),
      doc(
        "javascript/operators-and-expressions/nullish-coalescing",
        "空值合并 ??"
      ),
      doc(
        "javascript/operators-and-expressions/logical-nullish-assignment",
        "逻辑空赋值 ??="
      ),
      doc("javascript/operators-and-expressions/option-chaining", "可选链 ?."),
      doc(
        "javascript/operators-and-expressions/destructuring-assignment",
        "解构赋值"
      ),
    ]),
    category("javascript/reference-types/index", "引用类型", [
      category("javascript/reference-types/array/index", "数组", [
        doc("javascript/reference-types/array/splice", "splice"),
      ]),
      doc("javascript/reference-types/array-like-object", "类数组对象"),
      doc("javascript/reference-types/join", "合并数组、对象"),
      doc(
        "javascript/reference-types/shallowcopy-and-deepcopy",
        "🚀 深复制与浅复制"
      ),
    ]),
    category("javascript/dom/index", "DOM", [
      doc("javascript/dom/events", "DOM 事件"),
    ]),
    category("javascript/module/index", "模块化", []),
    doc("javascript/event-loop", "事件循环"),
    category("javascript/solutions/index", "解决方案", [
      doc("javascript/solutions/get-device-type", "获取设备类型"),
      doc("javascript/solutions/get-file-type", "获取文件类型"),
      doc("javascript/solutions/get-text-from-html", "从 HTML 中提取文字"),
      doc("javascript/solutions/possessing-date", "日期、时间处理"),
      doc("javascript/solutions/get-url-parameter", "获取 URL Query 参数"),
      doc("javascript/solutions/copy-text-to-clipboard", "复制文本至剪切板"),
      doc("javascript/solutions/generate-a-guid", "生成 GUID"),
    ]),
  ],

  typescript: [
    doc("typescript/index", "TypeScript"),
    doc("typescript/environment", "搭建环境"),
    doc("typescript/debug", "运行与调试"),
    category("typescript/types/index", "类型", [
      doc("typescript/types/built-in", "内置类型"),
      doc("typescript/types/any", "any"),
      doc("typescript/types/enum", "enum"),
      doc("typescript/types/tuple", "Tuple"),
      doc("typescript/types/array", "Array"),
      doc("typescript/types/object", "Object"),
      doc("typescript/types/function", "Function"),
      doc("typescript/types/type-alias", "类型别名"),
      doc("typescript/types/union-type", "联合类型"),
      doc("typescript/types/intersection-type", "交叉类型"),
      doc("typescript/types/literal-type", "字面量类型"),
      doc("typescript/types/nullable-type", "可空类型"),
    ]),
    doc("typescript/tsconfig", "TSConfig"),
    category("typescript/best-practice/index", "最佳实践", [
      doc("typescript/best-practice/map-data-model", "实现数据模型映射"),
    ]),
  ],

  react: [
    doc("react/index", "React"),
    category("react/hooks/index", "Hooks", [
      doc("react/hooks/useState", "useState"),
      doc("react/hooks/useEffect", "useEffect"),
      doc("react/hooks/useRef", "useRef"),
      doc("react/hooks/useContext", "useContext"),
    ]),
    category("react/dom/index", "DOM", [
      doc("react/dom/dom-elements", "DOM 元素"),
    ]),
    category("react/style-and-css/index", "样式和 CSS", [
      doc("react/style-and-css/css-in-javascript", "CSS in JavaScript"),
    ]),
    doc("react/components-interaction", "组件交互"),
    category("react/solutions/index", "解决方案", [
      doc("react/solutions/download-file", "文件下载"),
      doc("react/solutions/import-image", "图片导入"),
    ]),
    category("react/best-practice/index", "最佳实践", [
      doc("react/best-practice/component-design", "组件设计"),
    ]),
    category("react/create-react-app/index", "Create React App", [
      doc("react/create-react-app/configure-absolute-path", "配置绝对路径"),
      doc("react/create-react-app/environment-variable", "环境变量"),
    ]),
    category("react/react-router/index", "React Router", [
      doc("react/react-router/installation", "安装 React Router"),
      doc("react/react-router/routers", "路由"),
      category("react/react-router/components/index", "组件", [
        doc("react/react-router/components/link", "🚀 Link"),
      ]),
    ]),
    doc("react/react-i18next", "React i18next"),
    category("react/redux/index", "Redux", [
      doc("react/redux/installation", "安装 Redux"),
    ]),
    category("react/use-typescript/index", "使用 TypeScript", [
      doc("react/use-typescript/types-in-react", "React 中的类型"),
    ]),
  ],

  vue: [doc("vue/index", "Vue")],

  tailwind: [doc("tailwind/index", "Tailwind")],
  webpack: [doc("webpack/index", "Webpack")],
  rn: [doc("rn/index", "React Native")],

  // sass: [doc("sass/index", "Sass")],

  npm: [
    doc("npm/index", "npm"),
    doc("npm/upgrade-node", "升级 Node 版本"),
    doc("npm/upgrade-npm", "升级 npm 版本"),
    doc("npm/classnames", "classnames"),
    doc("npm/clsx", "clsx"),
    doc("npm/dotenv", "dotenv"),
    doc("npm/momentjs", "Moment.js"),
    doc("npm/n-module", "N Module"),
    doc("npm/nodemon", "nodemon"),
    doc("npm/patch-package", "patch-package"),
    doc("npm/ts-node", "ts-node"),
    doc("npm/uuid", "uuid"),
    doc("npm/axios", "Axios"),
  ],

  yarn: [doc("yarn/index", "Yarn"), doc("yarn/cli", "CLI")],

  vite: [doc("vite/index", "Vite"), doc("vite/installation", "项目搭建")],

  graphql: [
    doc("graphql/index", "GraphQL"),
    doc("graphql/installation", "🚀 安装"),
  ],

  nodejs: [
    category("nodejs/index", "Node.js", [
      doc("nodejs/environment", "🚀 搭建环境"),
      doc("nodejs/environment-variable", "环境变量"),
    ]),
    category("nodejs/koa/index", "Koa", []),
    category("nodejs/express/index", "Express", [
      doc("nodejs/express/middleware", "Express Middleware"),
    ]),
  ],

  mongodb: [doc("mongodb/index", "MongoDB")],

  git: [doc("git/index", "Git")],

  algorithm: [
    category("algorithm/dataStructure/index", "数据结构", [
      category("algorithm/dataStructure/binary-tree/index", "二叉树", [
        doc(
          "algorithm/dataStructure/binary-tree/basic-operation",
          "二叉树的基本操作"
        ),
        doc(
          "algorithm/dataStructure/binary-tree/binary-tree-preorder-traversal",
          "二叉树的前序遍历"
        ),
        doc(
          "algorithm/dataStructure/binary-tree/binary-tree-inorder-traversal",
          "二叉树的中序遍历"
        ),
        doc(
          "algorithm/dataStructure/binary-tree/binary-tree-postorder-traversal",
          "二叉树的后序遍历"
        ),
        doc(
          "algorithm/dataStructure/binary-tree/minimum-depth-of-binary-tree",
          "二叉树的最小深度"
        ),
        doc(
          "algorithm/dataStructure/binary-tree/maximum-depth-of-binary-tree",
          "二叉树的最大深度"
        ),
        doc(
          "algorithm/dataStructure/binary-tree/insert-into-a-binary-search-tree",
          "二叉搜索树中的插入操作"
        ),
        doc(
          "algorithm/dataStructure/binary-tree/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof",
          "二叉搜索树后序遍历验证"
        ),
      ]),
    ]),
    category("algorithm/algorithm/index", "算法", [
      category("algorithm/algorithm/sort/index", "排序", []),
      category("algorithm/algorithm/dp/index", "动态规划", [
        doc(
          "algorithm/algorithm/dp/longest-common-subsequence",
          "最长公共子序列"
        ),
        doc(
          "algorithm/algorithm/dp/longest-increasing-subsequence",
          "最长递增子序列"
        ),
        doc("algorithm/algorithm/dp/maximum-subarray", "最大子数组和"),
        doc("algorithm/algorithm/dp/coin-change", "零钱兑换"),
      ]),
      category("algorithm/algorithm/greedy/index", "贪心算法", []),
    ]),
    doc("algorithm/leetcode/index", "Leetcode"),
  ],

  computer_network: [
    doc("computer-network/index", "计算机网络"),
    category("computer-network/dns/index", "DNS", [
      doc(
        "computer-network/dns/protocol-used-by-DNS",
        "DNS 用的是 TCP 协议还是 UDP 协议"
      ),
    ]),
    category("computer-network/cdn/index", "CDN", []),
  ],
  computer_system: [
    doc("computer-system/index", "操作系统"),
    [doc("computer-system/process-management", "进程管理")],
  ],
  backend: [
    // MongoDB
    {
      type: "category",
      label: "MongoDB",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "mongodb/index",
      },
      items: [
        {
          type: "doc",
          id: "mongodb/environment",
          label: "🚀 搭建环境",
        },
      ],
    },
  ],
  design: [
    // 文案排版指南
    { type: "doc", id: "copywriting-guide", label: "文案排版指南" },
    // 优质网站设计
    { type: "doc", id: "best-website-design", label: "优质网站设计" },
  ],
  interview: [
    doc("interview/index", "前端面试"),
    category("interview/interview-questions/index", "面经", [
      doc("interview/interview-questions/network", "计算机网络"),
      doc("interview/interview-questions/broswer", "浏览器"),
      doc("interview/interview-questions/HTML&CSS", "HTML&CSS"),
      doc("interview/interview-questions/JavaScript", "JavaScript"),
      doc("interview/interview-questions/TypeScript", "TypeScript"),
      doc("interview/interview-questions/Vue", "Vue"),
      doc("interview/interview-questions/React", "React"),
    ]),
    category("interview/javascript/index", "JavaScript", [
      doc(
        "interview/javascript/difference-arrow-function",
        "箭头函数与普通函数的区别"
      ),
      doc(
        "interview/javascript/export-and-export-default",
        "export 和 export default 的区别"
      ),
    ]),
    category("interview/hands-on-practice/index", "手写实现", [
      doc("interview/hands-on-practice/concurrent-requests", "异步并发控制"),
      doc("interview/hands-on-practice/deep-copy", "深、浅拷贝"),
      doc("interview/hands-on-practice/throttle-debounce", "防抖节流"),
      doc("interview/hands-on-practice/call-apply-bind", "call、apply、bind"),
      doc("interview/hands-on-practice/hands-on-promise", "Promise"),
      doc(
        "interview/hands-on-practice/promise-ajax",
        "基于 Promise 的 Ajax 封装"
      ),
      doc("interview/hands-on-practice/async-print", "异步循环打印"),
      doc(
        "interview/hands-on-practice/hands-on-instanceof",
        "模拟实现 instanceof"
      ),
      doc("interview/hands-on-practice/hands-on-new", "模拟实现 new"),
      doc("interview/hands-on-practice/singleton", "单例模式"),
      doc("interview/hands-on-practice/es5-inheritance", "手动实现 ES5 继承"),
      doc(
        "interview/hands-on-practice/vitual-dom",
        "将 Virtual Dom 转化为真实 DOM 结构"
      ),
    ]),
  ],
};

function doc(id, label) {
  return {
    type: "doc",
    id: id,
    label: label,
  };
}

function category(id, label, items) {
  return {
    type: "category",
    label: label,
    collapsible: true,
    collapsed: true,
    link: {
      type: "doc",
      id: id,
    },
    items: items,
  };
}

module.exports = sidebars;
