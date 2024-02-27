const sidebars = {
  css: [
    category("css/index", "CSS", [
      doc("css/layout", "布局"),
      doc("css/selectors", "选择器"),
      doc("css/box-model", "盒模型"),
      doc("css/bfc", "BFC"),
    ]),
  ],

  javascript: [
    category("javascript/index", "JavaScript", [
      category("javascript/dom/index", "DOM", [
        doc("javascript/dom/events", "DOM 事件"),
      ]),
      category("javascript/module/index", "模块化", []),
      doc("javascript/event-loop", "事件循环"),
      doc("javascript/curring", "柯里化"),
    ]),
  ],

  typescript: [
    category("typescript/index", "TypeScript", [
      doc("typescript/environment", "搭建环境"),
      doc("typescript/debug", "运行与调试"),
      doc("typescript/types", "类型"),
      doc("typescript/tsconfig", "TSConfig"),
    ]),
  ],

  react: [
    category("react/index", "React", [
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
    ]),
  ],

  vue: [category("vue/index", "Vue")],
  vite: [category("vite/index", "Vite")],

  webpack: [category("webpack/index", "Webpack")],
  rn: [category("rn/index", "React Native")],

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

  algorithm: [
    category("algorithm/index", "算法与数据结构", [
      doc("algorithm/leetcode/index", "Leetcode"),
      category("algorithm/dataStructure/index", "数据结构", [
        category("algorithm/dataStructure/binary-tree/index", "二叉树", [
          doc(
            "algorithm/dataStructure/binary-tree/basic-operation",
            "二叉树的基本操作"
          ),
          doc(
            "algorithm/leetcode/record/94binary-tree-inorder-traversal",
            "94. 二叉树的中序遍历"
          ),
          doc(
            "algorithm/leetcode/record/104maximum-depth-of-binary-tree",
            "104. 二叉树的最大深度"
          ),
          doc(
            "algorithm/leetcode/record/111minimum-depth-of-binary-tree",
            "111. 二叉树的最小深度"
          ),
          doc(
            "algorithm/leetcode/record/144binary-tree-preorder-traversal",
            "144. 二叉树的前序遍历"
          ),
          doc(
            "algorithm/leetcode/record/145binary-tree-postorder-traversal",
            "145. 二叉树的后序遍历"
          ),
          doc(
            "algorithm/leetcode/record/701insert-into-a-binary-search-tree",
            "701. 二叉搜索树中的插入操作"
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
            "algorithm/leetcode/record/53maximum-subarray",
            "53. 最大子数组和"
          ),
          doc(
            "algorithm/leetcode/record/300longest-increasing-subsequence",
            "300. 最长递增子序列"
          ),
          doc("algorithm/leetcode/record/332coin-change", "332. 零钱兑换"),
          doc(
            "algorithm/leetcode/record/1143longest-common-subsequence",
            "1143.最长公共子序列"
          ),
        ]),
      ]),
    ]),
  ],
  // computer_network: [
  //   doc("computer-network/index", "计算机网络"),
  //   category("computer-network/dns/index", "DNS", [
  //     doc(
  //       "computer-network/dns/protocol-used-by-DNS",
  //       "DNS 用的是 TCP 协议还是 UDP 协议"
  //     ),
  //   ]),
  //   category("computer-network/cdn/index", "CDN", []),
  // ],
  // computer_system: [
  //   doc("computer-system/index", "操作系统"),
  //   [doc("computer-system/process-management", "进程管理")],
  // ],

  interview: [
    category("interview/index", "前端面试", [
      category("interview/interview-questions/index", "面经", [
        doc("interview/interview-questions/network", "计算机网络"),
        doc("interview/interview-questions/broswer", "浏览器"),
        doc("interview/interview-questions/HTML&CSS", "HTML&CSS"),
        doc("interview/interview-questions/JavaScript", "JavaScript"),
        doc("interview/interview-questions/TypeScript", "TypeScript"),
        doc("interview/interview-questions/Vue", "Vue"),
        doc("interview/interview-questions/React", "React"),
      ]),
      category("interview/css/index", "CSS", [
        doc("interview/css/two-columns", "两栏布局"),
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
        doc("interview/hands-on-practice/carousel", "轮播图实现"),
      ]),
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
