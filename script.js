const display = document.querySelector(".table-output")

const addBtn = document.querySelector(".add")
const subtractBtn = document.querySelector(".subtract")
const multiplyBtn = document.querySelector(".multiply")
const divideBtn = document.querySelector(".divide")
const oneBtn = document.querySelector(".one")
const twoBtn = document.querySelector(".two")
const threeBtn = document.querySelector(".three")
const fourBtn = document.querySelector(".four")
const fiveBtn = document.querySelector(".five")
const sixBtn = document.querySelector(".six")
const sevenBtn = document.querySelector(".seven")
const eightBtn = document.querySelector(".eight")
const nineBtn = document.querySelector(".nine")
const zeroBtn = document.querySelector(".zero")

const pointBtn = document.querySelector(".point")

const equalsBtn = document.querySelector(".equals")
const ACBtn = document.querySelector(".AC")
const backSpaceBtn = document.querySelector(".backspace")


let resetDisplay = false
let containsPoint = false

function updateDisplay(text) {
    !display.textContent.slice(-1).match(".") ? containsPoint = false: containsPoint = true
    if (resetDisplay) display.textContent = "";
    display.textContent += text;
    resetDisplay = false
}

function backSpace() {
    display.textContent = display.textContent.slice(0, -1)
    !display.textContent.match(".") ? containsPoint = false: containsPoint = true
}
function AC() {
    display.textContent = "";
    containsPoint = false
}
function operate() {
    if (display.textContent === "") {
        resetDisplay = true;
        return display.textContent = "0";
    }

    if (display.textContent.match(".")) {
        containsPoint = true
    }

    let operator = ""
    let operatorIndex = -1

    for (let i = 0; i < display.textContent.length; i++) {
        if (display.textContent[i].match(/[+\-*/]/)) {
            operatorIndex = i;
            operator = display.textContent[i]
            break;
        }
    }
    const firstNum = display.textContent.slice(0, operatorIndex)
    const secondNum = display.textContent.slice(operatorIndex + 1).split(/[+\-*/]/)[0];


    if ( operator === "" || firstNum === "" || secondNum === "") {
        resetDisplay = true;
        return display.textContent = "Wrong input";
    }

    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(secondNum);

    if (isNaN(num1) || isNaN(num2)) {
        resetDisplay = true;
        return display.textContent = "Invalid input";
    }

    if (operator === "/" && num2 === 0) {
        resetDisplay = true;
        return display.textContent = "Cannot divide by 0";
    }

    switch (operator) {
        case "+":
            resetDisplay = true
            updateDisplay(add(num1, num2))
            break;
        case "-":
            resetDisplay = true
            updateDisplay(subtract(num1, num2))
            break;
        case "*":
            resetDisplay = true
            updateDisplay(multiply(num1, num2))
            break;
        case "/":
            resetDisplay = true
            updateDisplay(divide(num1, num2))
    }
}

function add(n1, n2) {
    return (n1*10 + n2*10)/10
}
function subtract(n1, n2) {
    return (n1*10 - n2*10)/10
}
function multiply(n1, n2) {
    return n1 * n2
}
function divide(n1, n2) {
    return n1 / n2
}



addBtn.addEventListener('click', () => {
    if (!display.innerText.slice(-1).match(/[+\-*/]/g)) {
        updateDisplay("+")
        containsPoint = false
    }
})
subtractBtn.addEventListener('click', () => {
    if (!display.innerText.slice(-1).match(/[+\-*/]/g)) {
        updateDisplay("-")
        containsPoint = false
    }
})
multiplyBtn.addEventListener('click', () => {
    if (!display.innerText.slice(-1).match(/[+\-*/]/g)) {
        updateDisplay("*")
        containsPoint = false
    }
})
divideBtn.addEventListener('click', () => {
    if (!display.innerText.slice(-1).match(/[+\-*/]/g)) {
        updateDisplay("/")
        containsPoint = false
    }
})
oneBtn.addEventListener('click', () => updateDisplay("1"))
twoBtn.addEventListener('click', () => updateDisplay("2"))
threeBtn.addEventListener('click', () => updateDisplay("3"))
fourBtn.addEventListener('click', () => updateDisplay("4"))
fiveBtn.addEventListener('click', () => updateDisplay("5"))
sixBtn.addEventListener('click', () => updateDisplay("6"))
sevenBtn.addEventListener('click', () => updateDisplay("7"))
eightBtn.addEventListener('click', () => updateDisplay("8"))
nineBtn.addEventListener('click', () => updateDisplay("9"))
zeroBtn.addEventListener('click', () => updateDisplay("0"))

pointBtn.addEventListener('click', () => {
    if (!containsPoint && !display.textContent.slice(-1).match(/[+\-*/]/)) {
        updateDisplay(".")
        containsPoint = true
    }
})

backSpaceBtn.addEventListener('click', backSpace)
ACBtn.addEventListener('click', AC)
equalsBtn.addEventListener('click', operate)