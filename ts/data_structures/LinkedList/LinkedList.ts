import { LLNode } from "./LinkedListNode";

export class LinkedList<T> {
  private head: null | LLNode<T>;
  private tail: null | LLNode<T>;
  private length: number;
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  prepend(element: T) {
    const node = new LLNode(element);
    node.next = this.head;
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
    this.length++;
  }
  removeFirst() {
    if (this.length) {
      let removedElement: T;
      if (this.length === 1) {
        removedElement = this.head!.element;
        this.head = null;
        this.tail = null;
      } else {
        removedElement = this.head!.element;
        this.head = this.head!.next;
      }
      this.length--;
      return removedElement;
    }
    return null;
  }
  append(element: T) {
    const node = new LLNode(element);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.length++;
  }
  insert(position: number, element: T) {
    if (position >= 0 && position <= this.length) {
      const node = new LLNode(element);
      let current = this.head;
      let prev: LLNode<T> | null;
      if (position === 0) {
        node.next = current;
        this.head = node;
      } else if (position === this.length) {
        this.tail!.next = node;
        this.tail = node;
      } else {
        for (let i = 0; i < position; i++) {
          prev = current;
          current = current!.next;
        }
        prev!.next = node;
        node.next = current;
      }
      this.length++;
      return true;
    }
    return false;
  }
  removeAt(position: number) {
    if (position >= 0 && position < this.length) {
      let current = this.head;
      let prev: LLNode<T>;
      if (position === 0) {
        this.head = current!.next;
      } else {
        for (let i = 0; i < position; i++) {
          prev = current!;
          current = current!.next;
        }
        prev!.next = current!.next;
      }
      this.length--;
      return current!.element;
    }
    return null;
  }
  remove(element: T) {
    const position = this.indexOf(element);
    return this.removeAt(position);
  }
  indexOf(element: T) {
    let index = 0;
    let current = this.head;

    while (current) {
      if (element === current.element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
  isEmpty() {
    return this.length === 0;
  }
  size() {
    return this.length;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
  toString() {
    let current = this.head;
    let string = "";
    while (current) {
      const stringToAdd =
        typeof current.element !== "object"
          ? current.element
          : JSON.stringify(current.element);
      string += `${stringToAdd}${current.next ? ", " : ""}`;
      current = current.next;
    }
    return string;
  }
  print() {
    console.log(this.toString());
  }
}
