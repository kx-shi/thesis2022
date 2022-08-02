/* In survey.js */
/* This is the isolated section */

const audioList = ['sound1', 'sound2', 'sound3', 'sound4'];

function play(n) {
    const audio = new Audio(`../audio/${audioList[n]}.wav`);
    audio.play();
};