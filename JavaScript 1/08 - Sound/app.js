const audioContext = new AudioContext();
let osc = audioContext.createOscillator();

function play() {
  osc = audioContext.createOscillator();
  osc.type = "sawtooth";
  osc.frequency.setValueAtTime(60, audioContext.currentTime);
  osc.connect(audioContext.destination);
  osc.start(audioContext.currentTime);
}

function stop() {
  osc.stop();
}

document.getElementById("play").addEventListener("click", play);

document.getElementById("stop").addEventListener("click", stop);
