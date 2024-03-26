import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "tdesign-tiptap",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "使用",
        items: [
          { text: "安装", link: "/" },
          { text: "自定义样式", link: "/style" },
          { text: "编辑器 API", link: "/api" },
        ],
      },

      {
        text: "扩展",
        items: [
          { text: "Blockquote", link: "/extensions/blockquote" },
          { text: "Bold", link: "/extensions/bold" },
          { text: "BulletList", link: "/extensions/bullet-list" },
          {
            text: "CodeBlockLowlight",
            link: "/extensions/code-block-lowlight",
          },
          { text: "Code", link: "/extensions/code" },
          { text: "Color", link: "/extensions/color" },
          { text: "Heading", link: "/extensions/heading" },
          { text: "Highlight", link: "/extensions/highlight" },
          { text: "HorizontalRule", link: "/extensions/horizontal-rule" },
          { text: "Image", link: "/extensions/image" },
          { text: "Italic", link: "/extensions/italic" },
          { text: "Link", link: "/extensions/link" },
          { text: "OrderedList", link: "/extensions/ordered-list" },
          { text: "Strike", link: "/extensions/strike" },
          { text: "TextAlign", link: "/extensions/text-align" },
          { text: "Underline", link: "/extensions/underline" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/ry0513/tdesign-tiptap" },
    ],

    docFooter: { prev: "上一篇", next: "下一篇" },
  },
});
