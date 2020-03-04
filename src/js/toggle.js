const navButton = document.querySelector(".NavClosed")
const navOpen = document.querySelector(".NavOpen")

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
}


