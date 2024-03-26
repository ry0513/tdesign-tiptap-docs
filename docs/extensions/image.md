# 图片

使用此扩展添加 `img` 标签

## 使用

``` vue
<template>
  <TTiptap :editor="editor" />
</template>

<script setup>
import { TTiptap, EditorConfig, Image } from "tdesign-tiptap";
const editor = new EditorConfig({
  content: "<p>Tdesign-tiptap</p>",
  extensions: [Image],
});
</script>
```
## 配置

#### HTMLAttributes

为渲染的标签添加自定义属性，默认值：`{}`

```js
Image.configure({
  HTMLAttributes: {
    class: 'my-custom-class',
  },
})
```

#### bar

是否在菜单栏显示，默认值：`true`

```js
Image.configure({
  bar: true
})
```

#### bubble

是否在浮动菜单显示，默认值：`false`

```js
Image.configure({
  bubble: true
})
```

### types

下拉框选项，默认值：`["network", "upload"]`

```js
Image.configure({
  types:["network", "upload"] // network 网络图片, upload 上传图片
})
```

### sizeOption

悬浮菜单中显示的尺寸，默认值：`{ small: "25%", middle: "50%", big: "100%" } `

```js
Image.configure({
  sizeOption: { small: "30%", middle: "50%", big: "100%" } 
})
```

### customUpload

自定义上传，默认转为`base64`

```js
Image.configure({
    customUpload: (file, insertFn)=>{
    // ... 上传流程
    insertFn({ url: 'xxx', alt: 'xxx' });
  }
})
```


