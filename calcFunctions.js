// This program reate s calculator with buttons that can add, subtract, multiply and divide a pair of numbers at a time

// Creates an array for numbers, and for operators to populate from onclick eventlistener
let numInputs = [];
let opInputs = [];
let displayBox = document.getElementById("display");

// Functions for each math action (round answers with long decimal values)
//******************Add results to number array so that numbers can be continuously added
function add(num1, num2){
    let number1 = parseInt(num1);
    let number2 = parseInt(num2);
    return number1 + number2;
}
function subtract(num1, num2){
    let number1 = parseInt(num1);
    let number2 = parseInt(num2);
    return number1 - number2;
}
function multiply(num1, num2){
    let number1 = parseInt(num1);
    let number2 = parseInt(num2);
    return number1 * number2;
}
function divide(num1, num2){
    let number1 = parseInt(num1);
    let number2 = parseInt(num2);
    let answer = 0;
    // Response for dividing by zero
    if(number2 === 0){
        return answer = 0;
    }else {
        //***** Need to round answers with long decimal values so no screen overflow
        answer = number1 / number2;
        return answer;
    }
}

// Creates a function operate() that takes an operator and 2 numbers and then calls one of the action functions
// ******Need a response for pressing = without enough values
function operate(){
    let num2 = numInputs.pop();
    let num1 = numInputs.pop();
    let operator = opInputs.pop();
    if (operator == "+"){
        displayBox.innerHTML = add(num1, num2);
    }else if (operator == "-"){
        displayBox.innerHTML = subtract(num1, num2);
    }else if (operator == "x"){
        displayBox.innerHTML = multiply(num1, num2);
    }else {
        displayBox.innerHTML = divide(num1, num2);
    }
}

// Add an eventlistener to take in and store the pushed button values, and then display it
let numButtons = document.querySelectorAll(".sqBtn");

numButtons.forEach(item => {item.addEventListener('click', function(){
    numInputs.push(item.value);
    displayBox.innerHTML = item.value;
})});
let operators = document.querySelectorAll(".actionBtn");

operators.forEach(item => {item.addEventListener('click', function(){
    opInputs.push(item.value);
    displayBox.innerHTML = item.value;
})});
let equalBtn = document.getElementById("equals");

// Gets values from arrays to calculate via operate function when = is pressed
equalBtn.addEventListener('click', operate);

// "Clear" wipes out existing data
let clearBtn = document.getElementById("clear");

clearBtn.addEventListener('click', function(){
    numInputs = [];
    opInputs = [];
    displayBox.innerHTML = "";
});







// EXTRA CREDIT FOR ANOTHER TIME: Add a . for decimal value math (but only up to tenths place).
// also add a backspace button
// add keyboard support