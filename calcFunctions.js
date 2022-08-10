// Create a calculator with buttons that can add, subtract, multiply and divide a pair of numbers at a time
// Create an array for numbers, and for operators to populate from onclick eventlistener
let numInputs = [];
let opInputs = [];
let displayBox = document.getElementById("display");
// Create a function for each math action (round answers with long decimal values)
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
    // Error message for dividing by zero
    let answer = number1 / number2;
    return answer;
}
// Populate the display with clicked value in eventlistener
//function storeAndDisplayNums(){
   // numInputs.push(item.value);
    
//}
//function storeAndDisplayOps(){

//}
// Take in and store the pushed button values
// Add an eventlistener to each number button, and then to each operator button
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

equalBtn.addEventListener('click', function(){
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
});

// Create function operate() that takes an operator and 2 numbers and then calls one of the action functions
// Calculate when the equals button is pushed
// Need a response for pressing = without enough values

// "Clear" should wipe out existing data
let clearBtn = document.getElementById("clear");

clearBtn.addEventListener('click', function(){
    numInputs = [];
    opInputs = [];
    displayBox.innerHTML = "";
});
// Update the display with the calcuation's solution 







// EXTRA CREDIT: Add a . for decimal value math (but only up to tenths place).
// also add a backspace button
// add keyboard support