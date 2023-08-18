let userChoice = prompt("What's Your Move S ,W or G : ")
function getrandomchoice () {
  const choices =['S' ,'W', 'G']
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}
const ComputerChoice = getrandomchoice();
alert("Computer Choice is "  + ComputerChoice)
if(userChoice==ComputerChoice){
  alert("You Both are friends💀")
}else if(userChoice=='S' && ComputerChoice == 'W'){
  alert("User Wins👑!!")
}else if(userChoice=='W' && ComputerChoice=='S'){
  alert("Computer Wins🏆,You Lost")
}else if(userChoice=='G' && ComputerChoice=='S'){
  alert("User Wins👑!!")
}else if(userChoice=='S' && ComputerChoice == 'G'){
  alert("Computer Wins🏆,You Lost")
}else if(userChoice=='W'&&ComputerChoice=='G'){
  alert("User Wins👑")
}else if(userchoice=='G' &&ComputerChoice=='W'){
  alert("Computer Wins🏆,You Lost")
}
else{
  alert("It Was A nice match")
}