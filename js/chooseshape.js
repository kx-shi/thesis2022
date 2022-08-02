let kiki = document.getElementById("Kiki");
let bouba = document.getElementById("Bouba");
let ksvg = document.getElementById("ksvg");
let bsvg = document.getElementById("bsvg");
var selected = null;

kiki.addEventListener("click", select, kiki);
bouba.addEventListener("click", select, bouba);

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