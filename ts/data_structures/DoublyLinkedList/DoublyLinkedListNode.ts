export class DLLNode<T> {
  element: T;
  prev: null | DLLNode<T> = null;
  next: null | DLLNode<T> = null;
  constructor(element: T) {
    this.element = element;
  }
}
