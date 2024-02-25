
function arrays() {

    // define an array
    let list = ['Johan','Richard','Peter'];

    // index it using []
    list[1] = 'Graham';

    // log the whole array
    console.log(list);

    // log the length (size) of the array
    console.log(list.length);
}

function queue() {

    // define an array
    let array = [1,2,3,4];

    // push, the array syntax is similar to a queue, adding items
    array.push(5);

    // print the array
    console.log(array)

    // shift, get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.
    array.shift();

    // print the array
    console.log(array)

    // pop, remove an item
    array.pop();

    // print the array
    console.log(array);
}

// Listen to the click event of the button
document.getElementById("arrays1").addEventListener("click", arrays);
document.getElementById("arrays2").addEventListener("click", queue);
