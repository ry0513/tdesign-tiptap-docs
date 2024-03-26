# 自定义样式

使用 [getHTML](/api.html#gethtml) 获取的HTML代码是无样式的，可以自行编写样式

::: tip
代码块高亮使用了 [lowlight](https://github.com/wooorm/lowlight)，获取的仍为纯代码，高亮样式需自行处理，原因 [issues](https://github.com/ueberdosis/tiptap/issues/2371) 
::: 

```scss
// 编辑器中所使用的样式
.ProseMirror {
  line-height: 1.625;
  & > * {
    margin: var(--t-tiptap-margin, 10px) 0;
  }
  hr {
    margin: var(--t-tiptap-margin, 10px) 0;
  }
  blockquote {
    border-left: 8px solid #f5ba18;
    background-color: var(--td-gray-color-3, #e8e8e8);
    padding: 16px;
    & > p {
      margin: 0;
    }
  }
  hr {
    background-color: var(--td-gray-color-4, #ddd);
    height: 1px;
    border: none;
  }
  :not(pre) > code {
    font-size: 0.875em;
    background-color: var(--td-gray-color-4, #ddd);
    border-radius: 3px;
    padding: 3px 5px;
    margin: 0 3px;
  }
  ul,
  ol {
    margin-block-start: var(--t-tiptap-margin, 10px);
    margin-block-end: var(--t-tiptap-margin, 10px);
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 30px;
  }
}

```