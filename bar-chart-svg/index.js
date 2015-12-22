
var data = [4, 8, 15, 16, 23, 42];

var width = 420;
var barHeight = 20;

var translateFunc = function(d, i) {
  return "translate(0," + i * barHeight + ")";
};

var x = d3.scale.linear()
          .domain([0, d3.max(data)])
          .range([0, width])

var bar = d3.select(".chart")
  .attr("width", width)
  .attr("height", barHeight * data.length)
  .selectAll("g")
  .data(data).enter()
  .append("g").attr("transform", translateFunc);

bar.append("rect").attr("width", x).attr("height", barHeight - 1);

bar.append("text").attr("x", function(d) { return x(d) - 3; })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) { return d; });

