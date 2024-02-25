function forloop() {

    // for loop, runs 10 times, with values of step 0 through 9.
    for (let step = 0; step < 10; step++) {
        console.log(step);
    }
}

function doloop() {

    // do loop will always do it once before evaluating the check
    let i = 0;

    do {
        i += 1;
        console.log(i);
    } while (i < 5);
}

function whileloop() {

    // while loop is like do except it it checks in the beginning
    let n = 0;

    while (n < 3) {
        n++;
        console.log(n);
    }
}

function forof() {
    const arr = [3, 5, 7];

    // Iterates the array
    for (let i of arr) {
        console.log(i);
    }
}

function forin() {
    let obj = {
        sound: 'sine',
        duration: 10,
        freq: 444
    };

    // For in will iterate the object
    for (let property in obj) {
        console.log('Key:' + property);
        console.log('Value:' + obj[property]);
    }
}

document.getElementById("forloop").addEventListener("click", forloop);
document.getElementById("doloop").addEventListener("click", doloop);
document.getElementById("whileloop").addEventListener("click", whileloop);
document.getElementById("forof").addEventListener("click", forof);
document.getElementById("forin").addEventListener("click", forin);
