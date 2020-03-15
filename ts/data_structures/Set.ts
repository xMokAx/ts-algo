const inspect = Symbol.for("nodejs.util.inspect.custom");

export class MySet<T> {
  private items: T[] = [];
  constructor(items: Iterable<T> = []) {
    for (const i of items) {
      this.add(i);
    }
  }

  add(value: T) {
    if (!this.has(value)) {
      this.items.push(value);
      return true;
    } else {
      return false;
    }
  }
  delete(value: T) {
    if (this.has(value)) {
      this.items = this.items.filter(v => v !== value);
      return true;
    } else {
      return false;
    }
  }
  has(value: T) {
    return this.items.includes(value);
  }
  clear() {
    this.items = [];
  }
  size() {
    return this.items.length;
  }
  values() {
    return this[Symbol.iterator]();
  }
  keys = this.values;
  union(otherSet: MySet<T>) {
    const uSet = new MySet(this.items.concat(otherSet.items));
    return uSet;
  }
  intersection(otherSet: MySet<T>) {
    const iSet = new MySet();
    this.items.forEach(v => {
      if (otherSet.has(v)) {
        iSet.add(v);
      }
    });
    return iSet;
  }
  difference(otherSet: MySet<T>) {
    const dSet = new MySet();
    this.items.forEach(v => {
      if (!otherSet.has(v)) {
        dSet.add(v);
      }
    });
    return dSet;
  }
  subset(otherSet: MySet<T>) {
    for (const v of this.items) {
      if (!otherSet.has(v)) {
        return false;
      }
    }
    return true;
  }
  [inspect]() {
    return this.print();
  }
  toString() {
    return "[object MySet]";
  }
  print() {
    if (this.items.length) {
      return console.log("MySet {", this.items, "}");
    } else {
      return console.log("MySet {}");
    }
  }
  [Symbol.iterator]() {
    let pointer = 0;
    const items = this.items;
    return {
      next(): IteratorResult<T> {
        if (pointer < items.length) {
          return {
            done: false,
            value: items[pointer++]
          };
        } else {
          return {
            done: true,
            value: null
          };
        }
      }
    };
  }
}
