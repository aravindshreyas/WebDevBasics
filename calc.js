let resultContent = 0,
    flag = 0,
    previousOperand = 0,
    operator = '';
    
function equate(input) {
    previousOperand = Number(previousOperand);
    let output = 0;
    if (operator == 'multiply') {
        output = previousOperand * Number(input);
    } else if (operator == "plus") {
        output = previousOperand + Number(input);
    } else if (operator == 'minus') {
        output = previousOperand - Number(input);
    } else if (operator == 'divide') {
        if (input == '0') {
            output = 'infinity';
        } else {
            output = previousOperand / Number(input);
        }

    } else if(operator==''){
        output = input;
    } 
    operator = '';
    previousOperand = output;
    output = String(Number(output.toFixed(10)));
    return output;
}
function readButton(button) {
    let output = 0,
        input = readInput();
    if (button == 'clear') {
        output = 0;
        previousOperand = 0;
        resultContent = 0;
        flag = 0;
        operator = '';
        writeOutput(output);
    } else if (button == 'negate') {
        if (operator == '') {
            output = (-1) * Number(input);
        } else {
            output = equate(input);
            output = (-1) * Number(output);
            console.log(output);
        }
        output = String(Number(output.toFixed(10)));
        writeOutput(output);
    } else if (button == 'percentage') {
        if (operator == '') {
            output = Number(input) / 100;
        } else {
            output = equate(input);
            output = Number(output) / 100;
            console.log(output);
        }
        output = String(Number(output.toFixed(10)));
        writeOutput(output);
    } else if (button == 'divide' || button == 'multiply' || button == 'plus' || button == 'minus') {

        if (operator == '') {
            output = input;
        } else {
            output = equate(input);
        }
        previousOperand = output;
        operator = button;
        flag = 1;
        writeOutput(output);

    } else if (button == '0' || button == '1' || button == '2' || button == '3' || button == '4' || button == '5' || button == '6' || button == '7' || button == '8' || button == '9') {
        if (flag == 0) {
            if (input.includes('.')) {
                resultContent = Number(input + button);
            } else {
                resultContent = 10 * resultContent + Number(button);
            }

            output = resultContent;
            writeOutput(output);
        } else {
            resultContent = Number(button);
            output = resultContent;
            writeOutput(output);
            flag = 0;
        }

    } else if (button == '.') {
        if (!input.includes('.')) {
            output = input + '.';
            writeOutput(output);
        }

    } else if (button == 'equals') {
        output = equate(input);
        writeOutput(output);
        resultContent = 0;
    }

}


function readInput() {
    let input = document.getElementById('res').innerHTML;
    return input;
}


function writeOutput(output) {
    document.getElementById('res').innerHTML = output;
}