let numDOM = document.querySelector("#num");
let memDOM = document.querySelector("#mem");
numDOM.innerHTML = 0;

function num(x){
    if(numDOM.innerHTML == 0){
        numDOM.innerHTML ="";
    }
    
    if(numDOM.innerHTML < 99999999999 && numDOM.innerHTML > -9999999999)
    {
        numDOM.innerHTML += x;
    }
}

function clearBtn(){
    numDOM.innerHTML = "0";
    memDOM.innerHTML = "";
}

let num1;
let num2;
let operation;
let answer;

function op(q){
    
    if(q == "X"){
        num1 = parseFloat(numDOM.innerHTML);
        operation = "×";
        numDOM.innerHTML ="";
        memDOM.innerHTML = num1 + operation;
    }
    else if(q == "-"){
        num1 = parseFloat(numDOM.innerHTML);
        operation = "-";
        numDOM.innerHTML ="";
        memDOM.innerHTML = num1 + operation;
    }
    else if(q == "÷"){
        num1 = parseFloat(numDOM.innerHTML);
        operation = "÷";
        numDOM.innerHTML ="";
        memDOM.innerHTML = num1 + operation;
    }
    else if(q == "+"){
        num1 = parseFloat(numDOM.innerHTML);
        operation = "+";
        numDOM.innerHTML ="";
        memDOM.innerHTML = num1 + operation;
    }
    else if(q == "%"){
        num1 = parseFloat(numDOM.innerHTML);
        operation = "%";
        numDOM.innerHTML ="";
        memDOM.innerHTML = num1 + operation;
    }
    else if(q == "kare"){
        num1 = parseFloat(numDOM.innerHTML);
        operation = "kare";
        numDOM.innerHTML ="";
        memDOM.innerHTML = num1 + "×" + num1 + "=";
        answer = num1 * num1;
        numDOM.innerHTML = answer;
    }
    else if(q == "ters"){
        num1 = parseFloat(numDOM.innerHTML);
        numDOM.innerHTML ="";
        num1 = -num1;
        numDOM.innerHTML = num1;
    }
    else if(q == "1/x"){
        num1 = parseFloat(numDOM.innerHTML);
        numDOM.innerHTML ="";
        answer = 1/num1;
        numDOM.innerHTML = num1;
        memDOM.innerHTML = "1" + "/" + num1 + "=";
        numDOM.innerHTML = answer;
    }
    else if(q == "√x"){
        num1 = parseFloat(numDOM.innerHTML);
        numDOM.innerHTML ="";
        answer = Math.sqrt(num1);
        numDOM.innerHTML = num1;
        memDOM.innerHTML = "√" + num1 + "=";
        numDOM.innerHTML = answer;
    }
    else if(q == "answer"){
        num2 = parseFloat(numDOM.innerHTML);
        if(operation == "×"){
            answer = num1 * num2;
        }
        else if(operation == "-"){
            answer = num1 - num2;            
        }
        else if(operation == "÷"){
            answer = num1 / num2;            
        }
        else if(operation == "+"){
            answer = num1 + num2;            
        }
        else if(operation == "%"){
            answer = num1 % num2;            
        }
        
        memDOM.innerHTML += num2;
        memDOM.innerHTML += "=";
        numDOM.innerHTML = answer;
    }
}