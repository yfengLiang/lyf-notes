import { describe, expect, test } from "vitest";
import LinkedListNode from "../LinkedListNode";

describe("LinkedListNode",()=>{
  test("constructor",()=>{
    const node=new LinkedListNode(1);
    expect(node.value).toBe(1);
    const node2=new LinkedListNode(2,node);
    expect(node2.value).toBe(2)
    expect(node2.next).toBe(node)
    expect(node2.next.value
      ).toBe(1);
  })
  test("toString",()=>{
    const node = new LinkedListNode(2);
    expect(node.toString()).toBe('2')
    expect(node.toString((a)=>{
      return 'LinkedListNode:'+a
    })).toBe('LinkedListNode:2')
  })
})