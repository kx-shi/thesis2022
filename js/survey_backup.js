
/* Setup */
const audioList = ['sound1', 'sound2', 'sound3', 'sound4'];
let title = document.getElementById('audio-title');
let playbtn = document.getElementById('playbtn');
let nextbtn = document.getElementById('nextbtn');
let ksvg = document.getElementById('ksvg');
let bsvg = document.getElementById('bsvg');
let kiki = document.getElementById("Kiki");
let bouba = document.getElementById("Bouba");
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
    if(currentPage == 0 && !validateForm()) return false;
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
    selected = null;

    // change title number
    title.innerHTML = `音${n+1}`;

    // change sound played
    playbtn.addEventListener("click", handler, false);

    if (currentTab >= (audioList.length - 1)) {
        nextbtn.value = "送信する"; // if the last tab
    } else {
        nextbtn.value = "次のページ →";
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

function validateForm() { // This function deals with validation of the form fields
    var error = "";// = document.createElement("p");
    //error.classList.add("invalid");

    var valid = true;
    var age = pages[currentPage].querySelector('input[name="age"]');
    var genders = pages[currentPage].querySelectorAll('input[name="gender"');
    var levelr = pages[currentPage].querySelectorAll('input[name="hearing-levelr"]');
    var levell = pages[currentPage].querySelectorAll('input[name="hearing-levell"]');
    var aidr = pages[currentPage].querySelectorAll('input[name="hearing-aidr"]');
    var aidl = pages[currentPage].querySelectorAll('input[name="hearing-aidl"]');

    if(age.value > 0) {
        formres[1] = age.value;
    }else {
        console.log(age);
        error += "Age not inputted or invalid.\n";
        document.getElementById("qage").classList.add("invalid");
        valid = false;
    }

    // Check all radio-buttons
    for(i = 0; i < genders.length; i++) {
        if(genders[i].checked) {
            formres[0] = genders[i].value;
            break;
        }else if(i == genders.length-1) {
            error += "Gender not selected.\n";
            document.getElementById("qgender").classList.add("invalid");
            valid = false;
        }
    }

    for(i = 0; i < levell.length; i++) {
        if(levell[i].checked) {
            document.getElementById("qhlevell").classList.remove("invalid");
            formres[2] = levelr[i].value;
            break;
        }else if(i == levell.length-1) {
            error += "Hearing level L not selected.\n";
            document.getElementById("qhlevell").classList.add("invalid");
            valid = false;
        }

    }

    for(i = 0; i < levelr.length; i++) {
        if(levelr[i].checked) {
            document.getElementById("qhlevelr").classList.remove("invalid");
            formres[3] = levelr[i].value;
            break;
        }else if(i == levelr.length-1) {
            error += "Hearing level R not selected.\n";
            document.getElementById("qhlevelr").classList.add("invalid");
            valid = false;
        }
    }

    for(i = 0; i < aidl.length; i++) {
        if(aidl[i].checked) {
            document.getElementById("qhaidl").classList.remove("invalid");
            formres[4] = aidl[i].value;
            break;
        }else if(i == aidl.length-1) {
            error += "Hearing aid L not selected.\n";
            document.getElementById("qhaidl").classList.add("invalid");
            valid = false;
        }
    }

    for(i = 0; i < aidr.length; i++) {
        if(aidr[i].checked) {
            document.getElementById("qhaidr").classList.remove("invalid");
            formres[5] = aidr[i].value;
            break;
        }else if(i == aidr.length-1) {
            error += "Hearing aid R not selected.\n";
            document.getElementById("qhaidr").classList.add("invalid");
            valid = false;
        }
    }

    if(valid) {
        console.log(`Result: ${formres}`);
    }else {
        console.log(`Error: ${error}`);
    }

    return valid; // return true if all checks passed
}

function validateShape() {
    if(selected == null) {
        alert('形を選んでください');
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
    console.log(`${selected} selected!`);
}

function handler() {
    play(currentTab);
}

function play(n) {
    console.log(`audio: ${n}`);
    const audio = new Audio(`../audio/${audioList[n]}.wav`);
    audio.play();
};