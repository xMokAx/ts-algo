export class LLNode<T> {
  element: T;
  next: null | LLNode<T> = null;

  constructor(element: T) {
    this.element = element;
  }
}
