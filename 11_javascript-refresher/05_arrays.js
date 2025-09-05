const foods = ["Fries", "Ube Halaya", "Buldak"]
console.log(foods)
 
foods.push("chicken")
console.log(foods)

foods.shift()
console.log(foods)

for (const food of foods) {
    console.log(food)
}

const likedFoods = foods.map(food => `I like ${food}`)
console.log(likedFoods)