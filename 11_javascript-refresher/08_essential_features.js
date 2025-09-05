const hobbies = ["Reading", "Gaming", "Watching Anime"]
hobbies.map(hobby => console.log(hobby))

const student = { name: "Marga", age: 20 }
const { name, age } = student
console.log(name)
console.log(age)

const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4, 5]
console.log(newNumbers)
