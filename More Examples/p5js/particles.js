// Height and Width of the full window
let w = window.innerWidth;
let h = window.innerHeight;

// Create and play a Tone Synth
function synth(freq, dur) {
  const fm = new Tone.FMSynth({
    modulationIndex: 10,
    harmonicity: 25,
    envelope: {
      attack: 0.1,
      decay: 0.75,
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
  fm.volume.value = -9;
  fm.triggerAttackRelease(freq, dur);
}

// A class for the properties of a single particle.
class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.r = random(10, 20);
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-1, 1.5);
  }

  // creation of a particle.
  createParticle() {
    noStroke();
    fill("#D3FBD8");
    circle(this.x, this.y, this.r);
  }

  // setting the particle in motion.
  moveParticle() {
    
    // Detect edges (width)
    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
      synth(
        map(mouseY, 0, height, 60, 200), 
        map(mouseX, 0, width, 0.5, 2)
      );
    }

    // Detect edges (height)
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
      synth(
        map(mouseY, 0, height, 1000, 5000),
        map(mouseX, 0, width, 0.01, 0.02)
      );
    }
    
    // Bounce back
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  // Creates the connections(lines)
  // between particles which are less than a certain distance apart
  joinParticles(particles) {
    particles.forEach((element) => {
      let dis = dist(this.x, this.y, element.x, element.y);
      if (dis < 85) {
        stroke("#DAF3FF");
        line(this.x, this.y, element.x, element.y);
      }
    });
  }
}

// Array to add multiple particles
let particles = [];

function setup() {
  createCanvas(w, h);
  for (let i = 0; i < w / 50; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background("#171b21");
  for (let i = 0; i < particles.length; i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
}

window.onresize = function () {
  w = window.innerWidth;
  h = window.innerHeight;
  canvas = createCanvas(w, h);
};