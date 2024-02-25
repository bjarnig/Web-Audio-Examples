// Create a new hydra-synth instance
const hydra = new Hydra({ detectAudio: false });

// Hydra commands
osc(8, -0.5, 1)
  .color(-1.5, -1.5, -1.5)
  .blend(o0)
  .rotate(-0.5, -0.5)
  .modulate(
    shape(4)
      .rotate(0.5, 0.5)
      .scale(2)
      .repeatX(2, 2)
      .modulate(o0, () => mouse.x * 0.0005)
      .repeatY(2, 2)
  )
  .out(o0);

// Global
document.addEventListener("click", function (evnt) {
  // ToneJS sequence
  const synth = new Tone.Synth().toDestination();
  const seq = new Tone.Sequence(
    (time, note) => {
      synth.triggerAttackRelease(note, Math.random(), time);
      // subdivisions are given as subarrays (Tidal style)
    },
    ["C1", ["E4", "D4", "E4"], "C2", ["C3", "C4"]]
  ).start(0);

  Tone.Transport.start();
  Tone.getTransport().bpm.rampTo(180, 10);
  Tone.Transport.stop(Tone.now() + 10);

  osc(5, 0.1)
    .modulate(noise(6), Math.random())
    .diff(o0)
    .modulateScrollY(osc(2).modulate(osc().rotate(), 0.11))
    .scale(Math.random())
    .color(Math.random(), 1.014, 1)
    .out();
});
