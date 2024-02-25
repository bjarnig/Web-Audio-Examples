let w = window.innerWidth;
let h = window.innerHeight;
let capture;
let bell;
let red=[],green=[],blue=[];

function setup() {
  frameRate(1);
  canvas = createCanvas(w, h);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
}

let part, isPlaying = false;

function mouseClicked() {

  if (!isPlaying) {
    bell = new Tone.MetalSynth({
      harmonicity: 20,
      resonance: 800,
      modulationIndex: 4,
      envelope: {
        decay: 0.4,
      },
      volume: -15,
    }).toDestination();

    part = new Tone.Sequence(
      (time, freq) => {
        console.log([time, freq]);
        bell.triggerAttack(freq, time, Math.random() * 0.5 + 0.5);
      },
      [
        green
      ],
      "50"
    ).start(0);

    Tone.Transport.bpm.value = 115;
    Tone.Transport.start();
    isPlaying = true;
  } else {
    Tone.Transport.stop();
    isPlaying = false;
  }
}

function draw() {
  background("#171b21");
  capture.loadPixels();
  red=[]; green=[]; blue=[];

  // Iterate through the pixels
  var stepSize = floor(map(mouseX, 0, width, 50, 20));
  for (var x = 0; x < capture.width; x += stepSize) {
    for (var y = 0; y < capture.height; y += stepSize) {
      var index = (y * capture.width + x) * 4;

      // Colors
      var redVal = capture.pixels[index];
      var greenVal = capture.pixels[index + 1];
      var blueVal = capture.pixels[index + 2];
      
      // Store the color values
      red.push(redVal);
      green.push(greenVal);
      blue.push(blueVal);
      
      // Box
      strokeWeight(1);
      stroke("#171b21");

      // Rectangle
      fill(redVal, greenVal, blueVal);
      rectMode(CENTER);
      rect(x, y, stepSize, stepSize);
    }
  }
}

window.onresize = function () {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;
  canvas = createCanvas(w, h);
};