export class Stack<T> {
  private items: T[];
  constructor(items: T[] = []) {
    this.items = items;
  }
  push(item: T) {
    return this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.size() - 1];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear(): T[] {
    return (this.items = []);
  }
}
