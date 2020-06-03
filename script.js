let beats = {
  "65": {
    beat: new Beat("./assets/Piano Chord 331.mp3"),
    button: new Button("#00fffe", 65, "A"),
  },
  "83": {
    beat: new Beat("./assets/Piano Chord 209.mp3"),
    button: new Button("#00fffe", 83, "S"),
  },
  "68": {
    beat: new Beat("./assets/Piano Chord 208.mp3"),
    button: new Button("#00fffe", 68, "D"),
  },
  "70": {
    beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
    button: new Button("tomato", 70, "F"),
  },
  "71": {
    beat: new Beat("./assets/Drum Snare Roll.mp3"),
    button: new Button("tomato", 71, "G"),
  },
  "72": {
    beat: new Beat("./assets/PREL Musical 57.mp3"),
    button: new Button("tomato", 72, "H"),
  },
  "74": {
    beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
    button: new Button("tomato", 74, "J"),
  },
  "75": {
    beat: new Beat("./assets/Musical Compos 33.mp3"),
    button: new Button("lime", 75, "K"),
  },
  "76": {
    beat: new Beat("./assets/Musical Orches 4.mp3"),
    button: new Button("lime", 76, "L"),
  },
};

triggerBeat = (keyCode) => {
  if (keyCode in beats) {
    beats[keyCode].beat.play();
    setTimeout(() => {
      beats[keyCode].button.deselect();
    }, 200);
    beats[keyCode].button.select();
  }
};

document.addEventListener("keydown", (e) => {
  let keyCode = e.keyCode;
  triggerBeat(keyCode);
});
