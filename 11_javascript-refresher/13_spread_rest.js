const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4, 5]
console.log(newNumbers)

const user = { name: "Marga", age: 20 }
const updatedUser = { ...user, hobby: "Reading" }
    console.log(updatedUser)


function sumAll(...numbers) { 
      let total = 0
  for (const num of numbers) {
    total += num
  }
  return total
}

console.log(sumAll(1, 2))
console.log(sumAll(1, 2, 3, 4))
console.log(sumAll(...newNumbers))