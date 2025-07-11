let input = document.getElementById("input")
const ac = document.querySelector("#ac");
const del = document.querySelector("#del");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const equals = document.querySelector("#equals");
const divide = document.querySelector("#divide");
const point = document.querySelector("#point");
const times = document.querySelector("#times")

let numOne = 0;
let numTwo = 0;
let ans = 0;

let active;




plus.addEventListener("click", addition);
minus.addEventListener("click", subtraction);
times.addEventListener("click", multiplication);
divide.addEventListener("click", division);

equals.addEventListener("click", ()=>{
if (numOne !==0){
    if (active === "plus"){
        addition();
        numOne = ans;
        numTwo = 0;       
    } else if (active === "minus"){
        subtraction();
        numOne = ans;
        numTwo = 0; 
    } else if (active === "multiplication"){
        multiplication();
        numOne = ans;
        numTwo = 0; 
    } else if (active === "division"){
        division();
        numOne = ans;
        numTwo = 0; 
    }
} else {
    reset();
}

    
})


function addition() {
    active = "plus";
    if (Number(input.value) !== ans){
        if (input.value) {  
        if (numOne === 0){
            numOne = Number(input.value);
            input.value = ""; 
        }
        else if (numOne !== 0){
            numTwo = Number(input.value);
            ans = numOne + numTwo;
            input.value = ans;
            numOne = ans;
            numTwo = 0; 
        }   
    }
    }  
}

function subtraction () {
    active = "minus";
    if (Number(input.value) !== ans){
        if (input.value) {  
        if (numOne === 0){
            numOne = Number(input.value);
            input.value = ""; 
        }
        else if (numOne !== 0){
            numTwo = Number(input.value);
            ans = numOne - numTwo;
            input.value = ans;
            numOne = ans;
            numTwo = 0; 
        }   
    }
    }  
}

function multiplication () {
    active = "multiplication";
    if (Number(input.value) !== ans){
        if (input.value) {  
        if (numOne === 0){
            numOne = Number(input.value);
            input.value = ""; 
        }
        else if (numOne !== 0){
            numTwo = Number(input.value);
            ans = numOne * numTwo;
            input.value = ans;
            numOne = ans;
            numTwo = 0; 
        }   
    }
    }  
}

function division () {
    active = "division";
    if (Number(input.value) !== ans){
        if (input.value) {  
        if (numOne === 0){
            numOne = Number(input.value);
            input.value = ""; 
        }
        else if (numOne !== 0){
            numTwo = Number(input.value);
            ans = numOne / numTwo;
            input.value = ans;
            numOne = ans;
            numTwo = 0; 
        }   
    }
    }  
}




























function numberClick (e) {
if (ans !== 0) {
    input.value = ""
    ans = 0;
}
    input.value += e.target.value;
   

   
}

one.addEventListener("click", (e)=>{
    numberClick(e);
})

two.addEventListener("click", (e)=>{
  numberClick(e);
})

three.addEventListener("click", (e)=>{
   numberClick(e);
})

four.addEventListener("click", (e)=>{
   numberClick(e);
})

five.addEventListener("click", (e)=>{
   numberClick(e);
})

six.addEventListener("click", (e)=>{
   numberClick(e);
})

seven.addEventListener("click", (e)=>{
   numberClick(e);
})

eight.addEventListener("click", (e)=>{
   numberClick(e);
})

nine.addEventListener("click", (e)=>{
   numberClick(e);
})

zero.addEventListener("click", (e)=>{
   numberClick(e);
})

point.addEventListener("click", (e)=>{
   numberClick(e);
})

ac.addEventListener("click", ()=>{
   reset();
})

del.addEventListener("click", ()=>{
    input.value = input.value.slice(0,-1);
})

function reset() {
   input.value = "";
   active = "";
   numOne = 0;
   numTwo = 0;
   ans = 0;
}