// getting needed elements
const btnOne = document.querySelector("#calcOne")
const btnTwo = document.querySelector("#calcTwo")
const btnThree = document.querySelector("#calcThree")
const btnFour = document.querySelector("#calcFour")
const btnFive = document.querySelector("#calcFive")
const btnSix = document.querySelector("#calcSix")
const btnSeven = document.querySelector("#calcSeven")
const btnEight = document.querySelector("#calcEight")
const btnNine = document.querySelector("#calcNine")
const btnZero = document.querySelector("#calcZero")
const btnDot = document.querySelector("#dot")
const clearBtn = document.querySelector("#calcClear")
const resultValue = document.querySelector("#resultValue")

var resultVal = '0'; // setting value as 0
var pendingVal;
var evalStringArray = []; 

const calcNums = document.querySelectorAll(".calcNum")
const calcOperators = document.querySelectorAll(".calcOperator")

//updating result value
const updateResultVal = (clickObject) =>{
    const resultText = clickObject.target.innerText; 

    if(resultVal === '0')
        resultVal = ' ';

    resultVal +=  resultText;
    resultValue.innerText = resultVal;
}

//math opetarions + - * / 
const performOperation = (clickObject) => {
    const operator = clickObject.target.innerText;
        switch (operator) {
            case "+":
                pendingVal = resultVal;
                resultVal = '0';
                resultValue.innerText = resultVal;
                evalStringArray.push(pendingVal);
                evalStringArray.push('+')
            
                break;
            
            case "-":
                pendingVal = resultVal;
                resultVal = '0';
                resultValue.innerText = resultVal;
                evalStringArray.push(pendingVal);
                evalStringArray.push('-')
                
                    break;
            
            case "*":
                pendingVal = resultVal;
                resultVal = '0';
                resultValue.innerText = resultVal;
                evalStringArray.push(pendingVal);
                evalStringArray.push('*')
                
                    break;
            case "÷":
                pendingVal = resultVal;
                resultVal = '0';
                resultValue.innerText = resultVal;
                evalStringArray.push(pendingVal);
                evalStringArray.push('/')
                
                    break;
            case "=":
                evalStringArray.push(resultVal);
                const evaluation = eval(evalStringArray.join('  '));
                resultVal = evaluation + ""
                resultValue.innerText = resultVal;
                evalStringArray = [];
                    break; 
            default:
                break;
        }
}
// adding event listener for nums buttons
for(let i=0; i < calcNums.length; i++){
    calcNums[i].addEventListener('click', updateResultVal, false);
}
//adding event listener for operator buttons
for(let i=0; i < calcOperators.length; i++){
    calcOperators[i].addEventListener('click', performOperation, false);
}
// clear button 
clearBtn.onclick = () => {
    resultVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    resultValue.innerHTML =  resultVal;
}

btnDot.onclick = () => {
    if(!resultVal.includes('.'))
        resultVal += '.';
    resultValue.innerText = resultVal;
}

const perfect = () =>{
    const a=Number(document.querySelector("#checkNum").value)
    const b=0;
}

