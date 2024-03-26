# 有序列表

使用此扩展添加 `ol` 标签

## 使用

``` vue
<template>
  <TTiptap :editor="editor" />
</template>

<script setup>
import { TTiptap, EditorConfig, OrderedList } from "tdesign-tiptap";
const editor = new EditorConfig({
  content: "<p>Tdesign-tiptap</p>",
  extensions: [OrderedList],
});
</script>
```

## 配置

#### HTMLAttributes

为渲染的标签添加自定义属性，默认值：`{}`

```js
OrderedList.configure({
  HTMLAttributes: {
    class: 'my-custom-class',
  },
})
```

#### bar

是否在菜单栏显示，默认值：`true`

```js
OrderedList.configure({
  bar: true
})
```

#### bubble

是否在浮动菜单显示，默认值：`false`

```js
OrderedList.configure({
  bubble: true
})
```