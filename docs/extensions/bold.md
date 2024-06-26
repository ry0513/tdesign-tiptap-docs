# 粗体

使用此扩展添加 `strong` 标签

## 使用

``` vue
<template>
  <TTiptap :editor="editor" />
</template>

<script setup>
import { TTiptap, EditorConfig, Bold } from "tdesign-tiptap";
const editor = new EditorConfig({
  content: "<p>Tdesign-tiptap</p>",
  buttonExtensions: [Bold],
});
</script>
```

## 配置

#### HTMLAttributes

为渲染的标签添加自定义属性，默认值：`{}`

```js
Bold.configure({
  HTMLAttributes: {
    class: 'custom-class',
  },
})
```

#### bar

是否在菜单栏显示，默认值：`true`

```js
Bold.configure({
  bar: true
})
```

#### bubble

是否在浮动菜单显示，默认值：`false`

```js
Bold.configure({
  bubble: true
})
```