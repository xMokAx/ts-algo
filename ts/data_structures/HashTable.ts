import { LinkedList } from "./LinkedList/LinkedList";
const inspect = Symbol.for("nodejs.util.inspect.custom");

// Separate chaining to handle collisions using linked lists
export class HashTable<T> {
  private table: { [key: number]: LinkedList<{ key: string; value: T }> };
  private hashTableSize: number;
  constructor(hashTableSize = 137) {
    this.hashTableSize = hashTableSize;
    this.table = {};
  }

  // lose lose hashing
  private hashCode(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.hashTableSize;
  }
  put(key: string, value: T) {
    const position = this.hashCode(key);
    if (!this.table[position]) {
      this.table[position] = new LinkedList();
    }
    this.table[position].append({ key, value });
  }
  remove(key: string) {
    const position = this.hashCode(key);
    if (this.table[position]) {
      let current = this.table[position].getHead();
      let index = 0;
      if (current) {
        while (current.getNext()) {
          if (current.getElement().key === key) {
            this.table[position].removeAt(index);
            return true;
          }
          index++;
          current = current.getNext()!;
        }
        if (current.getElement().key === key) {
          this.table[position].removeAt(index);
          if (this.table[position].isEmpty()) {
            delete this.table[position];
          }
          return true;
        }
      }
    }
    return false;
  }
  get(key: string) {
    const position = this.hashCode(key);
    if (this.table[position]) {
      let current = this.table[position].getHead();
      if (current) {
        while (current.getNext()) {
          if (current.getElement().key === key) {
            return current.getElement().value;
          }
          current = current.getNext()!;
        }
        if (current.getElement().key === key) {
          return current.getElement().value;
        }
      }
    }
    return undefined;
  }
  print() {
    return console.log(this.table);
  }
  [inspect]() {
    return this.print();
  }
}

// Separate chaining to handle collisions using arrays
export class HashTable2<T> {
  private table: { [key: number]: { key: string; value: T }[] };
  private hashTableSize: number;
  constructor(hashTableSize = 137) {
    this.hashTableSize = hashTableSize;
    this.table = {};
  }

  // lose lose hashing
  private hashCode(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.hashTableSize;
  }
  put(key: string, value: T) {
    const position = this.hashCode(key);
    if (!this.table[position]) {
      this.table[position] = [];
    }
    this.table[position].push({ key, value });
  }
  remove(key: string) {
    const position = this.hashCode(key);
    if (this.table[position]) {
      this.table[position] = this.table[position].filter(el => el.key !== key);
      return true;
    }
    return false;
  }
  get(key: string) {
    const position = this.hashCode(key);
    if (this.table[position]) {
      const el = this.table[position].find(el => el.key === key);
      if (el) {
        return el.value;
      } else {
        return el;
      }
    }
    return undefined;
  }
  print() {
    return console.log(this.table);
  }
  [inspect]() {
    return this.print();
  }
}

// Linear probing to handle collision
export class HashTable3<T> {
  private table: { [key: number]: { key: string; value: T } | null };
  private hashTableSize: number;
  constructor(hashTableSize = 137) {
    this.hashTableSize = hashTableSize;
    this.table = {};
  }

  // lose lose hashing
  private hashCode(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.hashTableSize;
  }
  put(key: string, value: T) {
    const position = this.hashCode(key);
    if (!this.table[position]) {
      this.table[position] = { key, value };
    } else {
      let index = position + 1;
      while (this.table[index]) {
        index++;
      }
      this.table[index] = { key, value };
    }
  }
  remove(key: string) {
    const position = this.hashCode(key);
    if (this.table[position]) {
      let index = position;
      while (this.table[index]) {
        if (this.table[index]!.key === key) {
          this.table[index] = null;
          return true;
        }
        index++;
      }
    }
    return false;
  }
  get(key: string) {
    let position = this.hashCode(key);
    if (this.table[position] !== undefined) {
      while (this.table[position] !== undefined) {
        if (this.table[position]) {
          if (this.table[position]!.key === key) {
            return this.table[position]!.value;
          }
        }
        position++;
      }
    }
    return undefined;
  }
  print() {
    return console.log(this.table);
  }
  [inspect]() {
    return this.print();
  }
}
