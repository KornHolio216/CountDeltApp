// Delt App 
const deltA = document.getElementById("deltA").value;
const deltB = document.getElementById("deltB").value;
const deltC = document.getElementById("deltC").value;
const btn = document.querySelector(".countAllBtn")

btn.addEventListener("click", countDelt)

function countDelt(deltA,deltB,deltC){
    let a = deltA
    let b = deltB
    let c = deltC
    
    let countDelt = Math.pow(b*b) - 4*a*c; 
    let countX1 =  -b - Math.sqrt(countDelt) / 2;
    let countX2 = -b + Math.sqrt(countDelt)/2;
    let countX0 = -b/ (2*a) 
}


/*function calcDelt() {
    const defValues = {deltA: 1, deltB: 1, deltC: 1};

    const values = {
        ...defValues,
        deltA,
        deltB,
        deltC
    }

    console.log(values);
}

(function() {
    'use strict';  

    
    console.log(document.querySelectorAll(".deltInput"))
}());



function countDelt(a,b,c){
    let delt = b*b - 4*a*c 

    return delt 
}

const delt = countDelt

console.log(delt)   */

