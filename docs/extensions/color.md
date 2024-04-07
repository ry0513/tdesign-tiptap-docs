# 文本颜色

使用此扩展添加 `color` 样式

::: warning 注意
此扩展依赖于基础扩展 [TextStyle](/extensions/text-style.html)
:::

## 使用

``` vue
<template>
  <TTiptap :editor="editor" />
</template>

<script setup>
import { TTiptap, EditorConfig, TextStyle, Color } from "tdesign-tiptap";
const editor = new EditorConfig({
  content: "<p>Tdesign-tiptap</p>",
  baseExtensions: [TextStyle],
  buttonExtensions: [Color],
});
</script>
```
## 配置

#### bar

是否在菜单栏显示，默认值：`true`

```js
Color.configure({
  bar: true
})
```

#### bubble

是否在浮动菜单显示，默认值：`false`

```js
Color.configure({
  bubble: true
})
```

### colorOptions

颜色列表

```js
Color.configure({
  colorOptions: [
    ['#000', '#111', '#222', '#333', '#444']  // 第一排颜色
    ['#555', '#666', '#777', '#888', '#999']  // 第二排颜色
    // ... 
  ]
})
```
