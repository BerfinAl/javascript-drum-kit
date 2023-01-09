const buttons = document.querySelectorAll("button")

const sounds = {
  'KeyS': 'sounds/hihat.wav',
  'KeyA': 'sounds/clap.wav',
  'KeyD': 'sounds/kick.wav',
  'KeyF': 'sounds/openhat.wav',
  'KeyG': 'sounds/boom.wav',
  'KeyH': 'sounds/ride.wav',
  'KeyJ': 'sounds/snare.wav',
  'KeyK': 'sounds/tom.wav',
  'KeyL': 'sounds/tink.wav',
}

const play = sound => {
  const audio = new Audio(sound);
  audio.play();
}

function toggle(e) {
  const dataKey = e.code || e.path[0].dataset.key
  const btn = document.querySelector(`button[data-key='${dataKey}']`);
  if (btn) btn.className ? btn.classList.remove("playing") : btn.classList.add("playing")
  if (btn) play(sounds[dataKey]) 
}

buttons.forEach((btn) => {
  btn.addEventListener("keydown", toggle);
  btn.addEventListener("keyup",  toggle);
  btn.addEventListener("mousedown", toggle)
  btn.addEventListener("mouseup", toggle)
  btn.focus({ focusVisible: false });
});

document.addEventListener("click", () => {
  buttons.forEach((button) => button.focus());
});

