# 标题

使用此扩展添加 `h1` - `h6` 标签

## 使用

``` vue
<template>
  <TTiptap :editor="editor" />
</template>

<script setup>
import { TTiptap, EditorConfig, Heading } from "tdesign-tiptap";
const editor = new EditorConfig({
  content: "<p>Tdesign-tiptap</p>",
  extensions: [Heading],
});
</script>
```
## 配置

#### HTMLAttributes

为渲染的标签添加自定义属性，默认值：`{}`

```js
Heading.configure({
  HTMLAttributes: {
    class: 'my-custom-class',
  },
})
```

#### bar

是否在菜单栏显示，默认值：`true`

```js
Heading.configure({
  bar: true
})
```

#### bubble

是否在浮动菜单显示，默认值：`false`

```js
Heading.configure({
  bubble: true
})
```

### levels

标题等级，默认值：[1, 2, 3]

```js
Heading.configure({
  levels: [1, 2, 3, 4, 5, 6] // 即 h1-h6
})
```
