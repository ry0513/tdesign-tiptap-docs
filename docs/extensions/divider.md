# 菜单栏分隔符

使用此扩展分割菜单，可多次引入

## 使用

``` vue
<template>
  <TTiptap :editor="editor" />
</template>

<script setup>
import { TTiptap, EditorConfig, Divider } from "tdesign-tiptap";
const editor = new EditorConfig({
  content: "<p>Tdesign-tiptap</p>",
  buttonExtensions: [Divider],
});
</script>
```

## 配置

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