const toggle = document.querySelector(".NavbarToggle")
const navbar = document.querySelector(".Navbar")

toggle.addEventListener(onclick, toggleNav())

function toggleNav(){
   navbar.setAttribute("display", "flex")
}
/*const tl = new TimelineLite({paused : true, reversed: true})

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