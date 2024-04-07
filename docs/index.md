# 快速开始

## 安装

### npm

```sh
pnpm install tdesign-tiptap
```

## 使用

```vue
<template>
  <t-tiptap :editor="editor" />
</template>

<script lang="ts" setup>
import { onBeforeUnmount } from "vue";
import {
  TTiptap,
  EditorConfig,
  TextStyle,
  ListItem,
  Bold,
  Italic,
  Strike,
  Underline,
  Blockquote,
} from "tdesign-tiptap";
import "tdesign-tiptap/lib/style.css";

const editor = new EditorConfig({
  content: `<p>tdesign-tiptap</p>`,
  baseExtensions: [TextStyle, ListItem],
  buttonExtensions: [Bold, Italic, Strike, Underline, Blockquote],
});

onBeforeUnmount(() => {
  editor.destroy();
})
</script>
```



