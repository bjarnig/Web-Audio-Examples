let loaded = false;
let audioContext = null;

function init() {

    // Only initialise if it is the first time
    if (!loaded) {
        audioContext = new AudioContext();
        loaded = true;
    }
}

function convolve() {

    init();

    let osc = audioContext.createOscillator();
    let convolver = audioContext.createConvolver();
    let noiseBuffer = audioContext.createBuffer(2, 0.5 * audioContext.sampleRate, audioContext.sampleRate);
    let left = noiseBuffer.getChannelData(0);
    let right = noiseBuffer.getChannelData(1);
    
    // Fill a custom buffer 
    for (let i = 0; i < noiseBuffer.length; i++) {
        left[i] = Math.random() * 2 - 1;
        right[i] = Math.random() * 2 - 1;
    }
    
    // Connect the nodes
    convolver.buffer = noiseBuffer;
    osc.connect(convolver);
    convolver.connect(audioContext.destination);
    osc.start();
}

function script() {

    init();

    let node = audioContext.createScriptProcessor(1024, 1, 1);
    let osc = audioContext.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = 100 * Math.random();

    node.bits = 2; // between 1 and 16
    node.normfreq = 0.1; // between 0.0 and 1.0
    var step = Math.pow(0.2, node.bits);
    var last = 0;
    
    // Custom processing of the sound processing
    node.onaudioprocess = function(e) {
        var input = e.inputBuffer.getChannelData(0);
        var output = e.outputBuffer.getChannelData(0);

        for (var i = 0; i < 1024; i++) {
            let value = step + ( 0.5 * Math.random() );
            last =  step * Math.floor(input[i] / value);
            output[i] = last;
        }
    };

    const compressor = audioContext.createDynamicsCompressor();
    compressor.threshold.value = -50;
    compressor.knee.value = 40;
    compressor.ratio.value = 12;
    compressor.attack.value = 0;
    compressor.release.value = 0.25;
    
    osc.connect(node);
    node.connect(compressor);
    compressor.connect(audioContext.destination);
    osc.start();
}

// Listen to the click event of the button
document.getElementById("item1").addEventListener("click", convolve);
document.getElementById("item2").addEventListener("click", script);