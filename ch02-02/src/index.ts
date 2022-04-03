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
let add = new Function("a", "b", "return a+b");
let result = add(1, 2);
console.log(result);

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
