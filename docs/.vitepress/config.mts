import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "tdesign-tiptap v0.4.0",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页 ", link: "/" },
      { text: "更新日志", link: "/change-log" },
      { text: "例子", link: "https://demo.tnloy.cc/tdesign-tiptap/" },
    ],

    sidebar: [
      {
        text: "开始",
        items: [
          { text: "快速开始", link: "/" },
          { text: "配置列表", link: "/option" },
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
          { text: "Divider", link: "/extensions/divider" },
          { text: "Heading", link: "/extensions/heading" },
          { text: "Highlight", link: "/extensions/highlight" },
          { text: "HorizontalRule", link: "/extensions/horizontal-rule" },
          { text: "Image", link: "/extensions/image" },
          { text: "Italic", link: "/extensions/italic" },
          { text: "Link", link: "/extensions/link" },
          { text: "ListItem", link: "/extensions/list-item" },
          { text: "OrderedList", link: "/extensions/ordered-list" },
          { text: "Strike", link: "/extensions/strike" },
          { text: "TextAlign", link: "/extensions/text-align" },
          { text: "TextStyle", link: "/extensions/text-style" },
          { text: "Underline", link: "/extensions/underline" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/ry0513/tdesign-tiptap" },
    ],

    docFooter: { prev: "上一篇", next: "下一篇" },
    outline: false,
    returnToTopLabel: "回到顶部",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});
