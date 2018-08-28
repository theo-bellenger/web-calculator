let input1 =""
let input2 = ""
let calculator
let result = ""
let validity = true
let secondInput = false
let calcul
let resetKey = document.getElementById('keyAc')
let key = document.querySelectorAll('.item')
let display = document.getElementById('display')
let key1 = document.getElementById('key1')
let key2 = document.getElementById('key2')
let key3 = document.getElementById('key3')
let key4 = document.getElementById('key4')
let key5 = document.getElementById('key5')
let key6 = document.getElementById('key6')
let key7 = document.getElementById('key7')
let key8 = document.getElementById('key8')
let key9 = document.getElementById('key9')
let key0 = document.getElementById('key0')
let keyDot = document.getElementById('keyDot')
let keyResult = document.getElementById('keyResult')
let keyPlus = document.getElementById('keyPlus')
let keyTime = document.getElementById('keyTime')
let keyDivide = document.getElementById('keyDivide')
let keyMinus = document.getElementById('keyMinus')

resetKey.addEventListener("click",reset)
key1.addEventListener("click",keyInput1)
key2.addEventListener("click",keyInput2)
key3.addEventListener("click",keyInput3)
key4.addEventListener("click",keyInput4)
key5.addEventListener("click",keyInput5)
key6.addEventListener("click",keyInput6)
key7.addEventListener("click",keyInput7)
key8.addEventListener("click",keyInput8)
key9.addEventListener("click",keyInput9)
key0.addEventListener("click",keyInput0)
keyDot.addEventListener("click",dot)
for (var i = 0; i < key.length; i++) {
  key[i].addEventListener("click",displayOutPout)
}
keyPlus.addEventListener("click",some)
keyTime.addEventListener("click",multiplication)
keyDivide.addEventListener("click",division)
keyMinus.addEventListener("click",substraction)
keyResult.addEventListener("click",calculation)

function keyInput1(){
  if (secondInput == false){
    input1 = input1+"1"}
    else {
      input2 = input2+"1"
    }
}
function keyInput2(){
  if (secondInput == false){
    input1 = input1+"2"}
    else {
      input2 = input2+"2"
    }
}
function keyInput3(){
  if (secondInput == false){
    input1 = input1+"3"}
    else {
      input2 = input2+"3"
    }
}
function keyInput4(){
  if (secondInput == false){
    input1 = input1+"4"}
    else {
      input2 = input2+"4"
    }
}
function keyInput5(){
  if (secondInput == false){
    input1 = input1+"5"}
    else {
      input2 = input2+"5"
    }
}
function keyInput6(){
  if (secondInput == false){
    input1 = input1+"6"}
    else {
      input2 = input2+"6"
    }
}
function keyInput7(){
  if (secondInput == false){
    input1 = input1+"7"}
    else {
      input2 = input2+"7"
    }
}
function keyInput8(){
  if (secondInput == false){
    input1 = input1+"8"}
    else {
      input2 = input2+"8"
    }
}
function keyInput9(){
  if (secondInput == false){
    input1 = input1+"9"}
    else {
      input2 = input2+"9"
    }
}
function keyInput0(){
  if (secondInput == false){
    input1 = input1+"0"}
    else {
      input2 = input2+"0"
    }
}
function dot(){
  if (validity == true){
    input1 = input1+"."
  }
  validity = false
}

function displayOutPout() {
  if (secondInput == false){
    display.innerHTML = input1}
  else {display.innerHTML = input2}
}
function reset() {
input1=""
input2=""
validity = true
secondInput = false
}

function some(){
  secondInput = true
  calcul = "some"
}
function multiplication(){
  secondInput = true
  calcul = "time"
}
function division(){
  secondInput = true
  calcul = "divide"
}
function substraction(){
  secondInput = true
  calcul = "minus"
}


function calculation(){
  if (calcul === "some"){
    result = parseFloat(input1) + parseFloat(input2)
    display.innerHTML = result
  }
  if (calcul === "time"){
    result = parseFloat(input1) * parseFloat(input2)
    display.innerHTML = result
  }
  if (calcul === "divide"){
    result = parseFloat(input1) / parseFloat(input2)
    display.innerHTML = result
  }
  if (calcul === "minus"){
    result = parseFloat(input1) - parseFloat(input2)
    display.innerHTML = result
  }
  input1=""
  input2=""
  secondInput = false
}
