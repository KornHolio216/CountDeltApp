
const randomBtn = document.getElementById("randomNumBtn")
const min = document.getElementById("minNum").value
const max =document.getElementById("maxNum").value
const howManyNums = document.getElementById("numOfNums").value

function random(min,max){
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

document.getElementById("form2").addEventListener("submit", function(e) {
    e.preventDefault();
    const min = document.getElementById("minNum").value
    const max =document.getElementById("maxNum").value
    const howManyNums = document.getElementById("numOfNums").value
    if(min,max,howManyNums) {
      document.getElementById("outputNums").textContent = " "
      for(let i = 0; i < howManyNums; i++) {
        const randomNumber = random(Number.parseInt(min),Number.parseInt(max));
        // Tutaj stwórz element dom daj mu textContent i doddaj do drzewa.
         document.getElementById("outputNums").textContent = `${document.getElementById("outputNums").textContent} ${randomNumber.toFixed(2) }`
      }
    }
});

document.querySelectorAll(".input").forEach(input => {
    input.addEventListener("change", (e) => {
        const min = document.getElementById("minNum").value
        const max =document.getElementById("maxNum").value
 //       howManyNums = document.getElementById("numOfNums").value
        if(a,b,c) {
          random(Number.parseInt(min),Number.parseInt(max)/*,Number.parseInt(howManyNums)*/);
        }
    }) 
    });