# 删除线

使用此扩展添加 `s` 标签

## 使用

``` vue
<template>
  <TTiptap :editor="editor" />
</template>

<script setup>
import { TTiptap, EditorConfig, Strike } from "tdesign-tiptap";
const editor = new EditorConfig({
  content: "<p>Tdesign-tiptap</p>",
  extensions: [Strike],
});
</script>
```

## 配置

#### HTMLAttributes

为渲染的标签添加自定义属性，默认值：`{}`

```js
Strike.configure({
  HTMLAttributes: {
    class: 'my-custom-class',
  },
})
```

#### bar

是否在菜单栏显示，默认值：`true`

```js
Strike.configure({
  bar: true
})
```

#### bubble

是否在浮动菜单显示，默认值：`false`

```js
Strike.configure({
  bubble: true
})
```