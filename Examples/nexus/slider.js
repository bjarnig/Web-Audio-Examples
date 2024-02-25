let synth;
let values;

const multislider = new Nexus.Multislider('#slider',{
    'size': [800,600],
    'numberOfSliders': 5,
    'min': 0,
    'max': 1,
    'step': 0,
    'candycane': 3,
    'values': [0.9,0.8,0.7,0.6,0.5,0.4,0.3,0.2,0.1],
    'smoothing': 0,
    'mode': 'bar'  // 'bar' or 'line'
});

const button = new Nexus.Button('#button',{
    'size': [80,80],
    'mode': 'aftertouch',
    'state': false
});

multislider.on('change',function(v) {
    console.log(v);
    values = v;
});

button.on('change',function(v) {
    console.log(v);    
    synth = new Tone.FMSynth({
        modulationIndex : values[0]
    }).toDestination();
    synth.triggerAttackRelease("C3", 3);
});