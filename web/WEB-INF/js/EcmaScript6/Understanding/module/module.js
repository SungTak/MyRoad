// export data
export var color = "red";
export let name = "Nicholas";
export const magicNumber = 7;

// export function
export function sum(num1, num2) {
    return num1 + num2;
}

// export class
export class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
}

// this function is private to the module
function subtract(num1, num2) {
    return num1 - num2;
}

// define a function
function multiply(num1, num2) {
    return num1 * num2;
}

// export later
// export multiply; //되어야하지만 안됨
export {multiply}; // 이렇게하면 됨 ㅎㅎ

(function() {
    var flag = true;
    if (flag) {
         //export {flag};    // syntax error
    }
})();