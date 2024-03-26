# 高亮色

使用此扩展添加 `background-color` 属性

## 使用

``` vue
<template>
  <TTiptap :editor="editor" />
</template>

<script setup>
import { TTiptap, EditorConfig, Highlight } from "tdesign-tiptap";
const editor = new EditorConfig({
  content: "<p>Tdesign-tiptap</p>",
  extensions: [Highlight],
});
</script>
```
## 配置

#### HTMLAttributes

为渲染的标签添加自定义属性，默认值：`{}`

```js
Highlight.configure({
  HTMLAttributes: {
    class: 'my-custom-class',
  },
})
```

#### bar

是否在菜单栏显示，默认值：`true`

```js
Highlight.configure({
  bar: true
})
```

#### bubble

是否在浮动菜单显示，默认值：`false`

```js
Highlight.configure({
  bubble: true
})
```

### colorOptions

颜色列表

```js
Highlight.configure({
  colorOptions: [
    ['#000', '#111', '#222', '#333', '#444']  // 第一排颜色
    ['#555', '#666', '#777', '#888', '#999']  // 第二排颜色
    // ... 
  ]
})
```
