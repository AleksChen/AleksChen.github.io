---
slug: Vue3 编译宏
title: Vue3 编译宏使用与原理
tags: [Vue]
author: Winwoo
---

Vue3 编译宏是一种特殊的语法糖，用于简化组件选项的声明。它们可以在 `<script setup>` 中使用，并且会在编译阶段被处理。编译宏可以提供类型推断、运行时消除以及开发体验优化等功能。

<!-- truncate -->



## 什么是编译宏

Vue3 编译宏是在代码**编译阶段处理的特殊指令或函数**。Vue3 的编译宏主要是为 `<script setup>` 语法设计的。编译宏不需要导入就可以直接使用，且会随着 `<script setup>` 的处理过程一同被编译掉。


## 编译宏有什么用
编译宏提供了一种更简洁的方式来编写和维护已有的配置。在 Vue3 中，编译宏主要有以下几个作用：

1. **类型推断和检查**：宏可以提供类型安全，帮助开发者在编写代码时避免类型错误。
2. **运行时消除**：在 Vue3 的 `<script setup>` 中，引入的宏在编译阶段处理后，最终生成的代码中可能不会包含这些宏。这意味着宏可以提供额外的功能，而不会增加运行时的开销。
3. **代码重用和维护**：通过定义宏，可以在不同的组件中重用相同的逻辑。这有助于维护代码的一致性，并减少重复代码的编写。
4. **简化配置**：某些宏可以用于简化 Vue 组件的配置，使得配置更加简洁明了。
5. **优化开发体验**：宏可以减少样板文件，提供更简洁的语法，从而提高开发效率和体验。
6. **高级功能**：一些宏可能提供高级功能，如自动注册组件、自动导入依赖等。



## 常见的编译宏

Vue 3 引入了几个编译宏（Compile-time Macros）来提高性能和开发体验。这些宏在编译时会被转换为高效的代码。下面是主要的编译宏：

1. `defineProps`
   - 用于声明组件的 props
   - 例如：`const props = defineProps(['title', 'likes'])`

2. `defineEmits`
   - 用于声明组件可能触发的事件
   - 例如：`const emit = defineEmits(['change', 'delete'])`

3. `defineExpose`
   - 用于显式地指定哪些属性和方法可以被父组件访问
   - 例如：`defineExpose({ method1, property1 })`

4. `withDefaults`
   - 用于为 `defineProps` 定义的 props 提供默认值
   - 例如：`const props = withDefaults(defineProps<Props>(), { message: 'hello' })`

5. `defineOptions`
   - 用于定义组件选项，如 `name`、`inheritAttrs` 等
   - 例如：`defineOptions({ name: 'MyComponent', inheritAttrs: false })`

6. `defineSlots`
   - 用于在使用 TypeScript 时为插槽定义类型
   - 例如：`const slots = defineSlots<{ default: (props: { item: string }) => any }>()`

7. `defineModel`
   - 用于在 3.4+ 版本中简化 `v-model` 的使用
   - 例如：`const model = defineModel<string>({ default: '' })`

8. `defineAsyncComponent`
   - 虽然不是编译宏，但它是一个用于定义异步组件的运行时辅助函数
   - 例如：`const AsyncComp = defineAsyncComponent(() => import('./components/AsyncComponent.vue'))`

这些编译宏主要用在 `<script setup>` 中，它们提供了更简洁的语法和更好的类型推断。使用这些宏可以减少样板代码，提高代码的可读性和维护性。

## 编译宏的实现原理

编译宏的本质就是在编译阶段执行的一个转化函数。它的工作原理如下：

- 识别：编译器识别特定的宏调用（如 `defineProps()`）。
- 分析：分析宏调用的参数和上下文。
- 转换：将宏调用转换为适当的运行时代码或组件选项。
- 类型生成：（在 TypeScript 环境中）生成相应的类型声明。
- 代码生成：生成最终的 JavaScript 代码，通常会移除宏调用本身。

 ![](assets/vue3-compile-macro.png)


### 以 defineProps 为例子实现一个编译宏功能

下面是一个 babel 插件的简单实现。它能将 Vue3 编译宏 `defineProps` 转换成 Vue 的 props 对象。从这个例子可以更好地理解编译宏语法糖的本质。

```js
const { declare } = require('@babel/helper-plugin-utils');
const { types: t } = require('@babel/core');

module.exports = declare(api => {
  api.assertVersion(7); // 确保 Babel 版本兼容性

  return {
    name: "babel-plugin-transform-define-props",
    visitor: {
      CallExpression(path) {
        // 检查是否是 defineProps 函数调用
        if (path.node.callee.name === 'defineProps') {
          const arg = path.node.arguments[0];
          
          if (t.isObjectExpression(arg)) {
            // 处理对象语法: defineProps({ prop: String })
            const properties = arg.properties.map(prop => {
              // 将每个属性转换为 { prop: { type: PropType } } 的形式
              return t.objectProperty(
                prop.key,
                t.objectExpression([
                  t.objectProperty(t.identifier('type'), prop.value)
                ])
              );
            });
            
            const propsObject = t.objectExpression(properties);
            
            // 将 defineProps 调用替换为 __props__ 赋值
            path.replaceWith(
              t.variableDeclaration('const', [
                t.variableDeclarator(
                  t.identifier('__props__'),
                  propsObject
                )
              ])
            );
          } else if (t.isArrayExpression(arg)) {
            // 处理数组语法: defineProps(['prop1', 'prop2'])
            const properties = arg.elements.map(element => {
              // 将每个元素转换为 { prop: null } 的形式
              return t.objectProperty(element, t.identifier('null'));
            });
            
            const propsObject = t.objectExpression(properties);
            
            // 将 defineProps 调用替换为 __props__ 赋值
            path.replaceWith(
              t.variableDeclaration('const', [
                t.variableDeclarator(
                  t.identifier('__props__'),
                  propsObject
                )
              ])
            );
          }
        }
      }
    }
  };
});
```



**转换效果**

```js
// 转换前：对象语法
const props1 = defineProps({
  name: String,
  age: Number,
  isActive: Boolean
});

// 转换后：对象语法转换结果
const __props__ = {
  name: { type: String },
  age: { type: Number },
  isActive: { type: Boolean }
};

// 转换前：数组语法
const props2 = defineProps(['title', 'content']);

// 转换后：数组语法转换结果
const __props__ = {
  title: null,
  content: null
};
```

在编译时识别特定的代码模式，并将其转换为等效但可能更复杂或更优化的代码。在 Vue 的实际实现中，这个过程会更加复杂，包括处理类型推断、默认值、验证等多个方面。



---

## 总结

本文介绍了 Vue3 编译宏。编译宏是 Vue3 的一个强大特性，它们提供了更简洁的语法和更好的类型推断，使得组件编写更加高效和愉快。


# 资料

- [Vue3 官方文档](https://cn.vuejs.org/api/sfc-script-setup.html#defineprops-defineemits)
