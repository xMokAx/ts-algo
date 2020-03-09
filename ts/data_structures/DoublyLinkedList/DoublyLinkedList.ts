import { DLLNode } from "./DoublyLinkedListNode";

export class DoublyLinkedList<T> {
  private head: null | DLLNode<T>;
  private tail: null | DLLNode<T>;
  private length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  private linkNode(node: DLLNode<T>, prev: DLLNode<T>, next: DLLNode<T>) {
    node.setNext(next);
    next.setPrev(node);
    node.setPrev(prev);
    prev.setNext(node);
  }
  private unlinkNode(prev: DLLNode<T>, next: DLLNode<T>) {
    prev.setNext(next);
    next.setPrev(prev);
  }

  append(element: T) {
    const node = new DLLNode(element);

    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.setNext(node);
      node.setPrev(this.tail);
      this.tail = node;
    }
    this.length++;
  }
  insert(position: number, element: T) {
    if (position >= 0 && position <= this.length) {
      const node = new DLLNode(element);
      const currentHead = this.head;
      const currentTail = this.tail;

      if (position === 0) {
        if (!currentHead) {
          this.tail = node;
        } else {
          node.setNext(currentHead);
          currentHead.setPrev(node);
        }
        this.head = node;
      } else if (position === this.length) {
        node.setPrev(currentTail);
        currentTail!.setNext(node);
        this.tail = node;
      } else {
        let current: DLLNode<T>;
        let prev: DLLNode<T>;
        let next: DLLNode<T>;
        if (position <= this.length / 2) {
          current = currentHead!;
          for (let i = 0; i < position; i++) {
            prev = current!;
            current = current!.getNext()!;
          }
          this.linkNode(node, prev!, current);
        } else {
          current = currentTail!;
          for (let i = this.length; i > position; i--) {
            next = current;
            current = current.getPrev()!;
          }
          this.linkNode(node, current, next!);
        }
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  }
  removeAt(position: number) {
    const currentHead = this.head;
    const currentTail = this.tail;
    if (position >= 0 && position < this.length) {
      let current: DLLNode<T>;
      if (position === 0) {
        current = currentHead!;
        this.head = current.getNext();
        if (this.head) {
          this.head.setPrev(null);
        } else {
          this.tail = null;
        }
      } else if (position === this.length - 1) {
        current = currentTail!;
        this.tail = current.getPrev();
        this.tail!.setNext(null);
      } else {
        let prev: DLLNode<T>;
        let next: DLLNode<T>;
        if (position <= this.length / 2) {
          current = currentHead!;
          for (let i = 0; i < position; i++) {
            prev = current;
            current = current.getNext()!;
          }
          this.unlinkNode(prev!, current.getNext()!);
        } else {
          current = currentTail!;
          for (let i = this.length - 1; i > position; i--) {
            next = current;
            current = current.getPrev()!;
          }
          this.unlinkNode(current.getPrev()!, next!);
        }
      }
      this.length--;
      return current.getElement();
    } else {
      return null;
    }
  }
  remove(element: T) {
    const position = this.indexOf(element);
    return this.removeAt(position);
  }
  indexOf(element: T) {
    let index = 0;
    let current = this.head;

    while (current) {
      if (element === current.getElement()) {
        return index;
      }
      current = current.getNext();
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
        typeof current.getElement() !== "object"
          ? current.getElement()
          : JSON.stringify(current.getElement());
      string += `${stringToAdd}${current.getNext() ? ", " : ""}`;
      current = current.getNext();
    }
    return string;
  }
  print() {
    console.log(this.toString());
  }
}
