//getting needed elemtns from documentt
const closeBtn = document.querySelector(".closebtn")
const toggleBtn = document.querySelector(".menu-icon")
const navbar = document.querySelector("#navbar")

function closeMenu(){
    navbar.style.height = "0vh";   // navbar hehigt after an event
  }
  function openMenu(){
    navbar.style.height = "100vh"; // navbar hehigt after an event
  }

toggleBtn.addEventListener("click", openMenu) // adding listner for open and close menu
closeBtn.addEventListener("click", closeMenu)