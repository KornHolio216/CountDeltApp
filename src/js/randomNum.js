//getting needed elements
const randomBtn = document.querySelector("#randomNumBtn")
const min = document.querySelector("#minNum").value
const max =document.querySelector("#maxNum").value
const howManyNums = document.querySelector("#numOfNums").value
//random number function
function random(min,max){
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}
//adding event listener for form
document.querySelector("#form2").addEventListener("submit", function(e) {
    e.preventDefault();
    const min = document.querySelector("#minNum").value
    const max =document.querySelector("#maxNum").value
    const howManyNums = document.querySelector("#numOfNums").value // getting how many nums user want to get
    if(min,max,howManyNums) {
      document.querySelector("#outputNums").textContent = " "
      for(let i = 0; i < howManyNums; i++) {
        const randomNumber = random(Number.parseInt(min),Number.parseInt(max));
         document.querySelector("#outputNums").textContent = `${document.querySelector("#outputNums").textContent} ${randomNumber.toFixed(2) }`
      }
    }
});
//adding listener to inputs for instant change of result
document.querySelectorAll(".input").forEach(input => {
    input.addEventListener("change", (e) => {
        const min = document.getElementById("minNum").value
        const max =document.getElementById("maxNum").value
        if(a,b,c) {
          random(Number.parseInt(min),Number.parseInt(max));
        }
    }) 
    });