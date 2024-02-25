function ifElse() {
    const number = 2;

    if (number >= 2) {
        console.log('The number is greater or equal to 2');
    } else {
        console.log('The number is NOT greater than 2');
    }
}

function elseIf() {
    const number = 2;

    if (number > 2) {
        console.log('The number is greater than 2');
    } else if (number < 2) {
        console.log('The number is less than 2');
    } else {
        console.log('The number must be 2!');
    }
}

// === and !== — test if one value is identical to, or not identical to, another.
// < and > — test if one value is less than or greater than another.
// <= and >= — test if one value is less than or equal to, or greater than or equal to, another.

// && — AND; allows you to chain together two or more expressions so that all of them have to individually evaluate to true for the whole expression to return true.
// || — OR; allows you to chain together two or more expressions so that one or more of them have to individually evaluate to true for the whole expression to return true.

function comparing() {
    const value = 123;

    if (value > 45 && (value == 321 || value < 150)) {
        console.log('value is either 321 or between 45 and 150');
    } else {
        console.log('value not 321 and either less than 45 or greater than 150');
    }
}

function switches() {

    let sound = 'drone';

    switch (sound) {
        case 'noise':
            console.log('play noise');
            break;
        case 'texture':
            console.log('generate a texture');
            break;
        case 'drone':
            console.log('include a drone');
            break;
        default:
            console.log('just play a sound');
    }

}

// Listen to the click event of the button
document.getElementById("ifElse").addEventListener("click", ifElse);

// Listen to the click event of the button
document.getElementById("elseIf").addEventListener("click", elseIf);

// Listen to the click event of the button
document.getElementById("comparing").addEventListener("click", comparing);

// Listen to the click event of the button
document.getElementById("switch").addEventListener("click", switches);
