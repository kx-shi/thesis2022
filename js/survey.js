/* Setup */
const audioList = ['sound1', 'sound2', 'sound3', 'sound4', 'sound5', 'sound6', 'sound7', 'sound8', 'sound9', 'sound10'];
let title = document.getElementById('audio-title');
let playbtn = document.getElementById('playbtn');
let nextbtn = document.getElementById('nextbtn');
let canvas = document.getElementById("images"); // div where kiki and bouba is located
let txt = document.getElementById("txt");
let selected = null;

const audio = new Audio();

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
    /*
    ksvg.setAttribute("stroke-width", "0px");
    ksvg.setAttribute("transform", "scale(1)")
    bsvg.setAttribute("stroke-width", "0px");
    bsvg.setAttribute("transform", "scale(1)")
    */
    txt.innerText = "";
    selected = null;
    if(canvas.hasChildNodes) {
        while(canvas.lastElementChild) {
            canvas.removeChild(canvas.lastElementChild)
        }
    }

    // randomize kiki/bouba locations
    let ksvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    ksvg.setAttribute("class", "shape");
    ksvg.setAttribute("id", "ksvg");
    ksvg.setAttribute("height", "220px");
    ksvg.setAttribute("width", "220px");
    ksvg.setAttribute("viewBox", "0 0 520 520");
    ksvg.setAttribute("stroke-width", "0px");

    let kiki = document.createElementNS("http://www.w3.org/2000/svg", "path");
    kiki.setAttribute("d", "M 412.00,2.00 C 413.99,7.07 410.87,18.34 409.80,24.00 409.80,24.00 402.08,69.00 402.08,69.00 402.08,69.00 381.25,188.00 381.25,188.00 381.25,188.00 373.42,233.00 373.42,233.00 373.42,233.00 369.00,256.00 369.00,256.00 369.00,256.00 402.00,254.00 402.00,254.00 402.00,254.00 417.00,253.00 417.00,253.00 417.00,253.00 433.00,252.00 433.00,252.00 433.00,252.00 454.00,251.00 454.00,251.00 454.00,251.00 467.00,250.00 467.00,250.00 467.00,250.00 485.00,249.00 485.00,249.00 485.00,249.00 505.00,248.00 505.00,248.00 500.81,253.25 494.67,256.03 489.00,259.45 489.00,259.45 463.00,275.45 463.00,275.45 463.00,275.45 406.00,310.45 406.00,310.45 406.00,310.45 382.00,325.00 382.00,325.00 382.00,325.00 397.73,346.00 397.73,346.00 397.73,346.00 432.23,393.00 432.23,393.00 432.23,393.00 451.42,419.00 451.42,419.00 451.42,419.00 461.00,434.00 461.00,434.00 461.00,434.00 443.00,429.37 443.00,429.37 443.00,429.37 404.00,419.87 404.00,419.87 404.00,419.87 335.00,403.00 335.00,403.00 335.00,403.00 299.08,481.00 299.08,481.00 299.08,481.00 288.84,503.00 288.84,503.00 288.84,503.00 281.00,517.00 281.00,517.00 281.00,517.00 273.17,433.00 273.17,433.00 273.17,433.00 268.00,377.00 268.00,377.00 268.00,377.00 247.00,386.75 247.00,386.75 247.00,386.75 214.00,402.74 214.00,402.74 214.00,402.74 104.00,453.86 104.00,453.86 104.00,453.86 60.00,473.00 60.00,473.00 60.00,473.00 75.26,455.42 75.26,455.42 75.26,455.42 113.26,413.42 113.26,413.42 113.26,413.42 175.84,343.00 175.84,343.00 175.84,343.00 203.00,312.00 203.00,312.00 203.00,312.00 151.00,283.86 151.00,283.86 151.00,283.86 73.00,241.28 73.00,241.28 73.00,241.28 33.00,219.31 33.00,219.31 33.00,219.31 12.00,207.00 12.00,207.00 12.00,207.00 44.00,211.92 44.00,211.92 44.00,211.92 104.00,221.92 104.00,221.92 104.00,221.92 176.00,233.92 176.00,233.92 176.00,233.92 217.00,241.00 217.00,241.00 217.00,241.00 187.81,145.00 187.81,145.00 187.81,145.00 173.00,95.00 173.00,95.00 173.00,95.00 208.00,125.93 208.00,125.93 208.00,125.93 246.00,160.17 246.00,160.17 246.00,160.17 279.00,190.00 279.00,190.00 279.00,190.00 296.58,165.00 296.58,165.00 296.58,165.00 323.58,127.00 323.58,127.00 323.58,127.00 362.42,72.00 362.42,72.00 362.42,72.00 412.00,2.00 412.00,2.00 Z");
    kiki.setAttribute("id", "Kiki");

    ksvg.appendChild(kiki);

    let bsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    bsvg.setAttribute("class", "shape");
    bsvg.setAttribute("id", "bsvg");
    bsvg.setAttribute("height", "220px");
    bsvg.setAttribute("width", "220px");
    bsvg.setAttribute("viewBox", "0 0 500 500");
    bsvg.setAttribute("stroke-width", "0px");
    bsvg.setAttribute("transform", "scale(1)");

    let bouba = document.createElementNS("http://www.w3.org/2000/svg", "path");
    bouba.setAttribute("d", "M 245.00,114.00 C 245.00,114.00 258.90,88.00 258.90,88.00 258.90,88.00 270.30,66.00 270.30,66.00 277.53,53.70 288.13,37.57 301.00,30.82 312.75,24.66 333.98,22.85 343.32,34.09 349.79,41.89 349.29,48.81 350.17,58.00 350.47,61.18 350.99,62.23 350.81,65.72 349.08,99.31 339.66,131.86 334.25,165.00 332.89,173.32 330.92,185.00 333.60,193.00 335.57,198.92 340.35,203.56 347.00,202.62 354.34,201.59 363.79,192.44 369.17,187.54 389.33,169.16 414.68,133.86 446.00,149.95 451.97,153.01 458.88,158.07 463.84,162.62 470.56,168.79 476.67,177.45 481.81,185.00 489.10,195.73 495.69,208.59 494.91,222.00 494.01,237.41 483.21,245.73 470.00,251.42 448.83,260.55 425.39,262.13 403.00,266.60 395.43,268.11 382.60,269.60 376.00,272.82 373.57,274.01 369.47,276.15 368.99,279.09 368.47,282.21 372.07,286.70 373.92,288.96 373.92,288.96 393.39,310.83 393.39,310.83 393.39,310.83 428.00,348.58 428.00,348.58 434.80,356.52 443.61,368.07 446.90,378.00 452.99,396.40 436.74,410.92 419.00,409.91 409.51,409.37 393.69,403.39 385.00,399.25 385.00,399.25 348.00,382.58 348.00,382.58 340.47,379.35 335.44,376.21 327.00,376.00 327.00,376.00 354.25,422.00 354.25,422.00 358.00,429.52 361.79,437.45 361.99,446.00 362.60,472.62 335.79,478.09 315.00,480.17 315.00,480.17 306.00,481.00 306.00,481.00 306.00,481.00 288.00,481.00 288.00,481.00 270.80,480.97 263.85,471.39 256.76,457.00 247.01,437.23 240.75,415.99 234.28,395.00 234.28,395.00 225.00,367.00 225.00,367.00 216.73,369.64 208.36,378.74 201.72,384.47 189.89,394.69 179.03,403.97 166.00,412.74 154.42,420.54 146.44,425.83 132.00,426.00 125.33,426.07 117.14,426.46 111.00,423.59 103.45,420.05 97.84,412.59 92.71,406.28 78.82,389.21 69.43,370.43 71.84,348.00 72.60,340.88 73.47,336.17 77.60,330.00 90.06,311.37 122.67,300.54 143.00,292.14 143.00,292.14 166.00,281.76 166.00,281.76 166.00,281.76 177.00,275.00 177.00,275.00 173.29,267.61 166.31,267.62 159.00,266.84 159.00,266.84 137.00,265.00 137.00,265.00 137.00,265.00 121.00,264.00 121.00,264.00 121.00,264.00 88.00,263.00 88.00,263.00 88.00,263.00 78.00,262.09 78.00,262.09 62.30,261.02 47.13,260.90 32.00,255.79 23.22,252.84 14.38,246.93 9.59,238.91 3.10,228.38 1.21,209.04 9.59,199.17 13.99,194.15 19.77,191.93 26.00,190.37 37.83,187.42 50.00,188.25 62.00,188.92 87.83,190.36 113.44,194.46 139.00,198.42 154.67,200.86 167.08,202.19 183.00,202.00 190.15,201.91 191.62,200.70 198.00,198.00 194.07,188.29 178.64,176.99 170.27,170.34 150.88,154.94 127.02,137.65 110.34,119.73 99.32,107.88 90.81,94.63 91.00,78.00 91.19,61.54 102.39,48.80 116.00,40.73 121.16,37.68 126.23,34.80 132.00,33.04 141.28,30.21 166.75,28.65 176.00,31.16 181.79,32.73 191.15,37.91 196.00,41.49 218.74,58.28 229.76,95.25 245.00,114.00 Z");
    bouba.setAttribute("id", "Bouba");

    bsvg.appendChild(bouba);
    
    kiki.addEventListener("click", select, kiki);
    bouba.addEventListener("click", select, bouba);

    // randomize
    if(Math.round(Math.random()) == 0) { // Kiki first
        canvas.appendChild(ksvg);
        canvas.appendChild(bsvg);
    }else { // Bouba first
        canvas.appendChild(bsvg);
        canvas.appendChild(ksvg);
    }

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
            nextbtn.value = "終了する"; // if the last tab
        }else {
            nextbtn.value = "Finish"
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
    //console.log(`registered result[${currentTab}]: ${selected}`);

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
            alert('形を選択してください');
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
        txt.innerHTML = `<i>Please select <b>"${shape.id}"</b> on <b>question nr.${currentTab+1}</b> in the Google Forms and go to the next page when you're ready</i>`;
    }else {
        txt.innerHTML = `Please select <b>"${shape.id}"</b> on <b>question nr.${currentTab+1}</b> in the Google Forms and go to the next page when you're ready`;
    }
}

function handler() {
    play(currentTab);
}

function play(n) {
    audio.src = `${audioList[n]}.wav`;
    audio.play();
};