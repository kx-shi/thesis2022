const audioList = ['sound1', 'sound2', 'sound3', 'sound4'];

/*
function prev() {
    if(pointer > 0) {
        pointer--;
    }
    console.log(pointer);
};
*/

function play(n) {
    const audio = new Audio(`../audio/${audioList[n]}.wav`);
    audio.play();
};

/*
function showInfo() {
    const infoContainer = document.createElement('div');
    const infoText =  document.createElement('p');
    const btn = document.createElement('button');
    btn.setAttribute("")
    infoDiv.setAttribute("id", "infoContainer");
    infoDiv.appendChild(infoText);
    infoDiv.innerHTML("Test, test");
};
*/