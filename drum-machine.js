const sounds = {
    KeyA: { button: 'btnA', audio: 'audioA' },
    KeyS: { button: 'btnS', audio: 'audioS' },
    KeyD: { button: 'btnD', audio: 'audioD' },
    KeyF: { button: 'btnF', audio: 'audioF' },
    KeyG: { button: 'btnG', audio: 'audioG' },
    KeyH: { button: 'btnH', audio: 'audioH' },
    KeyJ: { button: 'btnJ', audio: 'audioJ' },
    KeyK: { button: 'btnK', audio: 'audioK' },
    KeyL: { button: 'btnL', audio: 'audioL' }
};

let currentAudio = null;
let currentButton = null;

window.addEventListener('keydown', function (event) {
    const sound = sounds[event.code];

    if (!sound || event.repeat) {
        return;
    }

    const audio = document.getElementById(sound.audio);
    const button = document.getElementById(sound.button);

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    if (currentButton) {
        currentButton.classList.remove('playing');
    }

    audio.currentTime = 0;
    audio.play();

    button.classList.add('playing');

    currentAudio = audio;
    currentButton = button;
});

window.addEventListener('keyup', function (event) {
    const sound = sounds[event.code];

    if (!sound) {
        return;
    }

    const button = document.getElementById(sound.button);
    button.classList.remove('playing');
});
