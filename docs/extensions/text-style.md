# 文本样式

此扩展为基础扩展，作为某些扩展依赖使用

## 使用

``` vue
<template>
  <TTiptap :editor="editor" />
</template>

<script setup>
import { TTiptap, EditorConfig, TextStyle } from "tdesign-tiptap";
const editor = new EditorConfig({
  content: "<p>Tdesign-tiptap</p>",
  baseExtensions: [TextStyle],
});
</script>
```
