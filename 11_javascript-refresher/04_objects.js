const aboutMe = {
    name: "Marga",
    age: 20,
    course: "BSIS",
}

console.log(aboutMe)
console.log(aboutMe.name)
console.log(aboutMe.age)
console.log(aboutMe.course)

aboutMe.introduce = function() {
    console.log(`Hi, my name is ${aboutMe.name} and I am ${aboutMe.age} years old.`)
}
aboutMe.introduce()

aboutMe.hobby = "Reading Manga"
console.log(aboutMe.hobby)
