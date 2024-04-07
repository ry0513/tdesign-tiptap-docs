# 文本对齐方式

使用此扩展添加 `text-align` 属性

## 使用

``` vue
<template>
  <TTiptap :editor="editor" />
</template>

<script setup>
import { TTiptap, EditorConfig, TextAlign } from "tdesign-tiptap";
const editor = new EditorConfig({
  content: "<p>Tdesign-tiptap</p>",
  buttonExtensions: [TextAlign],
});
</script>
```
## 配置

#### bar

是否在菜单栏显示，默认值：`true`

```js
TextAlign.configure({
  bar: true
})
```

#### bubble

是否在浮动菜单显示，默认值：`false`

```js
TextAlign.configure({
  bubble: true
})
```

### alignments

对齐方式，默认值：`["left", "center", "right", "justify"]`

```js
TextAlign.configure({
  alignments: ["left", "right"]
})
```

### defaultAlignment

对齐方式，默认值：`left`

```js
TextAlign.configure({
  defaultAlignment: "left"
})
```
