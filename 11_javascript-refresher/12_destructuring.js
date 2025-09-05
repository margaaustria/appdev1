const person = {
  name: "Marga", 
  age: 20
}
const hobbies = ["Reading", "Gaming"]

const { name, age } = person
console.log(name)
console.log(age)

const [Hobby1, Hobby2] = hobbies
console.log(Hobby1)
console.log(Hobby2)

function printName({ name, age }) {
  console.log(`${name}  ${age}`)
}

printName(person)

function printHobbies([hobby1, hobby2]) {
  console.log(`My hobbies are ${hobby1}, ${hobby2}`)
}

printHobbies(hobbies)


