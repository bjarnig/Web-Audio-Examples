let w = window.innerWidth;
let h = window.innerHeight;
let synth, synth2;

function setup() {
  canvas = createCanvas(w, h);
}

function start() {
  synth = new Tone.FMSynth({
    modulationIndex: 10,
    harmonicity: 50,
    envelope: {
      attack: 0.1,
      decay: 0.5,
      release: 1.0,
    },
    modulation: {
      type: "triangle",
    },
    modulationEnvelope: {
      attack: 0.5,
      decay: 0.01,
    },
  }).toDestination();

  synth2 = new Tone.FMSynth({
    frequency: 20,
    modulationIndex: 1000,
    harmonicity: 50,
    envelope: {
      attack: 0.1,
      decay: 0.5,
      release: 5.0,
    },
    modulation: {
      type: "triangle",
    },
    modulationEnvelope: {
      attack: 0.5,
      decay: 0.01,
    },
  }).toDestination();
}

function mouseReleased() {
  synth2.triggerRelease(Tone.now());
  synth.triggerRelease(Tone.now());
}

function mousePressed() {
  if (!synth) {
    start();
  }

  synth2.triggerAttack(mouseX * 0.3, Tone.now());
  synth.triggerAttack(mouseX, Tone.now());
}

function draw() {
  if (mouseIsPressed) {
    fill(100);
  } else {
    fill(200);
  }

  circle(mouseX, mouseY, 50);
}

window.onresize = function () {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;
  canvas = createCanvas(w, h);
};
