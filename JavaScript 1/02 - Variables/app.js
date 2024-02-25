
function variablesAlert() {

    // Variables that can be changed are defined with 'let'
    let text = 'Composing Sounds';

    // Reassign the variable with a different string
    text = 'With Algorithms';

    // Display the text in an alert box
    alert(text);
}

function variablesConsole() {

    // Variables that can not be changed are defined with 'const'
    const text = 'Fixed Media';

    // Display the text in the console window of the browser
    console.log(text);
}

function variablesDataTypes() {

    // Strings, can use both single and double quote
    const text = "Sono" + "logy";
    console.log(text);

    // Number
    const number = 10 + 10;
    console.log(number);

    // Boolean
    const isTrue = 1 === 2;
    console.log(isTrue);

    // Undefined
    let unassigned;
    console.log(unassigned);

    // Null
    const nothing = null;
    console.log(nothing);

    // Objects
    const note = { pitch : 60, duration : 2, amplitude : 0.5 };
    console.log(note);

    // Arrays
    const array = [440,'pitch',false];
    console.log(array);

    // Functions
    let f = function() { 'do stuff!' };
    console.log(f);
    console.log(typeof f);
}

// Listen to the click event of the play button
document.getElementById("buttonAlert").addEventListener("click", variablesAlert);
document.getElementById("buttonConsole").addEventListener("click", variablesConsole);
document.getElementById("buttonDataTypes").addEventListener("click", variablesDataTypes);
