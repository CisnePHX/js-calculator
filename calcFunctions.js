// Create a calculator with buttons that can add, subtract, multiply and divide a pair of numbers at a time
// Create an array for numbers, and for operators to populate from onclick eventlistener
const numInputs = [];
const opInputs = [];
// Create a function for each math action (round answers with long decimal values)
function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    // Error message for dividing by zero
    let answer = num1 / num2;
    return answer;
}
// Populate the display with clicked value in eventlistener
function storeAndDisplayNums(){
    numInputs.push(item.value);
    document.getElementById("display").innerHTML = item.value;
}
function storeAndDisplayOps(){

}
// Take in and store the pushed button values
// Add an eventlistener to each number button, and then to each operator button
document.querySelectorAll(".sqBtn").forEach(item => {item.addEventListener('click', storeAndDisplay)});
let operators = document.querySelectorAll(".actionBtn");

// Create function operate() that takes an operator and 2 numbers and then calls one of the action functions
// Calculate when the equals button is pushed
// Need a response for pressing = without enough values
// "Clear" should wipe out existing data


// Update the display with the calcuation's solution 







// EXTRA CREDIT: Add a . for decimal value math (but only up to tenths place).
// also add a backspace button
// add keyboard support