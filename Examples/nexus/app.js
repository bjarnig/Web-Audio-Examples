// Create interfaces
let power = new Nexus.Toggle("#power");
let gain = new Nexus.Slider("#gain");
let volume;
let synth;

// Listen for interface events
power.on('change',function(v) {

    volume = new Tone.Volume(-10).toDestination();

    const synth = new Tone.FMSynth({
        'modulationIndex' : 10,
        'harmonicity' : 5,
        'envelope' : {
            'attack' : 0.1,
            'decay' : 0.5
        },
        'modulation' : {
            'type' : 'triangle'
        },
        'modulationEnvelope' : {
            'attack' : 0.5,
            'decay' : 0.01
        }
    }).connect(volume);

    synth.triggerAttackRelease('C3', '20');
   
});

gain.on('change',function(v) {
  if(volume) {
    console.log(v);
    volume.volume.rampTo(v,.1);
  } 
});

gain.min = -100;
gain.max = 0;
gain.value = -30;