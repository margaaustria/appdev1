import greet from "./15_modules_export.js"
import { myInfo } from "./15_modules_export.js"

console.log(greet())
console.log(`Name: ${myInfo.name}, Age: ${myInfo.age}`)