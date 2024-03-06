import { describe,test,expect } from "vitest";
import LinkedList2 from "../LinkedList2";

describe("LinkedList2", () => {
  test("prepend", () => {
    const list=new LinkedList2();
    list.prepend(4)
    expect(list.head.val).toBe(4);
    expect(list.tail.val).toBe(4);
  });
  test("append", () => {
    const list=new LinkedList2();
    list.append(1)
    list.append(2)
    expect(list.head.val).toBe(1);
    expect(list.tail.val).toBe(2);
  });
  test("insert",()=>{
    const list= new LinkedList2();
    list.append(1)
    list.append(2)
    list.insert(8,1)
    console.log(list.toString());
    expect(list.toString()).toBe('1,8,2')
    list.insert(9,0)
    expect(list.toString()).toBe('9,1,8,2')
  })
  test("delete",()=>{
    const list =new LinkedList2();
    list.append(9)
    list.append(8)
    list.delete(8)
    expect(list.toString()).toBe('9')
  })
  test("deleteTail",()=>{
    const list =new LinkedList2();
    list.append(9)
    list.append(8)
    list.append(7)
    list.deleteTail()
    expect(list.toString()).toBe('9,8')
  })
  test("deleteHead",()=>{
    const list =new LinkedList2();
    list.append(9)
    list.append(8)
    list.append(7)
    list.deleteHead()
    expect(list.toString()).toBe('8,7')
  })
  test("find",()=>{
    const list =new LinkedList2();
    list.append(9)
    list.append(8)
    const findNode=list.find({value:9})
    const findNode2=list.find({callback:(a)=>{
      return a>8
    }})
    expect(findNode.toString()).toBe('9')
    expect(findNode2.toString()).toBe('9')
  })
  test("fromArray",()=>{
    const list =new LinkedList2();
    list.append(9)
    list.append(8)
    list.append(7)
    list.fromArray([1,2])
    expect(list.toString()).toBe('9,8,7,1,2')
  })
  test("toArray",()=>{
    const list =new LinkedList2();
    list.append(9)
    list.append(8)
    list.append(7)
    list.toArray()
    expect(list.toString()).toBe('9,8,7')
  })
  test("toString",()=>{
    const list =new LinkedList2();
    list.append(9)
    list.append(8)
    list.append(7)
    // expect(list.toString()).toBe('9,8,7')
    expect(list.toString((a)=>{
      return a
    })).toBe('9,8,7')
  })
  test("reverse",()=>{
    const list =new LinkedList2();
    list.append(9)
    list.append(8)
    list.append(7)
    list.reverse()
    expect(list.toString()).toBe('7,8,9')
  })
});