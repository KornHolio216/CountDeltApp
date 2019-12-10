
const randomBtn = document.getElementById("randomNumBtn")
const min = document.getElementById("minNum").value
const max =document.getElementById("maxNum").value
const howManyNums = document.getElementById("numOfNums").value



function random(min,max,howManyNums){

    const random = Math.floor(Math.random() * (max - min + 1)) + min;
            document.getElementById("outputNums").textContent = `${random.toFixed(2)}`
}

document.getElementById("form2").addEventListener("submit", function(e) {
    e.preventDefault();
    const min = document.getElementById("minNum").value
    const max =document.getElementById("maxNum").value
    const howManyNums = document.getElementById("numOfNums").value
    if(min,max,howManyNums) {
      random(Number.parseInt(min),Number.parseInt(max),Number.parseInt(howManyNums));
    }
});

document.querySelectorAll(".input").forEach(input => {
    input.addEventListener("change", (e) => {
        const min = document.getElementById("minNum").value
        const max =document.getElementById("maxNum").value
        howManyNums = document.getElementById("numOfNums").value
        if(a,b,c) {
          random(Number.parseInt(min),Number.parseInt(max),Number.parseInt(howManyNums));
        }
    }) 
    });