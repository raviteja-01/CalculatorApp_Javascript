const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");
const btn0 = document.getElementById("btn-0");
const btnAdd = document.getElementById("btn-add");
const btnSub = document.getElementById("btn-sub");
const btnDiv = document.getElementById("btn-div");
const btnMultiply = document.getElementById("btn-multiply");
const btnPeriod = document.getElementById("btn-period");
const screenDisplayElement = document.getElementById("screen-heading");
const resetButton = document.getElementById("btn-reset");
const btnDel = document.getElementById("btn-del");
const resultButton = document.getElementById("btn-result")

function resetDisplayScreen(){
    screenDisplayElement.innerText = 0
}

function displayScreenContent(textContent){
    let displayContent = screenDisplayElement.innerText + textContent;
    screenDisplayElement.innerText = displayContent;
}

btn1.onclick = function(){
    displayScreenContent(btn1.innerText);
}

btn2.onclick = function(){
    displayScreenContent(btn2.innerText);
}

btn3.onclick = function(){
    displayScreenContent(btn3.innerText);
}

btn4.onclick = function(){
    displayScreenContent(btn4.innerText);
}

btn5.onclick = function(){
    displayScreenContent(btn5.innerText);
}

btn6.onclick = function(){
    displayScreenContent(btn6.innerText);
}

btn7.onclick = function(){
    displayScreenContent(btn7.innerText);
}

btn8.onclick = function(){
    displayScreenContent(btn8.innerText);
}

btn9.onclick = function(){
    displayScreenContent(btn9.innerText);
}

btn0.onclick = function(){
    displayScreenContent(btn0.innerText);
}

btnPeriod.onclick = function(){
    displayScreenContent(btnPeriod.innerText);
}

btnAdd.onclick = function(){
    let displayContent = btnAdd.innerText
    displayScreenContent(displayContent);
}
btnSub.onclick = function(){
    let displayContent = btnSub.innerText
    displayScreenContent(displayContent);
}
btnDiv.onclick = function(){
    let displayContent = btnDiv.innerText 
    displayScreenContent(displayContent);
}
btnMultiply.onclick = function(){
    let displayContent = btnMultiply.innerText 
    displayScreenContent(displayContent);
}

resetButton.onclick = function(){
    resetDisplayScreen();
}

btnDel.onclick = function(){
    let displayContent = screenDisplayElement.innerText;
    if (displayContent.length !==0){
        displayContent = displayContent.substring(0,displayContent.length-1);
        screenDisplayElement.innerText = displayContent
    }
    else{
        screenDisplayElement.innerText = ""
    }
}

resultButton.onclick = function(){
    let displayedContent = screenDisplayElement.innerText;
    let operatorIndex = null; 
    let result = null;
    for (let i=0; i<displayedContent.length; i++){
        let char = displayedContent[i];
        if (char ==="+" || char === "-" || char === "x" || char === "/"){
            operatorIndex = i;
            break;
        }
    }
    let leftSideNum = +displayedContent.slice(0,operatorIndex);
    let rightSideNum = +displayedContent.slice(operatorIndex+1,displayedContent.length);
    console.log(leftSideNum)
    console.log(rightSideNum)
    let operator = displayedContent[operatorIndex]
    if (operator === "+"){
        result = leftSideNum + rightSideNum
    }else if (operator === "-"){
        result = leftSideNum - rightSideNum
    }else if (operator === "x"){

        result = leftSideNum * rightSideNum
    }else if (operator === "/"){
        result = leftSideNum / rightSideNum
    }
    screenDisplayElement.innerText = result
}




