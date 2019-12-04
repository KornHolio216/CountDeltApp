
const btnOne = document.getElementById('calcOne')
const btnTwo = document.getElementById('calcTwo')
const btnThree = document.getElementById('calcThree')
const btnFour = document.getElementById('calcFour')
const btnFive = document.getElementById('calcFive')
const btnSix = document.getElementById('calcSix')
const btnSeven = document.getElementById('calcSeven')
const btnEight = document.getElementById('calcEight')
const btnNine = document.getElementById('calcNine')
const btnZero = document.getElementById('calcZero')

const btnDot = document.getElementById('dot')
const clearBtn = document.getElementById('calcClear')
const resultValue = document.getElementById('resultValue')

var resultVal = '0';
var pendingVal;
var evalStringArray = []; 

const calcNums = document.getElementsByClassName('calcNum')
const calcOperators = document.getElementsByClassName('calcOperator')

const updateResultVal = (clickObject) =>{
    const resultText = clickObject.target.innerText; 

    if(resultVal === '0')
        resultVal = ' ';

    resultVal +=  resultText;
    resultValue.innerText = resultVal;
}

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

for(let i=0; i < calcNums.length; i++){
    calcNums[i].addEventListener('click', updateResultVal, false);
}

for(let i=0; i < calcOperators.length; i++){
    calcOperators[i].addEventListener('click', performOperation, false);
}

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
    const a=Number(document.getElementById("checkNum").value)
    const b=0;
}

