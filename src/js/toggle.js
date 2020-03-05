const toggle = document.querySelector(".NavbarToggle").addEventListener("click", navDisplay())

function navDisplay(){
   const navbar = document.querySelector(".Navbar")
   navbar.style.display = "none"
}

/* function changeNavDisplay() {
   let navbar = document.querySelector(".Navbar")
   navbar.classList.toggle("visible")
   console.log("chuj")
}

function toggle(){
   const toggle = document.querySelector(".NavbarToggle")
   toggle.addEventListener("click", changeNavDisplay, false)
}

const tl = new TimelineLite({paused : true, reversed: true})

tl.to("navOpen", 1, {
   width: "100%",
   ease: Power2.easeOut
})


navButton.addEventListener("click", (e) =>{
   if(tl.isActive()){
      e.preventDefault()
      e.stopImmediatePropagation()
      return false
   }
toggleTween(tl)
})

function toggleTween(tween){
   tween.reversed() ? tween.play() : tween.reverse()
}  */