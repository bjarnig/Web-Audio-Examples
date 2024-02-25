
var sequencer = new Nexus.Sequencer('#sequencer', {
    'size': [400,200],
    'mode': 'toggle',
    'rows':4,
    'columns': 4
});

var button = new Nexus.Button('#button',{
    'size': [80,80],
    'mode': 'aftertouch',
    'state': false
});

sequencer.on('change',function(v) {
    console.log(v);
});

sequencer.on('step',function(v) {
    console.log(v);
});

button.on('change',function(v) {
    sequencer.next( );
});

sequencer.start();


