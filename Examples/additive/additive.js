let context = new AudioContext();
let oscNode, gainNode, mainGainNode;
let levelSlider = [];
let levelDisplay = [];
let freqDisplay = [];
let harmonicsCount = 10;

// Assign the update frequency to all sliders
let freqSlider = document.getElementById('freq-slider');
freqSlider.addEventListener('input', updateFrequency);

// initialise the UI elements and assign update gain to all gains
for (let i = 0; i < harmonicsCount; i++) {
  levelDisplay[i] = document.getElementById('level-display-' + (i + 1));
  freqDisplay[i] = document.getElementById('freq-display-' + (i + 1));
  levelSlider[i] = document.getElementById('level-slider-' + (i + 1));
  levelSlider[i].addEventListener('input', updateGain);
}

// Assign the start and stop events
document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);

function start() {
  if (!oscNode) {
    let frequency = parseFloat(freqSlider.value);
    oscNode = [];
    gainNode = [];

    mainGainNode = context.createGain();
    mainGainNode.gain.value = 1;
    mainGainNode.connect(context.destination);          
    
    // In a loop, create all the oscillators
    for (let i = 0; i < harmonicsCount; i++) {
      oscNode[i] = context.createOscillator();
      oscNode[i].type = 'sawtooth';
      oscNode[i].frequency.value = frequency * (i + 1.5);

      gainNode[i] = context.createGain();
      gainNode[i].gain.value = 0;

      oscNode[i].connect(gainNode[i]);
      gainNode[i].connect(mainGainNode);
      oscNode[i].start();
    }

    updateGain();
  }
}

function stop() {
  if (oscNode) {

    let release = 3;

    // ramp the gain to zero
    for (let i = 0; i < harmonicsCount; i++) {
      gainNode[i].gain.setValueAtTime(gainNode[i].gain.value, context.currentTime);
      gainNode[i].gain.linearRampToValueAtTime(0, context.currentTime + release);
    }
    
    // use a timeout to disconnect nodes
    setTimeout(function () {
      for (let i = 0; i < harmonicsCount; i++) {
        oscNode[i].stop();
        gainNode[i].disconnect();
      }

      mainGainNode.disconnect(context.destination);            

      oscNode = undefined;
      gainNode = undefined;
      mainGainNode = undefined;
    }, release * 1000);
  }
}

function updateGain() {
  let totalGain = 0;
  let maxGain = 0;

  // Update the UI
  for (let i = 0; i < harmonicsCount; i++) {
    let gain = parseFloat(levelSlider[i].value);
    levelDisplay[i].textContent = gain.toFixed(2);
    totalGain += gain;
    maxGain = Math.max(gain, maxGain);
  }

  let gainFactor = totalGain > 0 ? maxGain / totalGain : 0;
  
  // Set the gain of the oscillators
  if (gainNode) {
    for (let i = 0; i < harmonicsCount; i++) {
      gainNode[i].gain.setValueAtTime(gainNode[i].gain.value, context.currentTime);
      gainNode[i].gain.linearRampToValueAtTime(parseFloat(levelSlider[i].value) * gainFactor, context.currentTime + 0.01);
    }
  }
}

function updateFrequency() {
  
  // Update the the frequency of all the oscillators
  for (let i = 0; i < harmonicsCount; i++) {
    let frequency = parseFloat(freqSlider.value) * (i + 1);
    freqDisplay[i].textContent = frequency + ' hz';

    if (oscNode) {
      oscNode[i].frequency.value = frequency;
    }
  }
}

updateFrequency();
updateGain();