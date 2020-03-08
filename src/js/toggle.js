function toggle(){
   var links = document.getElementById("myLinks")
   if (links.style.display === "flex"){
      links.style.display = "none"
   } else {
      links.style.display = "flex"
   }
}