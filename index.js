const input = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

checkButton.onclick = check;
clearButton.onclick = clearBtn;

function check(){
  if(input.value == ""){
    alert("Please provide a phone number")
  }else if(/^\d\s\d+-\d+-\d+$/.test(input.value)){
    result.innerText = `Valid US number: ${input.value}`;
    console.log(`1`)
  }else if(/^1\s\d+\s\d+-\d+$/.test(input.value.replace(/\(|\)/g,""))){
    result.innerText = `Valid US number: ${input.value}`;
    console.log(`2 this`)
  }else if(input.value.length == 10 && /^\d+$/.test(input.value)){
    result.innerText = `Valid US number: ${input.value}`;
    console.log(`3`)
  }else if(/^\d+-\d+-\d+$/.test(input.value) && input.value.length == 12){
    result.innerText = `Valid US number: ${input.value}`;
    console.log(`4`)
  }else if(/^\d+-\d+$/.test(input.value.replace(/\(|\)/g,"")) && input.value.length == 13){
    result.innerText = `Valid US number: ${input.value}`;
    console.log(`5`)
  }else if(/^\d+-\d+$/.test(input.value.replace(/\(|\)/g,"")) && input.value.length == 14 && input.value[0] == 1){
    result.innerText = `Valid US number: ${input.value}`;
    console.log(`6`)
  }else if(/^\d\s\d+\s\d+\s\d+$/.test(input.value) && input.value.length == 14){
    result.innerText = `Valid US number: ${input.value}`;
    console.log(`7`)
  }
  else{
    result.innerText = `Invalid US number: ${input.value}`;
  }
}

function clearBtn(){
  result.innerText = "";
}

const regex = /^\d\s\d+\s\d+\s\d+$/;
const str = "1 555 555 5555";
console.log(regex.test(str));
console.log("2 (757) 622-7382"[0])