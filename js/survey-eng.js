
/* Setup */
const audioList = ['sound1', 'sound2', 'sound3', 'sound4'];
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
    title.innerHTML = `音${n+1}`;

    // change sound played
    playbtn.addEventListener("click", handler, false);

    if (currentTab >= (audioList.length - 1)) {
        nextbtn.value = "Submit"; // if the last tab
    } else {
        nextbtn.value = "Next page →";
    }
}

function nextTab(n) { // This function will figure out which tab to display  
    // If any validation fails, do not go on
    if(!validateShape()) return false;
    
    result[currentTab] = selected;
    console.log(`registered result[${currentTab}]: ${selected}`);

    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;


    playbtn.removeEventListener("click", play);

    changeTab(currentTab);

    // if you have reached the end of the form... :
    if (currentTab > audioList.length-1) {
        // save everything
        console.log(`at the end, submitting form...`);
        console.log(result);
        nextPage();
    }
}

function validateShape() {
    if(selected == null) {
        alert('Please choose a shape');
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
    txt.innerText = `Please select "${shape.id}" on question nr.${currentTab+1} in the Google Forms`;
}

function handler() {
    play(currentTab);
}

function play(n) {
    console.log(`audio: ${n}`);
    const audio = new Audio(`../audio/${audioList[n]}.wav`);
    audio.play();
};