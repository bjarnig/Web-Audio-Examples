function run1() {
  let context = new AudioContext();

  // initialize beet
  let beet = new Beet({
    context: context,
    tempo: 100,
  });

  // create a euclidean pattern - 5 pulses distrubted in 7 steps
  let pattern = beet.pattern(5, 7);

  // create a beet layer - pass it the pattern and a callback
  let layer = beet.layer(pattern, callback);

  function callback(time) {
    let osc = context.createOscillator();
    osc.connect(context.destination);
    osc.start(time);
    osc.stop(time + 0.5);
  }

  // add the layer
  beet.add(layer);

  // start the sequencer
  beet.start();
}

function run2() {
  let context = new AudioContext();
  let beet = new Beet({
    context: context,
  });
  let pattern = beet.pattern(9, 13);

  function callback(time) {
    let osc = context.createOscillator();
    osc.frequency.value = 800;
    osc.connect(context.destination);
    osc.start(time);
    osc.stop(time + 0.1);
  }
  let layer = beet.layer(pattern, callback);
  beet.add(layer).start();
  beet.start();
}

function run3() {
  
  let context = new AudioContext();
  let beet = new Beet({
    context: context,
  });

  function callback1(time) {
    let osc = context.createOscillator();
    osc.connect(context.destination);
    osc.start(time);
    osc.stop(time + 0.1);
  }

  function callback2(time) {
    let osc = context.createOscillator();
    osc.connect(context.destination);
    osc.start(time);
    osc.stop(time + 0.1);
  }

  function callback3(time) {
    let osc = context.createOscillator();
    osc.connect(context.destination);
    osc.start(time);
    osc.stop(time + 0.1);
  }

  let pattern1 = beet.pattern(4, 8); // returns 10101010
  let layer1 = beet.layer(pattern1, callback1);
  layer1.tempo = 120;
  
  let pattern2 = beet.pattern(3, 8); // returns 10100100
  let layer2 = beet.layer(pattern2, callback2);
  layer2.tempo = 60;
  
  let pattern3 = beet.pattern(3, 4); // returns 1111
  let layer3 = beet.layer(pattern3, callback3);
  layer2.tempo = 40;
  
  beet.add(layer1);
  beet.add(layer2);
  beet.add(layer3);
  beet.start();
}

document.getElementById("item1").addEventListener("click", run1);
document.getElementById("item2").addEventListener("click", run2);
document.getElementById("item3").addEventListener("click", run3);
