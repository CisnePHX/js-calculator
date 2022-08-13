// This program reate s calculator with buttons that can add, subtract, multiply and divide a pair of numbers at a time

// Creates an array for numbers, and for operators to populate from onclick eventlistener
let numInputs = [];
let opInputs = [];
let numArrayIndex = -1;
let numTwoStartIndex = 0;
let displayBox = document.getElementById("display");

// Functions for each math action (round answers with long decimal values)
function add(num1, num2){
    let number1 = parseInt(num1);
    let number2 = parseInt(num2);
    let answer = number1 + number2;
    numArrayIndex = -1; //Empty the memory of digits past
    numTwoStartIndex = 0;
    numInputs = [];
    numInputs.push(answer);
    numArrayIndex++; 
    return answer;
}
function subtract(num1, num2){
    let number1 = parseInt(num1);
    let number2 = parseInt(num2);
    let answer = number1 - number2;
    numArrayIndex = -1; //Empty the memory of digits past
    numTwoStartIndex = 0;
    numInputs = [];
    numInputs.push(answer);
    numArrayIndex++; 
    return answer;
}
function multiply(num1, num2){
    let number1 = parseInt(num1);
    let number2 = parseInt(num2);
    let answer = number1 * number2;
    numArrayIndex = -1; //Empty the memory of digits past
    numTwoStartIndex = 0;
    numInputs = [];
    numInputs.push(answer);
    numArrayIndex++; 
    return answer;
}
function divide(num1, num2){
    let number1 = parseInt(num1);
    let number2 = parseInt(num2);
    let answer = 0;
    // Response for dividing by zero
    if(number2 === 0){
        numArrayIndex = -1; //Empty the memory of digits past
        numTwoStartIndex = 0;
        numInputs = [];
        numInputs.push(answer);
        numArrayIndex++; 
        return answer;
    }else {
        answer = number1 / number2;
        numArrayIndex = -1; //Empty the memory of digits past
        numTwoStartIndex = 0;
        numInputs = [];
        numInputs.push(answer);
        numArrayIndex++; 
        return answer;
    }
}

// Creates a function operate() that takes an operator and 2 numbers and then calls one of the action functions
// Response for pressing = without enough values: if one array is empty, display value of other array; if both empty, display zero
function operate(){
    let num2 = '';
    let num1 = '';
    if(numArrayIndex === 0){
        displayBox.innerHTML = numInputs[0];
    }else if(numArrayIndex === -1){
        displayBox.innerHTML = 0;
    }else {
        for(let i = numTwoStartIndex; i <= numArrayIndex; i++){
            num2 += '' + numInputs[i];

        console.log(`number2 is ${num2}`);

        }
        for(let h = 0; h < numTwoStartIndex; h++){
            num1 += '' + numInputs[h];
            console.log(`number1 is ${num1}`);
        }
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
}

// Add an eventlistener to take in and store the pushed button values, and then display it
// NumOneArray tells the # of digits input into the number array
// numTwoStartIndex tells the number of digits prior to the second set of digits
let numButtons = document.querySelectorAll(".numBtn");

numButtons.forEach(item => {item.addEventListener('click', function(){
    numInputs.push(item.value);
    numArrayIndex++; //This value will be the same as the array index number called for an operation
    console.log(`Number array index: ${numArrayIndex}`);
    displayBox.innerHTML += item.value;
})});
let operators = document.querySelectorAll(".actionBtn");

operators.forEach(item => {item.addEventListener('click', function(){
    opInputs.push(item.value);
    numTwoStartIndex = numArrayIndex +1;
    console.log(`Second number index starts at: ${numTwoStartIndex}`);
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
    numArrayIndex = -1;
    numTwoStartIndex = 0;
    displayBox.innerHTML = "";
});







// EXTRA CREDIT FOR ANOTHER TIME: Add a . for decimal value math (but only up to tenths place).
// also add a backspace button
// add keyboard support