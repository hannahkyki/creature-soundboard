var soundA = new Audio('assets/audio/a_clap_drum.mp3');
var soundB = new Audio('assets/audio/b_edm_kick.mp3');
var soundC = new Audio('assets/audio/c_schallende_snare.mp3');
var soundD = new Audio('assets/audio/d_little_guy_sings.mp3');
var soundE = new Audio('assets/audio/e_synth_twinkle_alert.mp3');
var soundF = new Audio('assets/audio/f_ambient_snare.mp3');
var soundG = new Audio('assets/audio/g_hiphop_melody.mp3');
var soundH = new Audio('assets/audio/h_calming_melody_loop.mp3');

function playA() {
    let element = document.querySelector("#creature1");
    let toggle = document.querySelector("#animToggle");
    
    soundA.play();
    setTimeout(resetAudio, 1000, soundA);

    if (toggle.checked) {
        // Code taken & modified from Google with the prompt, "javascript css animation"
        // Google. (2025, November 23). AI Overview [Generative AI chat]. Gemini 2.0.
        // -> Add a class to trigger the animation
        element.classList.add('creatureAnimation');
        
        // -> Remove the class after a delay (or when the animation ends)
        setTimeout(() => {
            element.classList.remove('creatureAnimation');
        }, 700); // Remove after 0.7 seconds
    } else {
        element.classList.add('creatureAnimationB');
        setTimeout(() => {
            element.classList.remove('creatureAnimationB');
        }, 700);
    };
};

function playB() {
    let element = document.querySelector("#creature2");
    let toggle = document.querySelector("#animToggle");
    
    // play sound
    soundB.play();
    setTimeout(resetAudio, 1000, soundB);

    // play animation
    if (toggle.checked) {
        element.classList.add('creatureAnimation');
        setTimeout(() => {
            element.classList.remove('creatureAnimation');
        }, 700);
    } else {
        element.classList.add('creatureAnimationB');
        setTimeout(() => {
            element.classList.remove('creatureAnimationB');
        }, 700);
    };
};

function playC() {
    let element = document.querySelector("#creature3");
    let toggle = document.querySelector("#animToggle");
    
    // play sound
    soundC.play();
    setTimeout(resetAudio, 1000, soundC);

    // play animation
    if (toggle.checked) {
        element.classList.add('creatureAnimation');
        setTimeout(() => {
            element.classList.remove('creatureAnimation');
        }, 700);
    } else {
        element.classList.add('creatureAnimationB');
        setTimeout(() => {
            element.classList.remove('creatureAnimationB');
        }, 700);
    };
};

function playD() {
    let element = document.querySelector("#creature4");
    let toggle = document.querySelector("#animToggle");
    
    // play sound
    soundD.play();
    setTimeout(resetAudio, 1000, soundD);

    // play animation
    if (toggle.checked) {
        element.classList.add('creatureAnimation');
        setTimeout(() => {
            element.classList.remove('creatureAnimation');
        }, 700);
    } else {
        element.classList.add('creatureAnimationB');
        setTimeout(() => {
            element.classList.remove('creatureAnimationB');
        }, 700);
    };
};

function playE() {
    let element = document.querySelector("#creature5");
    let toggle = document.querySelector("#animToggle");
    
    // play sound
    soundE.play();
    setTimeout(resetAudio, 1000, soundE);

    // play animation
    if (toggle.checked) {
        element.classList.add('creatureAnimation');
        setTimeout(() => {
            element.classList.remove('creatureAnimation');
        }, 700);
    } else {
        element.classList.add('creatureAnimationB');
        setTimeout(() => {
            element.classList.remove('creatureAnimationB');
        }, 700);
    };
};

function playF() {
    let element = document.querySelector("#creature6");
    let toggle = document.querySelector("#animToggle");
    
    // play sound
    soundF.play();
    setTimeout(resetAudio, 1000, soundF);

    // play animation
    if (toggle.checked) {
        element.classList.add('creatureAnimation');
        setTimeout(() => {
            element.classList.remove('creatureAnimation');
        }, 700);
    } else {
        element.classList.add('creatureAnimationB');
        setTimeout(() => {
            element.classList.remove('creatureAnimationB');
        }, 700);
    };
};

function playG() {
    let element = document.querySelector("#creature7");
    let toggle = document.querySelector("#animToggle");
    
    // play sound
    soundG.play();
    setTimeout(resetAudio, 1000, soundG);

    // play animation
    if (toggle.checked) {
        element.classList.add('creatureAnimation');
        setTimeout(() => {
            element.classList.remove('creatureAnimation');
        }, 700);
    } else {
        element.classList.add('creatureAnimationB');
        setTimeout(() => {
            element.classList.remove('creatureAnimationB');
        }, 700);
    };
};

function playH() {
    let element = document.querySelector("#creature8");
    let toggle = document.querySelector("#animToggle");
    
    // play sound
    soundH.play();
    setTimeout(resetAudio, 1000, soundH);

    // play animation
    if (toggle.checked) {
        element.classList.add('creatureAnimation');
        setTimeout(() => {
            element.classList.remove('creatureAnimation');
        }, 700);
    } else {
        element.classList.add('creatureAnimationB');
        setTimeout(() => {
            element.classList.remove('creatureAnimationB');
        }, 700);
    };
};

function resetAudio(audio) {
    audio.pause();
    audio.currentTime = 0;
};

// Code taken & modified from Google with the prompt, "javascript on click l key"
// Google. (2025, November 18). AI Overview [Generative AI chat]. Gemini 2.0.
document.addEventListener('keydown', (event) => {
    if (event.key === 'u' || event.key === 'U') {
        // Prevent the default browser action for 'l' if necessary
        // event.preventDefault(); 

        playA();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'i' || event.key === 'I') {
        playB();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'o' || event.key === 'O') {
        playC();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'j' || event.key === 'J') {
        playD();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'k' || event.key === 'K') {
        playE();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'l' || event.key === 'L') {
        playF();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'n' || event.key === 'N') {
        playG();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'm' || event.key === 'M') {
        playH();
    }
});

document.querySelector("#creature1").addEventListener("click", function() {
    playA();
});

document.querySelector("#creature2").addEventListener("click", function() {
    playB();
});

document.querySelector("#creature3").addEventListener("click", function() {
    playC();
});

document.querySelector("#creature4").addEventListener("click", function() {
    playD();
});

document.querySelector("#creature5").addEventListener("click", function() {
    playE();
});

document.querySelector("#creature6").addEventListener("click", function() {
    playF();
});

document.querySelector("#creature7").addEventListener("click", function() {
    playG();
});

document.querySelector("#creature8").addEventListener("click", function() {
    playH();
});