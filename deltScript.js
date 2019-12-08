/* Delt App 
const deltA = document.getElementById("deltA").value;
const deltB = document.getElementById("deltB").value;
const deltC = document.getElementById("deltC").value;
const btn = document.querySelector(".countAllBtn")

btn.addEventListener("click", countDelt)

function countDelt(deltA,deltB,deltC){
    let a = deltA
    let b = deltB
    let c = deltC
    
    let countDelt = Math.pow(b,2) - 4*a*c; 
    let countX1 =  -b - Math.sqrt(countDelt) / (2*a);
    let countX2 = -b + Math.sqrt(countDelt)/ (2*a);
    let countX0 = -b/ (2*a) 
}


function calcDelt() {
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

document.addEventListener("DOMContentLoaded", () => {
   
    function count(a,b,c) {   
    const delta = Math.pow(b,2)-4*a*c   
    document.getElementById("resultDelt").textContent = `${delta}`
    const deltRoot = Math.sqrt(delta)
    document.getElementById("resultRoot").textContent = `${deltRoot}`

    if (delta>0){
        const x1 = (-b-Math.sqrt(delta))/2*a;
        const x2 = (-b+Math.sqrt(delta))/2*a;
        document.getElementById("resultX1").textContent = `${x1}`
        document.getElementById("resultX2").textContent = `${x2}` 
        document.getElementById("resultX0").textContent = "-"
    } else if(delta===0){
        const x0 = (-b)/2*a;
        document.getElementById("resultX0").textContent = `${x0}`
        document.getElementById("resultX1").textContent = "-"
        document.getElementById("resultX2").textContent = "-" 
    }else if(delta<0){
    document.getElementById("resultX1").textContent = "-"
    document.getElementById("resultX2").textContent = "-" 
    document.getElementById("resultX0").textContent = "-"
    document.getElementById("resultRoot").textContent = "-"
    }}
   
    document.getElementById("form").addEventListener("submit", function(e) {
        e.preventDefault();
        const a = document.getElementById("a").value;
        const b = document.getElementById("b").value;
        const c = document.getElementById("c").value;
       
        if(a,b,c) {
          count(Number.parseInt(a),Number.parseInt(b),Number.parseInt(c));
        }
    });
   
    document.querySelectorAll(".input").forEach(input => {
   
    input.addEventListener("change", (e) => {
        const a = document.getElementById("a").value;
        const b = document.getElementById("b").value;
        const c = document.getElementById("c").value;
   
        if(a,b,c) {
          count(Number.parseInt(a),Number.parseInt(b),Number.parseInt(c));
        }
       
    }) 
    })
    });