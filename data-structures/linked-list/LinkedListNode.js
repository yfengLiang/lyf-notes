export default class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  /**
   * 将数据转化为字符串形式。
   * 下面的参数内的 [] 是用来表示该参数是可选的，即调用这个函数时可以不提供该参数。对于没有方括号的参数，它们是必需的，调用函数时必须提供。
   * @param {Function} [callback]
   * @returns 返回一个字符串，如果提供了 callback 函数，返回结果是 callback 函数执行的结果；否则，返回节点的值 this.value 转化为字符串的结果。
   */
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
