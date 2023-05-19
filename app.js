const buttons = document.querySelectorAll("button");
const result = document.querySelector("input");

const btnInput = (input) => {
   if(input === "ac"){
    result.value = "";
   }else if(input === "del"){
    result.value = result.value.slice(0,-1);
   }else if(input === "="){
      calculate(result.value) ;
   }else{
    result.value += input ;
   }
}


//keyboard input handler
const keyBoardInputHandler = (e) => {

const keys = ["1","2","3","4","5","6","7","8","9","0","/","*","-","+"];

e.preventDefault() ;
    if(keys.includes(e.key)){
        result.value += e.key;
    }
    if(e.key === "Enter"){
       calculate(result.value);
    }
    if(e.key === "Backspace"){
         result.value = result.value.slice(0,-1);
    }
    
}
    
document.addEventListener("keydown",keyBoardInputHandler);

const calculate = (valueString) => {
    try {
        const evaluatedResult = eval(valueString);
    console.log(evaluatedResult);
    result.value = evaluatedResult ;
    } catch (error) {
        result.value = "Error !" ;
        setTimeout(()=>{
            result.value = "";
        },1000);
    }
}
