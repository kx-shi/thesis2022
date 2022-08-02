/* Setup */
const audioList = ['sound1', 'sound2', 'sound3', 'sound4', 'sound5', 'sound6', 'sound7', 'sound8', 'sound9', 'sound10'];
let title = document.getElementById('audio-title');
let playbtn = document.getElementById('playbtn');
let nextbtn = document.getElementById('nextbtn');
let ksvg = document.getElementById('ksvg');
let bsvg = document.getElementById('bsvg');
let kiki = document.getElementById("Kiki");
let bouba = document.getElementById("Bouba");
let txt = document.getElementById("txt");
let selected = null;

kiki.addEventListener("click", select, kiki);
bouba.addEventListener("click", select, bouba);

var pages = document.getElementsByClassName("page");
var currentPage = 0; // Current page
var currentTab = 0; // Current tab

// Audio-stuff
audio1 = require('../audio/sound1.wav');
audio2 = require('../audio/sound2.wav');
audio3 = require('../audio/sound3.wav');
audio4 = require('../audio/sound4.wav');
audio5 = require('../audio/sound5.wav');
audio6 = require('../audio/sound6.wav');
audio7 = require('../audio/sound7.wav');
audio8 = require('../audio/sound8.wav');
audio9 = require('../audio/sound9.wav');
audio10 = require('../audio/sound10.wav');

var hash = new Object();
hash['sound1'] = audio1;
hash['sound2'] = audio2;
hash['sound3'] = audio3;
hash['sound4'] = audio4;
hash['sound5'] = audio5;
hash['sound6'] = audio6;
hash['sound7'] = audio7;
hash['sound8'] = audio8;
hash['sound9'] = audio9;
hash['sound10'] = audio10;

// Results
var result = [];
var formres = []; // gender, age, hearinglevell, hearinglevelr, hearingaidl, hearingaidr

// Display the initial page
pages[currentPage].style.display = "block";

function nextPage() {
    pages[currentPage].style.display = "none"; // hide page 0
    currentPage = currentPage + 1;
    pages[currentPage].style.display = "block"; // show page 1
    changeTab(currentTab);
}

function changeTab(n) {
    // reset everything
    ksvg.setAttribute("stroke-width", "0px");
    ksvg.setAttribute("transform", "scale(1)")
    bsvg.setAttribute("stroke-width", "0px");
    bsvg.setAttribute("transform", "scale(1)")
    txt.innerText = "";
    selected = null;

    // change title number
    if(document.documentElement.lang === "ja") {
        title.innerHTML = `音${n+1}`;
    }else {
        title.innerHTML = `Sound ${n+1}`;
    }

    // change sound played
    playbtn.addEventListener("click", handler, false);

    if (currentTab >= (audioList.length - 1)) {
        if(document.documentElement.lang === "ja") {
            nextbtn.value = "送信する"; // if the last tab
        }else {
            nextbtn.value = "Submit"
        }

    } else {
        if(document.documentElement.lang === "ja") {
            nextbtn.value = "次のページ →";
        }else {
            nextbtn.value = "Next page →"
        }
    }
}

function nextTab(n) { // Go to next tab  
    // If any validation fails, do not go on
    if(!validateShape()) return false;
    
    result[currentTab] = selected;
    console.log(`registered result[${currentTab}]: ${selected}`);

    // Increase current tab by 1
    currentTab = currentTab + n;


    playbtn.removeEventListener("click", play);

    changeTab(currentTab);

    // end of form reached
    if (currentTab > audioList.length-1) {
        nextPage();
    }
}

function validateShape() {
    if(selected == null) {
        if(document.documentElement.lang === "ja") {
            alert('形を選んでください');
        }else {
            alert('Please select a shape');
        }
        return false;
    }

    return true;
}

function select(ev) {
    let shape = ev.target;
    if(shape.id == "Kiki") {
        ksvg.setAttribute("stroke-width", "5px");
        ksvg.setAttribute("transform", "scale(1.2)")

        bsvg.setAttribute("stroke-width", "0px");
        bsvg.setAttribute("transform", "scale(1)")
        selected = 0;
    }else if(shape.id == "Bouba") {
        bsvg.setAttribute("stroke-width", "5px");
        bsvg.setAttribute("transform", "scale(1.2)")

        ksvg.setAttribute("stroke-width", "0px");
        ksvg.setAttribute("transform", "scale(1)")
        selected = 1;
    }

    if(document.documentElement.lang === "ja") {
        txt.innerText = `Google Forms ${currentTab+1} 番目の質問で「${shape.id}」を選択してください、と準備ができたら次のページへ`;
    }else {
        txt.innerText = `Please select "${shape.id}" on question nr.${currentTab+1} in the Google Forms and go to the next page when you're ready`;
    }
}

function handler() {
    play(currentTab);
}

function play(n) {
    const audio = new Audio(`${hash[audioList[n]]}`);
    audio.play();
};