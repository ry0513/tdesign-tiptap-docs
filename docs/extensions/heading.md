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
  buttonExtensions: [Heading],
});
</script>
```
## 配置

#### HTMLAttributes

为渲染的标签添加自定义属性，默认值：`{}`

```js
Heading.configure({
  HTMLAttributes: {
    class: 'custom-class',
  },
})
```

### group

是否使用下拉，默认值：`true`

```js
Heading.configure({
  group: true
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

标题等级，默认值：['h1', 'h2', 'h3']

```js
Heading.configure({
  levels: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
})
```
