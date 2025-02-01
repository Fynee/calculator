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

function add(n2, n1) {
    display.innerText = n1 + n2
    return display.innerText
}
function subtract(n2, n1) {
    display.innerText = n1 - n2
    return display.innerText
}
function multiply(n2, n1) {
    display.innerText = n1 * n2
    return display.innerText
}
function divide(n2, n1) {
    display.innerText = n2 / n1
    return display.innerText
}
function operate() {
    const displayLast = displayValue

    function getOperator() {
        return displayLast.find((value) => /[+\-*/]/.test(value)) || null
    }
    function getFirstNum() {
        let num = "";
        for (let i = 0; i < displayLast.length; i++) {
            const current = displayLast[i];
            if (/\d|\.|-/.test(current)) {
                if (current === "-" && current === "") {
                    num = num + current;
                } else if (current !== "-" || current !== "") {
                    num = num + current;
                }
            } else if (/[+\-*/]/.test(current)) {
                break
            }
        }
        return num !== "" ? parseFloat(num) : null
    }





    function getSecondNum() {
        let num = ""
        for (let i = displayLast.length - 1; i >= 0; i--) {
            const current = displayLast[i];
            if (/\d|\.|-/.test(current)) {
                num += current;
            } else if (/[+\-*/]/.test(current)) {
                break
            }
        }
        num = num.split("").reverse().join("")

        return num !== "" ? parseFloat(num) : null
    }

    const operator = getOperator()
    const firstNum = getFirstNum()
    const secondNum = getSecondNum()

    console.log(firstNum, operator, secondNum)

    if (firstNum === null || secondNum === null || operator === "") {
        displayValue = []
        display.innerText = "Wrong input"
    } else if (operator === "+") {

        add(firstNum, secondNum)
    }
      else if (operator === "-") {
          subtract(firstNum, secondNum)
    }
      else if (operator === "*") {
          multiply(firstNum, secondNum)
    }
      else if (operator === "/") {
          divide(firstNum, secondNum)
    }
}

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
    if (shouldResetDisplay) {
        display.innerText = ""
        displayValue = []
        shouldResetDisplay = false
    }
    displayValue.push(`${e}`)
    console.log(displayValue.join(','))
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

let shouldResetDisplay = false;

equalsBtn.addEventListener('click', () => {
    operate()
    shouldResetDisplay = true
})