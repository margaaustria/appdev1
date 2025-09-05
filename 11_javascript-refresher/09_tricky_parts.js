let undefinedVar
let nullVar = null
console.log(undefinedVar)
console.log(nullVar)

const object = {
    value: 42,
    regularFunction: function() {
        console.log(this.value)
    },
    arrowFunction: () => {
        console.log(this.value)
    }
};
object.regularFunction()
object.arrowFunction()

let arr1 = [1, 2, 3]
let arr2 = arr1
arr2[0] = 99
console.log(arr1)
console.log(arr2)

let arr3 = [4, 5, 6]
let arr4 = [...arr3]
arr4[0] = 88
console.log(arr3)
console.log(arr4)
