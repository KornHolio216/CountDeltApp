document.addEventListener("DOMContentLoaded", () => {

    function count(a,b,c) {   
    
    const delta = Math.pow(b,2)-4*a*c   
    document.getElementById("resultDelt").textContent = `${delta}`
    const deltRoot = Math.sqrt(delta)
    document.getElementById("resultRoot").textContent = `${deltRoot.toFixed(2)}`
    if(a===0){
        alert('If  "a" is 0, the function is linear')
        document.getElementById("resultDelt").textContent = "-"
        document.getElementById("resultX1").textContent = "-"
        document.getElementById("resultX2").textContent = "-" 
        document.getElementById("resultX0").textContent = "-"
        document.getElementById("resultRoot").textContent = "-"
    }
    else if (delta>0){
        const x1 = (-b-Math.sqrt(delta))/2*a;
        const x2 = (-b+Math.sqrt(delta))/2*a;
        document.getElementById("resultX1").textContent = `${x1.toFixed(2)}`
        document.getElementById("resultX2").textContent = `${x2.toFixed(2)}` 
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