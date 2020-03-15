// import { hotPotato } from "../algorithms/Queue";
// import { baseConverter } from "../algorithms/Stack";
// import { MySet } from "../data_structures/Set";

// import { Dictionary } from "../data_structures/Dictionary";
import {
  HashTable,
  HashTable2,
  HashTable3
} from "../data_structures/HashTable";

// const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
// const winner = hotPotato(names, 7);
// console.log(`The winner is: ${winner}`);

// console.log(baseConverter(100345, 2));
// console.log(baseConverter(100345, 8));
// console.log(baseConverter(100345, 16));

// const fn = () => {
//   console.log("fn");
// };
// const s = new MySet<number | object>([fn, 2, 3, [4, 5]]);
// s.add({ 1: 2 });
// const obj = { name: "ahmed" };
// s.add(obj);
// console.log(s.has(fn));
// console.log(s.has({ 1: 2 }));
// console.log(s.has(obj));
// console.log(s.toString());

// s.delete(obj);
// console.log(s.has(obj));
// s.delete(3);
// console.log(s);
// console.log(s.keys === s.values);
// s.print();

// const sIterator = s[Symbol.iterator]();

// console.log(sIterator.next());
// console.log(sIterator.next());
// console.log(sIterator.next());
// console.log(sIterator.next());
// for (const e of s) {
//   console.log(e);
// }

// const s2 = new MySet<number | object>([2, 5]);

// s.intersection(s2).print();
// s.difference(s2).print();
// s.union(s2).print();

// console.log(s.subset(s2));
// console.log(s2.subset(s));

// s2.delete(5);

// console.log(s2.subset(s));
// console.log(s.size());

// const s3 = new MySet();
// console.log(s3.values().next());

// const m = new Dictionary<any, any>([
//   ["name", "Ahmed"],
//   ["age", 28]
// ]);
// m.set("weight", 85);

// const contact = { website: "ahmedmokhtar.dev", phone: "01288424476" };

// m.set(contact, contact);
// m.print();
// console.log(m.get(contact));
// console.log(m.delete("name"));
// console.log(m.has("age"));
// console.log(m.size());
// for (const v of m.values()) {
//   console.log(v);
// }
// for (const k of m.keys()) {
//   console.log(k);
// }
// const mI = m[Symbol.iterator]();
// console.log(mI);
// console.log(mI.next().value);
// console.log(mI);
// console.log(mI.next().value);
// console.log(mI.next().value);
// console.log(mI.next().value);
// m.clear();
// console.log(m);
// const m2 = new Dictionary();
// console.log(m2);

// use low size to demonstrate collision
const d = new HashTable(37);
d.put("Gandalf", "gandalf@email.com");
d.put("John", "johnsnow@email.com");
d.put("Tyrion", "tyrion@email.com");
d.put("Aaron", "aaron@email.com");
d.put("Donnie", "donnie@email.com");
d.put("Ana", "ana@email.com");
d.put("Jonathan", "jonathan@email.com");
d.put("Jamie", "jamie@email.com");
d.put("Sue", "sue@email.com");
d.put("Mindy", "mindy@email.com");
d.put("Paul", "paul@email.com");
d.put("Nathan", "nathan@email.com");
console.log(d);

const d2 = new HashTable2(37);
d2.put("Gandalf", "gandalf@email.com");
d2.put("John", "johnsnow@email.com");
d2.put("Tyrion", "tyrion@email.com");
d2.put("Aaron", "aaron@email.com");
d2.put("Donnie", "donnie@email.com");
d2.put("Ana", "ana@email.com");
d2.put("Jonathan", "jonathan@email.com");
d2.put("Jamie", "jamie@email.com");
d2.put("Sue", "sue@email.com");
d2.put("Mindy", "mindy@email.com");
d2.put("Paul", "paul@email.com");
d2.put("Nathan", "nathan@email.com");
console.log(d2);

const d3 = new HashTable3(37);
d3.put("Gandalf", "gandalf@email.com");
d3.put("John", "johnsnow@email.com");
d3.put("Tyrion", "tyrion@email.com");
d3.put("Aaron", "aaron@email.com");
d3.put("Donnie", "donnie@email.com");
d3.put("Ana", "ana@email.com");
d3.put("Jonathan", "jonathan@email.com");
d3.put("Jamie", "jamie@email.com");
d3.put("Sue", "sue@email.com");
d3.put("Mindy", "mindy@email.com");
d3.put("Paul", "paul@email.com");
d3.put("Nathan", "nathan@email.com");
console.log(d3);

console.log(d.get("Jamie"));
console.log(d2.get("Jamie"));
console.log(d3.get("Jamie"));

console.log(d.remove("Jamie"));
console.log(d2.remove("Jamie"));
console.log(d3.remove("Jamie"));

console.log(d.get("Jamie"));
console.log(d2.get("Jamie"));
console.log(d3.get("Jamie"));

console.log(d.get("Sue"));
console.log(d2.get("Sue"));
console.log(d3.get("Sue"));

d.print();
d2.print();
d3.print();
