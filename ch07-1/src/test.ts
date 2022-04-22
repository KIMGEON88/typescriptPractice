import { readFileSync, readFile } from "fs";

// package.json 파일을 동기 방신으로 읽는 예
console.log("read package.json using syschronous api...");
const buffer: Buffer = readFileSync("./package.json");
const content: string = buffer.toString();
console.log(content);

// // package.json 파일을 비동기 방식으로 읽는 예
// readFile('./package.json', (error: Error, buffer: Buffer) => {
//     console.log('read package.json using asynchronous api...')
//     console.log(buffer.toString())
// })

readFile("./package.json", (err: Error, buffer: Buffer) => {
  if (err) throw err;
  else {
    const content: string = buffer.toString();
    console.log(content);
  }
});
