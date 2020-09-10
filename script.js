var wrapperEle = document.body.querySelector(".wrapper");
var answer = 0;
var number1 = Number(prompt("Enter a number"));
if(isNaN(number1)==false){
  var number2 = Number(prompt("Enter another number"));
  if(isNaN(number2)==false){
    var operator = prompt("Choose an operator +-*/");
    if(operator=="+"){
      answer=number1+number2;
      wrapperEle.innerHTML="The answer is "+answer;
    }else if(operator=="-"){
      answer=number1-number2;
      wrapperEle.innerHTML="The answer is "+answer;
    }else if(operator=="*"){
      answer=number1*number2;
      wrapperEle.innerHTML="The answer is "+answer;
    }else if(operator=="/"){
      answer=number1/number2;
      wrapperEle.innerHTML="The answer is "+answer;
    }else{
       wrapperEle.innerHTML="The operator is invalid";
    } 
  }else{
      wrapperEle.innerHTML="The second number is invalid";
  }
}else{
  wrapperEle.innerHTML="The first number is invalid";
}

// example one

// if("cat"==prompter){
//   wrapperEle.innerHTML="Statement is true";
// }else if("dog"==prompter){
// wrapperEle.innerHTML="Statement is a dog";
// }else{
//  wrapperEle.innerHTML="Statement is false";
// }

// example two

//   if("cat"==prompter){
//  wrapperEle.innerHTML="Statement is true";
// }

// if("dog"==prompter){
//   wrapperEle.innerHTML="Statement is a dog";
// }

// if("cat"!=prompter&&"dog"!=prompter){
//   wrapperEle.innerHTML="Statement is false";
// }

// isNaN?