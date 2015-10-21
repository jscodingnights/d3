var data = [4,6,2,6,11,32]; 

// Scaling function
var scale = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0,420]);

// Build chart
d3.select("#bar-graph")
    .selectAll("div")
    .data(data)
    .enter().append("div")
    .style("width", function(d) { return scale(d) + 'px'; })
    .text(function(d) { return d });
