
let svgContainer = d3.select("body").append("svg")
  .attr("width", 720)
  .attr("height", 360);

d3.select("body")
.append('button')
.text('Circle')
.on('click',function () {
    d3.selectAll("circle").remove()
    d3.selectAll("rect").remove()
    makeSymbols(true)
});

d3.select("body")
.append('button')
.text('Square')
.on('click',function () {
    d3.selectAll("rect").remove()
    d3.selectAll("circle").remove()
    makeSymbols(false)
});


function addCircle(cy,cx){
  svgContainer.append("circle")
  .attr("cx", cx)
  .attr("cy", cy)
  .attr("r", 0.5)
  .style("fill", "orange");
}

function addSquare(cy,cx){
  svgContainer.append("rect")
  .attr("x", cx)
  .attr("y", cy)
  .attr("width", 3)
  .attr("height", 3)
  .style("fill", "red");
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

function makeSymbols(isCircle) {
    for (let i = 0; i < cities.length; i++) {
        if (isCircle) {
            addCircle(coordToPos(cities[i].latitude,false),coordToPos(cities[i].longitude,true));
        }
        else{
            addSquare(coordToPos(cities[i].latitude,false),coordToPos(cities[i].longitude,true));
        }
      }
}
