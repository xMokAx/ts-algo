import { hotPotato } from "../algorithms/Queue";
import { baseConverter } from "../algorithms/Stack";

const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
const winner = hotPotato(names, 7);
console.log(`The winner is: ${winner}`);

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
