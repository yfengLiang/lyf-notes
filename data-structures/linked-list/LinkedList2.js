import LinkedListNode2 from './LinkedListNode2';
import Comparator from '../../utils/comparator/Comparator';

export default class LinkedList2{
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {
    /** @var LinkedListNode */
    this.head = null;

    /** @var LinkedListNode */
    this.tail = null;

    this.compare = new Comparator(comparatorFunction);
  }
  prepend(val){
    const newNode=new LinkedListNode2(val,this.head);
    this.head=newNode
    if(!this.tail){
      this.tail=this.head
    }
    return this
  }
  append(val){
    const newNode=new LinkedListNode2(val);
    if(!this.head){
      this.head=newNode;
      this.tail=newNode;
    }
    this.tail.next=newNode;
    this.tail=newNode;
    return this
  }
  insert(val,rawIndex){
    //插头 插尾 没有对应索引也插尾 有索引插到索引位置
    const index=rawIndex<0?0:rawIndex;
    if(index===0){
      this.prepend(val);
    }else{
      let count=1;
      let currentNode=this.head
      const newNode=new LinkedListNode2(val)
      while(currentNode){
        if(count===index){
          break
        }
        count++;
        currentNode=currentNode.next
      }
      if(currentNode){
        newNode.next=currentNode.next;
        currentNode.next=newNode;
      }else{
        if(this.tail){
          this.tail=newNode;
          this.tail.next=newNode;
        }else{
          this.head=newNode;
          this.tail=newNode;
        }
      }
    }
    return this
  }
  delete(val) {
    if (!this.head) {
      return null;
    }
  
    let deletedNode = null;
  
    // 删除头部等于目标值的节点
    while (this.head && this.compare.equal(this.head.val, val)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }
  
    let currentNode = this.head;
  
    // 删除链表中间等于目标值的节点
    if (currentNode) {
      while (currentNode.next) {
        if(this.compare.equal(currentNode.next.val, val)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
          // 检查删除的节点是不是尾节点
          if(currentNode.next === this.tail && this.compare.equal(this.tail.val, val)) {
            this.tail = currentNode;
          }
        } else {
          currentNode = currentNode.next;
        }
      }
    }
  
    return deletedNode;
  }
  toArray(){
    const nodes=[]
    let currentNode=this.head
    while(currentNode){
      nodes.push(currentNode)
      currentNode=currentNode.next
    }
    return nodes
  }
  // 先将链表转化为数组，再将数组转换为字符串
  toString(callback){
    return this.toArray().map((node)=>node.toString(callback)).toString()
  }
}