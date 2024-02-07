JS 参考文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript

encodeURIComponent() 和 encodeURI() 都是 JavaScript 中用于编码 URI 的函数，但它们在处理方式和应用场景上有重要区别

## encodeURI()

> 这个函数用于编码整个统一资源标识符（URI），例如一个完整的 URL。

编码范围：它会转义除以下保留字符之外的所有特殊字符：; / ? : @ & = + $ , #

应用场景：当你需要对整个 URL 进行轻量级编码，并且不希望影响到 URL 的结构时使用。

语法：`encodeURI(URI)`

## encodeURIComponent()：

> 此函数更为严格，用于编码 URI 的某个组件或参数值，比如查询字符串的键值对。

编码范围：它会转义所有非字母数字字符（除了 - \_ . ! ~ \* ' ( )），包括上面列出的 encodeURI() 不会转义的保留字符。

应用场景：当需要确保字符串可以作为 URL 查询字符串的一部分，或者作为路径段中的一部分而不会引起解析问题时使用。比如，在构建 AJAX 请求的查询参数、表单数据序列化或设置 cookie 时经常使用此函数。
总结来说，如果你正在编码的是 URI 的独立部分，特别是那些将被放置在查询字符串内部的变量值，应当优先选择 encodeURIComponent() 来确保所有可能引起问题的字符都被正确编码。而如果要编码整个 URL 而不破坏其结构，则应使用 encodeURI()。

> 使用方法：

```ts
export const queryList = async (desc: string) => {
  return await requestApi<IDictionaryList>(
    `/sys/dict/all?description=${encodeURIComponent(desc)}`,
    {
      method: "POST",
    }
  );
};
```
