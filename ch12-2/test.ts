// let color: string = "blue";

// console.log(color);

// let x: [string, number];

// x = ["hello", 10];

// enum Color {
//   Red = 10,
//   Green,
//   Blue,
// }

// let c: Color = Color.Blue;

// console.log(c, "c");

// let colorName: string = Color[10];

// console.log(colorName, "colorName");

// function error(message: string): never {
//   throw new Error(message);
// }

// error("Error");

// declare function create(o: object | null): void;
// create({ prop: 0 });

// interface LabeledValue {
//   label: string;
// }

// function printLabel(labeledObj: LabeledValue) {
//   console.log(labeledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };

// printLabel(myObj);

// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = { color: "white", area: 100 };
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }

//   return newSquare;
// }

// let mySquare = createSquare({ color: "black" });

// interface User {
//   name: string;
//   id: number;
// }

// class UserAccount {
//   name: string;
//   id: number;

//   constructor(name: string, id: number) {
//     this.name = name;
//     this.id = id;
//   }
// }

// const user: User = new UserAccount("Murphy", 1);

// function getAdminUser(): User {
// return user
// }

// function deleteUser(user: User) {

// }

// 제네릭은 타입에 변수를 제공하는 방법.

// type StringArray = Array<string>;
// type NumberArray = Array<number>;
// type ObjectWithNameArray = Array<{ name: string }>;

// interface Backpack<Type> {
//   add: (obj: Type) => void;
//   get: () => Type;
// }

// declare const backpack: Backpack<string>;

// const object = backpack.get();
// backpack.add("23");

// interface Point {
//   x: number;
//   y: number;
// }

// function printPoint(p: Point) {
//   console.log(`${p.x} ,  ${p.y}`);
// }

// const point = { x: 12, y: 26 };
// printPoint(point);

// const point3 = { x: 12, y: 26, z: 89 }
// printPoint(point3)

// function identity(arg: number): number {
//   return arg;
// }

// // 무엇이 반완되는지 표시하기 위해 인수의 타입을 캡쳐할 방법이 필요합니다. 여기서는 값이 아닌 타입에 적용되는 타입 변수를 사용할 것입니다.

// function indentity<T>(arg: T): T {
//   return arg;
// }

// let output = indentity<string>("myString");

// function loggingidentity<T>(arg: T[]): T[]{
//   console.log(arg.length)
//   return arg
// }

// let myIdentity : <T>(arg:T) => T = identity

// function identity<T>(arg: T): T {
//   return arg;
// }

// // let myIdentity = <T>(arg:T) => T = identity
// // let myIdentity: { <T>(arg: T): T } = identity;

// interface GenericIdentityFn {
//   <T>(arg: T): T;
// }

// let myIdentity: GenericIdentityFn = identity;

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

interface Lengthwise {
  length: number;
}

function loggingidentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
