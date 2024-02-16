for (let i = 0; i < document.querySelectorAll("button").length; i++){
document.querySelectorAll("button")[i].addEventListener("click", function(){
console.log("1");
        document.querySelectorAll("button")[i].classList.add("changeClass");
        console.log("2")
        setTimeout(function(){
        document.querySelectorAll("button")[i].classList.remove("changeClass");
        console.log("3")
        },100)
}) }


// for (let i = 0; i < document.querySelectorAll("button").length; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//       console.log("1");
//       document.querySelectorAll("button")[i].classList.add("changeClass");
//       console.log("2")
//       setTimeout(function() {
//         document.querySelectorAll("button")[i].classList.remove("changeClass");
//         console.log("3")
//       }, 100)
//     })
//   }
  
