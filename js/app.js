const fName = document.querySelector("form #fName");
const age = document.querySelector("form #age");
const isMarried = document.querySelector("form #isMarried");


const fNameText = document.querySelector(".fName");
const ageText = document.querySelector(".age");
const isMarriedText = document.querySelector(".isMarried");

const btnSubmit = document.querySelector(".btnSubmit");
const btnReset = document.querySelector(".btnReset");

const message = document.querySelector(".message");

const container_text = document.querySelector(".container_text")


//! Eventlistener 

fName.addEventListener("input", function(e){
     fNameText.innerText = `🎁Name: ${e.target.value}`;  
});
age.addEventListener("input", function(e){
     ageText.innerText = `😎Age: ${e.target.value}`;
});
isMarried.addEventListener("input",function(e){
     isMarriedText.innerText = `👍isMarried: ${e.target.value}`
});

btnSubmit.addEventListener("click", function(){
     message.innerText = "Succesfull, send ✔"
});

btnReset.addEventListener("click", function(){
     container_text.innerHTML = "";
     message.innerText = "Unsuccesfull, try again 😢"
})
