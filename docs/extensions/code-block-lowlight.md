# 代码块

使用此扩展添加 `pre` 标签

::: tip
关于渲染出的代码是没样式的，原因请看 [issues](https://github.com/ueberdosis/tiptap/issues/2371) 
:::


## 使用

``` vue
<template>
  <TTiptap :editor="editor" />
</template>

<script setup>
import { TTiptap, EditorConfig, CodeBlockLowlight } from "tdesign-tiptap";
const editor = new EditorConfig({
  content: "<p>Tdesign-tiptap</p>",
  extensions: [CodeBlockLowlight],
});
</script>
```
## 配置

#### HTMLAttributes

为渲染的标签添加自定义属性，默认值：`{}`

```js
CodeBlockLowlight.configure({
  HTMLAttributes: {
    class: 'custom-class',
  },
})
```

#### bar

是否在菜单栏显示，默认值：`true`

```js
CodeBlockLowlight.configure({
  bar: true
})
```

#### bubble

是否在浮动菜单显示，默认值：`false`

```js
CodeBlockLowlight.configure({
  bubble: true
})
```

#### lowlight

高亮代码，默认使用 lowlight

```js
CodeBlockLowlight.configure({
  lowlight: lowlight
})
```
#### languages

语言列表，默认：`["plaintext", "javascript", "java"]`

```js
CodeBlockLowlight.configure({
  languages:["js","ts"]
})
```

#### languageClassPrefix

代码语言前缀，默认值：`language-`

```js
CodeBlockLowlight.configure({
  languageClassPrefix: "language-"
})
```

#### defaultLanguage

默认的代码语言，默认值：`plaintext`

```js
CodeBlockLowlight.configure({
  defaultLanguage: "plaintext"
})
```

