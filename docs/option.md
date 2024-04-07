# 配置列表

## 配置

### content

类型  [Content](https://github.com/ueberdosis/tiptap/blob/main/packages/core/src/types.ts#L90)

初始内容，HTML或JSON
 
::: warning 注意
因 HTML 内容很灵活，无法兼容全部的 HTML 内容

仅保证兼容通过 [getHTML](/api.html#gethtml) 获取的内容 或 [getJSON](/api.html#getjson) 获取的内容
:::

### baseExtensions

类型 [Extensions](https://github.com/ueberdosis/tiptap/blob/main/packages/core/src/types.ts#L19)

基础性扩展

### buttonExtensions

类型 [Extensions](https://github.com/ueberdosis/tiptap/blob/main/packages/core/src/types.ts#L19)

功能性扩展

### onCreate

类型 (props: {editor: TEditor })=>void

创建编辑器完成事件

### onUpdate

类型 (props: {editor: TEditor })=>void

内容修改事件

### onDestroy

类型 ()=>void

销毁编辑器完成事件

### onFocus 

类型 (props: { editor: TEditor; event: FocusEvent }) => void

编辑器获得焦点事件

### onBlur 

类型 (props: { editor: TEditor; event: FocusEvent }) => void

编辑器失去焦点事件
