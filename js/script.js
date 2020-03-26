// this is your custom javascript code
let ns = "http://www.w3.org/2000/svg"


let mijnsvg = document.createElementNS(ns,"svg");
mijnsvg.setAttribute("id","mySvg");
mijnsvg.setAttribute("width", "720");
mijnsvg.setAttribute("height", "360");

function addCircle(cy,cx){
    let circle = document. createElementNS(ns, "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", 1);
    circle.setAttribute("fill", "black");
    return circle;
}


function coordToPos(value,longitude){
    let position
    if (longitude) {
        position = (value + 180)*2;
    }
    else{
        position = (90-value)*2;
    }

    return position
}

for (let i = 0; i < cities.length; i++) {
    mijnsvg.appendChild(addCircle(coordToPos(cities[i].latitude,false),coordToPos(cities[i].longitude,true)))
    
}

document.body.appendChild(mijnsvg)