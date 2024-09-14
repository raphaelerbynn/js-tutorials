/**
 * Write a JavaScript code snippet that declares variables 
 * of the following primitive 
 * data types: string, number, boolean, undefined, and null.
 */

let myPlayer; //undefined
let myString = "Welcome" //string
let myNumber = 5 //number
let isGoing = true //boolean (true, false)
let isNull = null


/**
 * Write a function checkType that takes a variable as an 
 * argument and returns the type of that variable using typeof
 */
function checkType(variable) {
    return typeof variable;
}

const checkType_ = function (myVar) {
    return typeof myVar;
}

const checkType__ = (myVar) => typeof myVar;


/**
 *Write a function convertTypes that converts a 
 string to a number, a number to a string, 
 and a boolean to a string. Test your function with different inputs

 eg: 24 -> "24", "24" -> 24, true -> "true"
*/
function convertTypes(myVar) {
    if (typeof myVar === String) {
        return typeof Number(myVar)
    } else if (typeof myVar === Number || Boolean) {
        return typeof String(myVar)
    } else {
        return myVar + "maybe either null or undefined"
    }
} // not recommended


function convertTypes_(value) {
    if (typeof value === "string") {
        return Number(value)
    } else if (typeof value === "number") {
        return value.toString()
    } else if (typeof value === "boolean") {
        return value.toString()
    } else {
        return value
    }
}


const convertTypes__ = function (value) {
    if (typeof value === "string") {
        return Number(value)
    } else if (typeof value === "number") {
        return value.toString()
    } else if (typeof value === "boolean") {
        return value.toString()
    } else {
        return "invalid input"
    }
}


const convertTypes____ = (val) => {
    if (typeof val === "string") {
        return Number(val)
    } else if ((typeof val === "number") || (typeof val === "boolean")) {
        return val.toString()
    } else {
        return "invalid input"
    }
} //best


/**
 * Write a function isFalsy that checks whether a 
 given value is falsy. A value is considered falsy 
 if it is false, 0, "", null, undefined, or NaN.
*/
function isFalsy(val) {
    //🍾: works - best
    // return !!val

    //🍾: works - best
    if (val) return true
    return false

    //🍾: works
    // if (val) {
    //     return true
    // } else {
    //     return false
    // }

}

/**
 * Write a function sumMixedArray that takes an array 
 * containing both numbers and strings representing numbers, 
 * and returns the sum of all values as if they were all numbers.
 * 
 * eg: [1, 2, 3, "ama", "kofi"] -> 6
 * 
 * 1, "3", 4
*/
function sumMixedArray(arr) {
    //dela & theo
    //create addSum = 0
    let addSum = 0
    let addSumQ = 0
    let sum = 0
    let convertedArr = []

    //loop through the arr
    for (let i = 0; i < arr.length; i++) {
        //if the type of array index is number (typeof)
        if (typeof arr[i] === "number") {
            //add to sum
            addSum += arr[i]
        }
    }
    


    //quaynor
    //loop through array to change all elements in arr to number
    for (let i = 0; i < arr.length; i++) {
        convertedArr.push(Number(arr[i]))
    }
    //loop through arr
    for (let i = 0; i < convertedArr.length; i++) {
        addSumQ += convertedArr[i]
    }

    //recommended
    //loop through and i check if its a number - add
    //if its a string, convert to number and check if it is not NaN
    for (let i = 0; i < arr.length; i++) {
        //check if its a number
        if (typeof arr[i] === "number") {
            //add to sum
            sum += arr[i]
        } else {
            //convert it to a number
            const convertToNumber = Number(arr[i])
            if (convertToNumber) {
                sum += convertToNumber
            }
        }
    }

    //return addSum
    return sum
} 

/**
 * Write a function deepCompare that takes two 
 * variables and checks if they are of the same 
 * type and value, considering edge cases like 
 * comparing null and undefined, or 0 and "0".
*/
function deepCompare(a, b) {
    if (a === b) {
        return true
    }
    return false
}
