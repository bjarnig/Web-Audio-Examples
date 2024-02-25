
/* objects are similar to dictionaries or events in SuperCollider */

// {} for new object
let melody = {};

function objMelody() {

    // .notation to add a property to an object
    melody.pitches = [60,64,68];
    melody.durations = [1,1,4,8];
    melody.amplitudes = [0.2,0.4];
    melody.play = function() {
        let counter = 1;
        for (const pitch of this.pitches) {
            setTimeout(() => { console.log(pitch); }, 1000 * counter);
            counter = counter + 1;
        }
    }

    console.log(melody);
}

// Call the play method of the object melody
function playMelody() {
    melody.play();
}

// Call the play method of the object melody
function manipulate() {

    // Add new properties
    melody.title = "Sad Song";

    // Set object properties
    melody.durations = Array.from({length: 3}, () => Math.floor(Math.random() * 60));

    // Use dictionary addressing
    melody['amplitudes'] = [1,2];

    melody.stuff = 123;

    console.log(melody);
}

// Iterate the object and display the attributes
function display() {
    console.log(melody);
    for(attribute in melody) {
        alert(attribute);
    }
}
