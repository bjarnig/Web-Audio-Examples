var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var i; //general reusable counter variable
var audioblocksize = 256; //lowest latency possible
var onsetdetector;

var setup = function SetUp(sampleRate) {
    console.log("setup!");
    onsetdetector = new MMLLOnsetDetector(sampleRate); //default threshold 0.34
};

var callback = function CallBack(input,output,n) {

    var detection = onsetdetector.next(input.monoinput);

    if(detection) {
        console.log('onsetnow');
        
        var randomcolor = "rgb(" +(Math.floor(Math.random()*255.9999))+ "," +(Math.floor(Math.random()*255.9999))+ "," +(Math.floor(Math.random()*255.9999))+ ")";
        
        context.fillStyle = randomcolor;
        context.fillRect(0,0,canvas.width,canvas.height);
    }

    // for each sample
    for (i = 0; i < n; ++i) {
        output.outputL[i] = input.inputL[i];
        output.outputR[i] = input.inputR[i]; 
    }
};

var gui = new MMLLBasicGUISetup(callback,setup,audioblocksize,true,true);

function setThreshold(newValue) {
    
    var threshold = parseFloat(newValue)*0.01;
    onsetdetector.threshold = threshold;
}

