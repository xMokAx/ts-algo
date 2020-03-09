const inspect = Symbol.for("nodejs.util.inspect.custom");

interface SetItems<T> {
  [key: string]: T;
}

export class MySet<T> {
  private items: SetItems<T>;
  private length: number;
  constructor(items: T[] = []) {
    this.length = 0;
    this.items = {};
    if (items.length) {
      items.forEach(item => {
        this.add(item);
      });
    }
  }

  add(value: T) {
    if (!this.has(value)) {
      const key: string =
        typeof value === "object"
          ? JSON.stringify(value)
          : ((value as unknown) as string);
      this.items[key] = value;
      this.length++;
      return true;
    } else {
      return false;
    }
  }
  delete(value: T) {
    if (this.has(value)) {
      delete this.items[JSON.stringify(value)];
      this.length--;
      return value;
    } else {
      return false;
    }
  }
  has(value: T) {
    return !!this.items[JSON.stringify(value)];
  }
  clear() {
    this.length = 0;
    this.items = {};
  }
  size() {
    return this.length;
  }
  keys() {
    return Object.keys(this.items);
  }
  values() {
    return Object.values(this.items);
  }
  union(otherSet: MySet<T>) {
    const uSet = new MySet(this.values().concat(otherSet.values()));
    return uSet;
  }
  intersection(otherSet: MySet<T>) {
    const iSet = new MySet();
    this.values().forEach(v => {
      if (otherSet.has(v)) {
        iSet.add(v);
      }
    });
    return iSet;
  }
  difference(otherSet: MySet<T>) {
    const dSet = new MySet();
    this.values().forEach(v => {
      if (!otherSet.has(v)) {
        dSet.add(v);
      }
    });
    return dSet;
  }
  subset(otherSet: MySet<T>) {
    for (const v of this.values()) {
      if (!otherSet.has(v)) {
        return false;
      }
    }
    return true;
  }
  [inspect]() {
    return this.values();
  }
  toString() {
    return "[object MySet]";
  }
  print() {
    if (this.length) {
      return console.log("MySet {", this.values(), "}");
    } else {
      return console.log("MySet {}");
    }
  }
}
