// math calculator

let display = document.getElementById("calc-display");

let currentNumber = "";
let firstNumber = "";
let operator = "";
let result = "";

let buttons = document.querySelectorAll(".calculator-keyboard button");

buttons.forEach(function(button) {
    button.addEventListener("click", function(){

        let value = button.textContent.trim();

        // clear it 

        if (value === "C"){
            currentNumber = "";
            firstNumber = "";
            operator = "";
            result = "";

            display.textContent = "0";
        }

        // delete 

        else if (value === "del"){
            currentNumber = currentNumber.slice(0,-1);

            if (currentNumber === ""){
                display.textContent = "0";
            } else {
                display.textContent = currentNumber;
            }
        }

        // operators 

        else if (
            value ==="+" ||
            value === "-" ||
            value === "x" ||
            value === ":"
        ) {
            if (currentNumber !== ""){
                firstNumber = Number(currentNumber);
                operator = value;
                currentNumber = "";

                display.textContent = value;
            }
        }

        // equals 

        else if (value === "="){
            if (firstNumber !== "" && currentNumber !== ""){
                let secondNumber = Number(currentNumber);

                if (operator === "+"){
                    result = firstNumber + secondNumber;
                }

                else if (operator === "-") {
                    result = firstNumber - secondNumber;
                }

                else if (operator === "x"){
                    result = firstNumber * secondNumber
                }

                else if (operator === ":"){
                    if (secondNumber === 0 ){
                        display,textContent = "error";
                        return;
                    }
                    result = firstNumber / secondNumber;
                }

                display.textContent = result;

                currentNumber = String(result);
                firstNumber = "";
                operator = "";
            }
        }

        // percentage 

        else if (value === "%"){
            if (currentNumber !== ""){
                currentNumber = Number(currentNumber) / 100;
                display.textContent = currentNumber;
            }
        }

        // number 
        else {
            currentNumber = currentNumber + value;
            display.textContent = currentNumber;
        }
    });
});





// percentage change and drift secton 




let percentageCard = document.querySelector(".percentage-card");
let changeInputs = percentageCard.querySelectorAll(".input-field input");

let initialValueInput = changeInputs[0];
let finalValueInput = changeInputs[1];

let changeOutputs = percentageCard.querySelectorAll(".out-value");

// change cal

function calculatePercentageChange (){
    let initialValue = Number(initialValueInput.value);
    let finalValue = Number(finalValueInput.value);
    if(
        initialValueInput.value === "" ||
        finalValueInput.value === ""
    ){
        return;
    }

    if (initialValue === 0){
        changeOutputs[0].textContent = "error";
        changeOutputs[1].textContent = "eror";
        changeOutputs[2].textContent = "0";

        return;
    }

    let difference = finalValue - initialValue;

    let percentageChange = (difference / initialValue) * 100;

    changeOutputs[0].textContent = percentageChange.toFixed(2) + "%";

    if (difference >= 0){
        changeOutputs[1].textContent = "+" + difference.toFixed(2);
    }
    else {
        changeOutputs[1].textContent = difference.toFixed(2);
    }

    changeOutputs[2].textContent = finalValue.toFixed(2);
}



initialValueInput.addEventListener("input", function() {
    calculatePercentageChange();
});

finalValueInput.addEventListener("input", function(){
    calculatePercentageChange();
});


calculatePercentageChange();