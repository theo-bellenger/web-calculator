let input1 =""
let input2
let calculator
let result
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
let keyResult = document.getElementById('keyResult')


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
for (var i = 0; i < key.length; i++) {
  key[i].addEventListener("click",displayOutPout)
}

function keyInput1(){
  input1 = input1+"1"
}
function keyInput2(){
  input1 = input1+"2"
}
function keyInput3(){
  input1 = input1+"3"
}
function keyInput4(){
  input1 = input1+"4"
}
function keyInput5(){
  input1 = input1+"5"
}
function keyInput6(){
  input1 = input1+"6"
}
function keyInput7(){
  input1 = input1+"7"
}
function keyInput8(){
  input1 = input1+"8"
}
function keyInput9(){
  input1 = input1+"9"
}
function keyInput0(){
  input1 = input1+"0"
}


function displayOutPout() {
display.innerHTML = input1
}
function reset() {
input1=""
input2=""
}

function test(){
  window.alert("click")
}
