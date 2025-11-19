var soundA = new Audio('assets/audio/a_clap_drum.mp3');
var soundB = new Audio('assets/audio/b_edm_kick.mp3');
var soundC = new Audio('assets/audio/c_schallende_snare.mp3');
var soundD = new Audio('assets/audio/d_little_guy_sings.mp3');
var soundE = new Audio('assets/audio/e_synth_twinkle_alert.mp3');
var soundF = new Audio('assets/audio/f_ambient_snare.mp3');
var soundG = new Audio('assets/audio/g_hiphop_melody.mp3');
var soundH = new Audio('assets/audio/h_calming_melody_loop.mp3');

function playA() {
    soundA.play();
    setTimeout(resetAudio, 1000, soundA);
}

function resetAudio(audio) {
    audio.pause();
    audio.currentTime = 0;
};

// Code taken & modified from Google with the prompt, "javascript on click l key"
// Google. (2025, November 18). AI Overview [Generative AI chat]. Gemini 2.0.
document.addEventListener('keydown', (event) => {
    if (event.key === 'l' || event.key === 'L') {
        // Prevent the default browser action for 'l' if necessary
        // event.preventDefault(); 

        playA();
    }
});

document.querySelector("#creature1").addEventListener("click", playA());

document.querySelector("#creature2").addEventListener("click", function() {
    soundB.play();
    setTimeout(resetAudio, 1000, soundB);
});

document.querySelector("#creature3").addEventListener("click", function() {
    soundC.play();
    setTimeout(resetAudio, 1000, soundC);
});

document.querySelector("#creature4").addEventListener("click", function() {
    soundD.play();
    setTimeout(resetAudio, 1000, soundD);
});

document.querySelector("#creature5").addEventListener("click", function() {
    soundE.play();
    setTimeout(resetAudio, 1000, soundE);
});

document.querySelector("#creature6").addEventListener("click", function() {
    soundF.play();
    setTimeout(resetAudio, 1000, soundF);
});

document.querySelector("#creature7").addEventListener("click", function() {
    soundG.play();
    setTimeout(resetAudio, 1000, soundG);
});

document.querySelector("#creature8").addEventListener("click", function() {
    soundH.play();
    setTimeout(resetAudio, 1000, soundH);
});