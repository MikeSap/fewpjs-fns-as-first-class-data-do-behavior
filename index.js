/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let hour_min = time.split(':')  
  if (parseInt(hour_min[0]) < 12 ){
  return 'Good Morning'
  }
  else if (parseInt(hour_min[0]) >= 12 && parseInt(hour_min[0]) < 17) {
  return 'Good Afternoon'
  }
  else {
  return 'Good Evening'
  }
}

greet("18:15")

/* Write your implementation of displayMessage() */

function displayMessage (mes) {
let greeting = document.getElementById("greeting")
return greeting.innerText = mes
}