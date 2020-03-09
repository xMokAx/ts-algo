import { LinkedList } from "./LinkedList/LinkedList";
import { LLNode } from "./LinkedList/LinkedListNode";

export class Queue<T> {
  elements: LinkedList<T>;

  constructor(elements: T[] = []) {
    this.elements = new LinkedList<T>();
    if (elements.length) {
      for (let i = 0; i < elements.length; i++) {
        this.enqueue(elements[i]);
      }
    }
  }

  enqueue(element: T) {
    this.elements.append(element);
    return this.elements.size();
  }

  dequeue() {
    return this.elements.removeFirst();
  }

  first() {
    if (this.elements.size()) {
      return this.elements.getHead()!.getElement();
    }
    return undefined;
  }

  isEmpty() {
    return this.elements.size() === 0;
  }

  size() {
    return this.elements.size();
  }

  print() {
    console.log(this.elements.toString());
  }
}

class QueueElement<T> {
  element: T;

  priority: number;

  constructor(element: T, priority = 1) {
    this.element = element;
    this.priority = priority;
  }
}

export class PriorityQueue<T> extends Queue<QueueElement<T>> {
  constructor(elements: QueueElement<T>[] = []) {
    super(elements);
  }

  enqueue({ element, priority }: QueueElement<T>) {
    const queueElement = new QueueElement(element, priority);
    let current: LLNode<QueueElement<T>> = this.elements.getHead()!;
    for (let i = 0; i < this.elements.size(); i++) {
      if (priority < current.getElement().priority) {
        this.elements.insert(i, queueElement);

        return this.size();
      }
      current = current.getNext()!;
    }
    return super.enqueue(queueElement);
  }

  print() {
    console.log(this.elements.print());
  }
}
