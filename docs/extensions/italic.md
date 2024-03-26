# 斜体

使用此扩展添加 `em` 标签

## 使用

``` vue
<template>
  <TTiptap :editor="editor" />
</template>

<script setup>
import { TTiptap, EditorConfig, Italic } from "tdesign-tiptap";
const editor = new EditorConfig({
  content: "<p>Tdesign-tiptap</p>",
  extensions: [Italic],
});
</script>
```
## 配置

#### HTMLAttributes

为渲染的标签添加自定义属性，默认值：`{}`

```js
Italic.configure({
  HTMLAttributes: {
    class: 'my-custom-class',
  },
})
```

#### bar

是否在菜单栏显示，默认值：`true`

```js
Italic.configure({
  bar: true
})
```

#### bubble

是否在浮动菜单显示，默认值：`false`

```js
Italic.configure({
  bubble: true
})
```
