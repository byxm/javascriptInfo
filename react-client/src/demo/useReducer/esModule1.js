import { es2Count } from "./esModule2";

export let count1 = 0;

console.log("enter es1Module");

export function es1Count(n) {
  count1++;
  n--;
  console.log("this is Counter2", n);
  if (n > 0) {
    es2Count(n);
  }
}
