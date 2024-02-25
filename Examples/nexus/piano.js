
const piano = new Nexus.Piano('#piano',{
    'size': [1000,500],
    'mode': 'button',  // 'button', 'toggle', or 'impulse'
    'lowNote': 24,
    'highNote': 80
});

let synth = new Tone.AMSynth().toDestination();

piano.on('change', function(object) {

    console.log(object);

    if(object.state) {
        synth.harmonicity.value = 10.5;
        synth.triggerAttack(object.note);
    } else {
        synth.triggerRelease();
    }

})