///display number and symbol
function show(value){

    document.getElementById("display").value += value;

}

///calculation
function calculate(){

    let expression =
    document.getElementById("display").value;

    expression =
    expression.replace(/√\(/g , "Math.sqrt(");

    expression =
    expression.replace(/log\(/g , "Math.log10(");

    expression =
    expression.replace(/ln\(/g , "Math.log(");

    expression =
    expression.replace(/\^/g , "**");


    ///factorial
    if(expression.includes('!')){

        let num =
        parseInt(expression);

        let fact = 1;

        for(let i = 1; i <= num; i++){

            fact *= i;

        }

        document.getElementById("display").value =
        fact;

        return;
    }

    ///eval who calculate in JavaScript
    document.getElementById("display").value =
    eval(expression);

    

}

///for AC button
function clearDisplay(){

    document.getElementById("display").value = "";

}


///for Backspace
function backspace(){

    let display =
    document.getElementById("display");

    display.value =
    display.value.slice(0, -1);

}


