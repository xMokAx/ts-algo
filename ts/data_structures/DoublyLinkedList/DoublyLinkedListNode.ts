export class DLLNode<T> {
  private element: T;
  private prev: null | DLLNode<T>;
  private next: null | DLLNode<T>;
  constructor(element: T) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }

  setElement(element: T) {
    this.element = element;
  }
  getElement() {
    return this.element;
  }
  setNext(next: null | DLLNode<T>) {
    this.next = next;
  }
  getNext() {
    return this.next;
  }
  setPrev(prev: null | DLLNode<T>) {
    this.prev = prev;
  }
  getPrev() {
    return this.prev;
  }
}
