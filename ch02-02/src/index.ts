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

// function a(a, b) {
//   return a + b;
// } // 함수표현식

// //
// const add2 =
//   (a: number): ((number) => number) =>
//   (b: number): number =>
//     a + b;

// const add1 = (a) => {
//   return (b) => {
//     return a + b;
//   };
// };

// type NumberToNumberFunc = (number) => number;
// export const add = (a: number): NumberToNumberFunc => {
//   const _add: NumberToNumberFunc = (b: number): number => {
//     return a + b; // 클로저
//   };
//   return _add;
// };

// const multiply = (a) => (b) => (c) => a * b * c;

// export type Person = { name: string; age: number };

// // export const makePerson = (name: string, age: number = 10): Person => {
// //     const person = { name: name, age: age }
// //     return person
// // }

// export const makePerson = (name: string, age: number = 10) => ({ name, age });

// type Keytype = {
//   [key: string]: string;
// };

// export const makeObject = (key: string, value: string): Keytype => ({
//   [key]: value,
// });

// export class A {
//   value: number = 1;
//   method: () => void = function (): void {
//     console.log(`value: ${this.value}`);
//   };
// }

// export class B {
//   constructor(public value: number = 1) {}

//   method(): void {
//     console.log(`value: ${this.value}`);
//   }
// }

// 어떤 프로그래밍 언어는 문자열을 문자들의 배열로 간주합니다.
// 타입스크립트에서는 문자 타입이 없고 문장열의 내용 또한 변경할 수 없다.
// 이러한 특성 때문에 문자열을 가공하려면 먼저 문자열을 배열로 전환해야 한다.

// export const split = (str: string, delim: string = ""): string[] =>
//   str.split(delim);

// console.log(split("gello"));

// export const join = (strArray: string[], delim: string = ""): string =>
//   strArray.join(delim);

// console.log(join(["h", "e", "l"]));

// const numbers: number[] = [1, 2, 3, 4, 5];
// for (let index = 0; index < numbers.length; index++) {
//   const item: number = numbers[index];
//   console.log(item);
// }

// let names = ['jack', 'jane', 'steve']

// for (let index in names) {
//   const name = names[index]
//   console.log(`[${index}]:${name}`)
// }

// const arrayLength = <T>(array: T[]): number => array.length
// const isEmpty = <T>(array:T[]) : boolean => arrayLength<T>(array) === 0

// let numArray: number[] = [1, 2, 3]
// let strArray: string[] = ['Hello', 'World']

// type IPerson = { name: string, age?: number }
// let personArray: IPerson[] = [{ name: 'Jack' }, { name: 'Jane', age: 32 }]
export type ResultType = [boolean, string];

export const doSomething = (): ResultType => {
  try {
    throw new Error("Some error occurs...");
  } catch (e) {
    console.log(e);
    return [false, e.message];
  }
};

const [result, errorMessage] = doSomething();
console.log(result, errorMessage);
