function calc() {
// let addition = document.getElementById("addition").value;
// let subtraction = document.getElementById("subtraction").value;
// let multiplication = document.getElementById("multiplication").value;
// let division = document.getElementById("division").value;
// console.log(division);
}
function add() {
    let number1 = 1*document.getElementById("number1").value;
    let number2 = 1*document.getElementById("number2").value;
    let result;
    result = number1 + number2;
    console.log(typeof (number1));
    document.getElementById("result").innerHTML = "Result Addition =  " + result;
}
function subtract() {
    let number1 = 1*document.getElementById("number1").value;
    let number2 = 1*document.getElementById("number2").value;
    let result;
    result = number1 - number2;
    console.log(typeof (number1));
    document.getElementById("result").innerHTML = "Result Subtraction =  " + result;
}

function multi() {
    let number1 = 1*document.getElementById("number1").value;
    let number2 = 1*document.getElementById("number2").value;
    let result;
    result = number1 * number2;
    console.log(typeof (number1));
    document.getElementById("result").innerHTML = "Result Multiplication =  " + result;
}
function div() {
    let number1 = 1*document.getElementById("number1").value;
    let number2 = 1*document.getElementById("number2").value;
    let result;
    result = number1 / number2;
    console.log(typeof (number1));
    document.getElementById("result").innerHTML = "Result Division =  " + result;
}
