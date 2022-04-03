// import Person from "./person/Person";
// import IPerson from "./person/Iperson";
// import Chance from "chance";
// import * as R from "ramda";

// const chance = new Chance();
// let persons: IPerson[] = R.range(0, 2).map(
//   (n: number) => new Person(chance.name(), chance.age())
// );
// console.log(persons);

// interface IPerson2 {
//   name: string;
//   age: number;
// }

// let test: IPerson2 = { name: "geon", age: 32 };

// console.log(test.name);

// let o: object = { name: "test", age: 11 };

// console.log((<{ name: string }>o).name);

// let printMe: (string, number) => void = function (
//   name: string,
//   age: number
// ): void {};
// let add = new Function("a", "b", "return a+b");
// let result = add(1, 2);

function a(a, b) {
  return a + b;
} // 함수표현식

//
const add2 =
  (a: number): ((number) => number) =>
  (b: number): number =>
    a + b;

const add1 = (a) => {
  return (b) => {
    return a + b;
  };
};

type NumberToNumberFunc = (number) => number;
export const add = (a: number): NumberToNumberFunc => {
  const _add: NumberToNumberFunc = (b: number): number => {
    return a + b; // 클로저
  };
  return _add;
};

const multiply = (a) => (b) => (c) => a * b * c;

export type Person = { name: string; age: number };

// export const makePerson = (name: string, age: number = 10): Person => {
//     const person = { name: name, age: age }
//     return person
// }

export const makePerson = (name: string, age: number = 10) => ({ name, age });

type Keytype = {
  [key: string]: string;
};

export const makeObject = (key: string, value: string): Keytype => ({
  [key]: value,
});

export class A {
  value: number = 1;
  method: () => void = function (): void {
    console.log(`value: ${this.value}`);
  };
}

export class B {
  constructor(public value: number = 1) {}

  method(): void {
    console.log(`value: ${this.value}`);
  }
}
