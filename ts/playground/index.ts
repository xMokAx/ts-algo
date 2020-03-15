// import { hotPotato } from "../algorithms/Queue";
// import { baseConverter } from "../algorithms/Stack";
// import { MySet } from "../data_structures/Set";

import { Dictionary } from "../data_structures/Dictionary";

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

const m = new Dictionary<any, any>([
  ["name", "Ahmed"],
  ["age", 28]
]);
m.set("weight", 85);

const contact = { website: "ahmedmokhtar.dev", phone: "01288424476" };

m.set(contact, contact);
m.print();
console.log(m.get(contact));
console.log(m.delete("name"));
console.log(m.has("age"));
console.log(m.size());
for (const v of m.values()) {
  console.log(v);
}
for (const k of m.keys()) {
  console.log(k);
}
const mI = m[Symbol.iterator]();
console.log(mI);
console.log(mI.next().value);
console.log(mI);
console.log(mI.next().value);
console.log(mI.next().value);
console.log(mI.next().value);
m.clear();
console.log(m);
const m2 = new Dictionary();
console.log(m2);
