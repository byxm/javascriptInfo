import { es1Count } from "./esModule1";

export let count2 = 0;

console.log("enter es2Module", this);

export function es2Count(n) {
  count2++;
  n--;
  console.log("this is count1", n);
  if (n > 0) {
    es1Count(n);
  }
}
