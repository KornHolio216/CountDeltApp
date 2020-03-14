const closeBtn = document.querySelector(".closebtn")
const toggleBtn = document.querySelector(".menu-icon")
const navbar = document.querySelector("#navbar")

function closeMenu(){
    navbar.style.height = "0vh";
  }
  function openMenu(){
    navbar.style.height = "100vh";
  }

toggleBtn.addEventListener("click", openMenu)
closeBtn.addEventListener("click", closeMenu)