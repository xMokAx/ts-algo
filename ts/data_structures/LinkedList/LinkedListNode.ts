export class LLNode<T> {
  private element: T;

  private next: null | LLNode<T>;

  constructor(element: T) {
    this.element = element;
    this.next = null;
  }

  setElement(element: T) {
    this.element = element;
  }

  getElement() {
    return this.element;
  }

  setNext(next: null | LLNode<T>) {
    this.next = next;
  }

  getNext() {
    return this.next;
  }
}
