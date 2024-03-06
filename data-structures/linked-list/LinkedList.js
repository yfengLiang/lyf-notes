import LinkedListNode from './LinkedListNode';
import Comparator from '../../utils/comparator/Comparator';

// 创建链表函数
export default class LinkedList {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {
    /** @var LinkedListNode */
    this.head = null;//头结点指针

    /** @var LinkedListNode */
    this.tail = null;//尾结点指针

    this.compare = new Comparator(comparatorFunction);
  }

  /**
   * 将数据（value）插入头部
   * @param {*} value
   * @return {LinkedList}
   */
  prepend(value) {
    // Make new node to be a head.
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    // 判断链表尾节点是否存在。如果该链表还没有尾节点（即链表是空的），那么新的节点同时也变成尾节点。
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {
    const newNode = new LinkedListNode(value);

    // 第三行检查链表是否为空。如果链表为空（即无头结点），则将头结点和尾节点指针都指向新节点。
    // 因为这是链表中唯一的节点，所以头结点和尾节点都指向它。
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // 尾节点的next确实是指向null，但这里是尾插法 所以应该将链表尾节点的next指向新添加的节点，并更新尾结点尾新节点（newNode在创建时它的next属性默认尾null）
    this.tail.next = newNode;
    this.tail = newNode;
    // 最后一行返回链表本身，允许我们进行链式操作。
    return this;
  }

  /**
   * 将数据（value）插入到指定位置（rawIndex下标所在位置）
   * @param {*} value
   * @param {number} index
   * @return {LinkedList}
   */
  insert(value, rawIndex) {
    const index = rawIndex < 0 ? 0 : rawIndex;
    if (index === 0) {
      this.prepend(value);
    } else {
      // count 将用于跟踪当前遍历链表的位置
      let count = 1;
      // 将currentNode指向链表头节点
      let currentNode = this.head;
      // 创建新节点并为其分配内存
      const newNode = new LinkedListNode(value);
      // 当 currentNode 为空，说明遍历到了链表的末尾。先检查count 是否=index。若等于index ，则 break 语句会结束循环,因为它找到了要插入新节点的位置
      while (currentNode) {
        if (count === index) break;
        // 如果 count不等于index，就表明指向到插入的地方之后了，所以让currentNode指向插入的节点的下一个节点。
        currentNode = currentNode.next;
        count += 1;
      }
      // 检查找到的插入索引处节点是否存在,若存在则将新节点插入到该节点后面。
      if (currentNode) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      } else {
        if (this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
        } else {
          this.head = newNode;
          this.tail = newNode;
        }
      }
    }
    return this;
  }

  /**
   * @param {*} value
   * @return {LinkedListNode}
   */
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    // If the head must be deleted then make next node that is different
    // from the head to be a new head.
    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    // 让它指向当前链表的头节点，用来遍历链表的所有节点
    let currentNode = this.head;

    if (currentNode !== null) {
      // 当链表非空检查下一节点是否等于value，如果等于就要删除该节点然后让currentNode.next只想需要删除节点的下一节点
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // Check if tail must be deleted.
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} [findParams.callback]
   * @return {LinkedListNode}
   */
  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      // If callback is specified then try to find node by callback.
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      // If value is specified then try to compare by value..
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * @return {LinkedListNode}
   */
  deleteTail() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      // There is only one node in linked list.
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    // If there are many nodes in linked list...

    // Rewind to the last node and delete "next" link for the node before the last one.
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  /**
   * @return {LinkedListNode}
   */
  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  /**
   * @param {*[]} values - Array of values that need to be converted to linked list.
   * @return {LinkedList}
   */
  fromArray(values) {
    // append 是链表类的一个方法，用于在链表的末尾添加一个新节点。
    values.forEach((value) => this.append(value));

    return this;
  }

  /**
   * @return {LinkedListNode[]}
   */
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  /**
   * 处理链表时将链表节点转换成字符串
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    // toArray()是将链表转换为数组，map遍历数组中的每个元素，并对每个元素执行指定函数。
    // 在这里遍历了由toArray()产生的数组，并在每个节点上调用toString()
    // node.toString(callback))的toString是节点对象的一个方法，将节点转化为字符串，他可以接受一个callback函数作为参数来自定义转化的格式
    // toString()是js的数组方法。在这里他可以把由map产生的字符串数组合并成一个字符串
    return this.toArray().map((node) => node.toString(callback)).toString();
  }

  /**
   * 反转链表。
   * @returns {LinkedList}
   */
  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      // nextNode这样就是当前节点的下个节点的值
      nextNode = currNode.next;
      // 更改当前节点的下一个节点，使其链接到上一个节点。
      currNode.next = prevNode;

      //将prevNode和currNode节点向前移动一步。
      prevNode = currNode;
      currNode = nextNode;
    }

    // Reset head and tail.
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}
