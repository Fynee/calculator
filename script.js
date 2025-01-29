function add(n1, n2) {
    return n1 + n2
}
function subtract(n1, n2) {
    return n1 - n2
}
function multiply(n1, n2) {
    return n1 * n2
}
function divide(n1, n2) {
    return n1 / n2
}

let firstNum
let operator
let secondNum

function operate() {
    const displayLast = displayValue
    function getOperator() {
        return operator = displayLast.filter((value) => value === /[+\-*/]/g)
    }
    getOperator()
    function getFirstNum() {
        for (let i = 0; displayLast[i] !== /[+\-*/]/g; i++) {
            firstNum += displayLast[i]
        }
        return firstNum
    }
    getFirstNum()
    function getSecondNum() {
        for (let i = displayLast.length - 1; displayLast[i] !== /[+\-*/]/g; i--) {
            secondNum += displayLast[i]
        }
        return secondNum
    }
    getSecondNum()
    console.log(firstNum, secondNum, operator)
}
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

const equalsBtn = document.querySelector(".equals")
const ACBtn = document.querySelector(".AC")
const backSpaceBtn = document.querySelector(".backspace")



let displayValue = []

function backSpace() {
    if (typeof displayValue.slice(-2) !== "undefined") {
        displayValue.pop()
        display.innerText = displayValue.join("")
    } else {
        display.innerText = ""
    }
    console.log(displayValue.join(','))
}

function btnClick(e) {
    displayValue.push(`${e}`)
    console.log(displayValue.join(','))
    console.log(typeof displayValue[0])
    display.innerText += displayValue.slice(-1).toString()
}

function AC() {
    display.innerText = ""
    displayValue = []
}

addBtn.addEventListener('click', () => {
    if (!display.innerText.slice(-1).match(/[+\-*/]/g)) btnClick("+")
})
subtractBtn.addEventListener('click', () => {
    if (!display.innerText.slice(-1).match(/[+\-*/]/g)) btnClick("-")
})
multiplyBtn.addEventListener('click', () => {
    if (!display.innerText.slice(-1).match(/[+\-*/]/g)) btnClick("*")
})
divideBtn.addEventListener('click', () => {
    if (!display.innerText.slice(-1).match(/[+\-*/]/g)) btnClick("/")
})
oneBtn.addEventListener('click', () => btnClick("1"))
twoBtn.addEventListener('click', () => btnClick("2"))
threeBtn.addEventListener('click', () => btnClick("3"))
fourBtn.addEventListener('click', () => btnClick("4"))
fiveBtn.addEventListener('click', () => btnClick("5"))
sixBtn.addEventListener('click', () => btnClick("6"))
sevenBtn.addEventListener('click', () => btnClick("7"))
eightBtn.addEventListener('click', () => btnClick("8"))
nineBtn.addEventListener('click', () => btnClick("9"))
zeroBtn.addEventListener('click', () => btnClick("0"))


ACBtn.addEventListener('click', AC)

backSpaceBtn.addEventListener('click', backSpace)

equalsBtn.addEventListener('click', operate)