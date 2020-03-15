const inspect = Symbol.for("nodejs.util.inspect.custom");

export class Dictionary<T, U> {
  private keysList: T[] = [];
  private valuesList: U[] = [];
  constructor(items: Iterable<[T, U]> = []) {
    for (const [k, v] of items) {
      this.set(k, v);
    }
  }
  set(key: T, value: U) {
    if (!this.has(key)) {
      this.keysList.push(key);
      this.valuesList.push(value);
    } else {
      this.valuesList[this.keysList.indexOf(key)] = value;
    }
  }
  delete(key: T) {
    const index = this.keysList.indexOf(key);
    if (index === -1) {
      return false;
    } else {
      this.keysList.splice(index, 1);
      this.valuesList.splice(index, 1);
      return true;
    }
  }
  has(key: T) {
    return this.keysList.includes(key);
  }
  get(key: T) {
    const index = this.keysList.indexOf(key);
    if (index === -1) {
      return undefined;
    } else {
      return this.valuesList[index];
    }
  }
  clear() {
    this.keysList = [];
    this.valuesList = [];
  }
  size() {
    return this.keysList.length;
  }
  keys() {
    return this.keysList[Symbol.iterator]();
  }
  values() {
    return this.valuesList[Symbol.iterator]();
  }
  [inspect]() {
    return this.print();
  }
  print() {
    if (this.keysList.length) {
      const dic = [];
      for (let i = 0; i < this.keysList.length; i++) {
        dic[i] = [this.keysList[i], this.valuesList[i]];
      }

      return console.log("Dic {", dic, "}");
    } else {
      return console.log("Dic {}");
    }
  }
  [Symbol.iterator]() {
    let pointer = 0;
    const keysList = this.keysList;
    const valuesList = this.valuesList;
    return {
      next(): IteratorResult<[T, U]> {
        if (pointer < keysList.length) {
          return {
            done: false,
            value: [keysList[pointer], valuesList[pointer++]]
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
