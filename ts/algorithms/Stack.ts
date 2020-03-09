import { Stack } from "../data_structures/Stack";

export const baseConverter = (decNum: number, base: number) => {
  const remStack = new Stack<number>();
  let rem: number;
  let baseString = "";
  const digits = "0123456789ABCDEF";

  while (decNum > 0) {
    rem = Math.floor(decNum % base);
    remStack.push(rem);
    decNum = Math.floor(decNum / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()!!];
  }
  return baseString;
};
