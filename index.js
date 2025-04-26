// calculator

const display = document.getElementById("display");
 
function appendToDisplay(input){
    display.value += input;

}

function clearDisplay(){
    display.value =" ";
}

function deleteFromDisplay(){
    display.value= display.value.slice(0,-1);
}


function calculate(){
    try{

        // to handle error when multiple operators are inputted
        let operators = ["+", "-", "*", "/"];
        let count = 0;
        for (let op of operators) {
            if (display.value.includes(op)) {
                count++;
            }
        }

        if (count !== 1) {
            display.value = "Error: Only one operation allowed";
            return;
        }

       let result;
       //for addition:
       if(display.value.includes ("+")){

           let[a,b]  = display.value.split("+").map(Number);
           result = a + b;
           
           display.value = result;
       }

       //for subtraction:
       if(display.value.includes ("-")){

        let[a,b]  = display.value.split("-").map(Number);
        result = a - b;
        
        display.value = result;
    }

    //for multiplication:
    if(display.value.includes ("*")){

        let[a,b]  = display.value.split("*").map(Number);
        result = a * b;
        
        display.value = result;
    }

    //for division:
    if(display.value.includes ("/")){

        let[a,b]  = display.value.split("/").map(Number);

        if(b===0){
            display.value="Error: Divide by zero error";
        }

        else{

            result = (a / b).toFixed(15);
            
            display.value = result;
        }
    }

    }
    catch(error){
    display.value="Error";
    }
}