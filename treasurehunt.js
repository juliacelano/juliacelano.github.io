// var =
// prompt("pick a photo")
// var randomNum = Math.floor(Math.random() *5)
//   if(randomNum === 0) {
//       return "Better Not Tell Your"
//   }else if (randomNum === 1) {
//     return "It is decidedly so"
//   }else if (randomNum === 2) {
//     return "Dont count on it"
//   }else if (randomNum === 3 ){
//   return "Signs point to yes"
//   }else if (randomNum === 4 ){
//   return "Outlook not so Good"}


var winningLocation = Math.floor(Math.random() *9)
var losingLocation = Math.floor(Math.random() *9)
var clickCounter = 5
while (winningLocation === losingLocation) {
  losingLocation = Math.floor(Math.random() *9)

}

const treasure = (location) =>{
  console.log ("win", winningLocation)
  console.log ("lose", losingLocation)
//  return alert (location)
  if (clickCounter === 0){
    document.getElementById("table").style.pointerEvents = "none";
    alert ("No more turns!")
  }else if (winningLocation === location) {
          document.getElementById(location).innerHTML = "&#x1f308"
          alert ("You Win!")
          document.getElementById("table").style.pointerEvents = "none";
  }else if (losingLocation === location) {
          document.getElementById(location).innerHTML = "&#x2620"
          alert ("You lose!")
          document.getElementById("table").style.pointerEvents = "none";
        }else {
          document.getElementById(location).innerHTML = "&#x1f332"
clickCounter = clickCounter-1
        document.getElementById("counter").innerHTML= clickCounter
        document.getElementById(location).style.pointerEvents = "none";

        }


  //   }else if (randomNum === 1) {
    //   return "It is decidedly so"
    // }else if (randomNum === 2) {
  //     return "Dont count on it"
  //   }else if (randomNum === 3 ){
  //   return "Signs point to yes"
  //   }else if (randomNum === 4 ){
  //   return "Outlook not so Good"}
}
