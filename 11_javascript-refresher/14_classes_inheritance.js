class Person {
  constructor(name) {
    this.name = name
  }
    sayHello() {
        console.log("Hi, I am " + this.name)
    }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`)
  }
}

const person1 = new Person("Marga")
person1.sayHello()

const student1 = new Student("Marga")
student1.sayHello()
student1.study()
