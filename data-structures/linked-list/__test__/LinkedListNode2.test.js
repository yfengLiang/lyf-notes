import { describe, expect, test } from "vitest";
import LinkedListNode2 from "../LinkedListNode2";

describe("LinkedListNode2",()=>{
  test("constructor",()=>{
    const node=new LinkedListNode2(1);
    console.log(node);
    expect(node.val).toBe(1);
    const node2=new LinkedListNode2(2,node);
    expect(node2.val).toBe(2)
    expect(node2.next).toBe(node)
    expect(node2.next.val).toBe(1);
  })
  test("toString",()=>{
    const node = new LinkedListNode2(2);
    expect(node.toString()).toBe('2')
    expect(node.toString((a)=>{
      return 'LinkedListNode2:'+a
    })).toBe('LinkedListNode2:2')
  })
})