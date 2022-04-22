import * as R from "ramda";

// console.log(R.range(1, 9 + 1));

const numbers: number[] = R.range(1, 9 + 1);
R.tap((n) => console.log(n))(numbers);

const array: number[] = R.range(1, 10);
console.log(array, "array");
R.pipe(R.tap((n) => console.log(n)))(array);

export const dump = <T>(array: T[]): T[] =>
  R.pipe(R.tap((n) => console.log(n)))(array) as T[];

interface Ivaluable<T> {
  value: T;
}

function identity<T>(arg: T): T {
  return arg;
}

type IValuable<T> = {
  value: T;
};

class Valuable<T> {
  constructor(public value: T) {}
}
