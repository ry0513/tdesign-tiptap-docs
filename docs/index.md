# 安装

## 安装

### npm

```sh
pnpm install tdesign-tiptap
```

## 使用

```vue
<template>
  <t-tiptap v-model="content" :extensions="extensions" />
</template>

<script lang="ts" setup>
// 导入组件与样式
import { TTiptap, EditorConfig, Bold, Italic, Strike, Underline } from "tdesign-tiptap";
import "tdesign-tiptap/lib/style.css";
const editor = new EditorConfig({
  content: `<p>tdesign-tiptap</p>`,
  extensions: [ Bold, Italic, Strike, Underline ],
});
</script>
```



