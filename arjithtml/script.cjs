
let audio = document.getElementById('audio1');
let audio2 = document.getElementById('audio2');
let audio3 = document.getElementById('audio3');
let audio4 = document.getElementById('audio4');
let audio5 = document.getElementById('audio5');

let start = () => {
    if (audio.paused) {
        audio.play();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();
    }
    else {
        audio.pause();
    }
}

let start2 = () => {
    if (audio2.paused) {
        audio2.play();
        audio.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();
    }
    else {
        audio2.pause();
    }
}

let start3 = () => {
    if (audio3.paused) {
        audio3.play();
        audio2.pause();
        audio.pause();
        audio4.pause();
        audio5.pause();
    }

    else {
        audio3.pause();
    }
}
let start4 = () => {
    if (audio4.paused) {
        audio4.play();
        audio2.pause();
        audio.pause();
        audio3.pause();
        audio5.pause();
    }

    else {
        audio4.pause();
    }
}
let start5 = () => {
    if (audio5.paused) {
        audio5.play();
        audio4.pause();
        audio2.pause();
        audio.pause();
        audio3.pause();

    }

    else {
        audio5.pause();
    }
}
