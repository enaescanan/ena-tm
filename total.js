   function InitChart() {
                    
var data = [{
    "cause": "Total", 
    "value": "1144",
    "year": "1991"
}, {
    "cause": "Total", 
    "value": "1394",
    "year": "1992"
}, {
    "cause": "Total", 
    "value": "1548",
    "year": "1993"
}, {
    "cause": "Total", 
    "value": "1791",
    "year": "1994"
}, {
    "cause": "Total", 
    "value": "1488",
    "year": "1995"
}, {
    "cause": "Total", 
    "value": "1557",
    "year": "1996"
}, {
    "cause": "Total", 
    "value": "1513",
    "year": "1997"
}, {
    "cause": "Total", 
    "value": "1579",
    "year": "1998"
}, {
    "cause": "Total", 
    "value": "1348",
    "year": "1999"
}, {
    "cause": "Total", 
    "value": "1698",
    "year": "2000"
}, {
    "cause": "Total", 
    "value": "1768",
    "year": "2001"
}, {
    "cause": "Total", 
    "value": "1801",
    "year": "2002"
}, {
    "cause": "Total", 
    "value": "1798",
    "year": "2003"
}, {
    "cause": "Total", 
    "value": "1833",
    "year": "2004"
}, {
    "cause": "Total", 
    "value": "1732",
    "year": "2005"
}, {
    "cause": "Total", 
    "value": "1721",
    "year": "2006"
}, {
    "cause": "Total", 
    "value": "1672",
    "year": "2007"
}, {
    "cause": "Total", 
    "value": "1731",
    "year": "2008"
}, {
    "cause": "Total", 
    "value": "1599",
    "year": "2009"
}, {
    "cause": "Total", 
    "value": "1719",
    "year": "2010"
},
           
           ];


// Group data
var dataGroup = d3.nest()
.key(function(d) {
    return d.cause;
})                    
.entries(data);

// Create total       
var total = d3.select("#total"),
    WIDTH = 1000,
    HEIGHT = 500,
    MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    },

    
// Create scale
    xScale = d3.scale.ordinal().rangeRoundBands([MARGINS.left, WIDTH - MARGINS.right], 0.1).domain(data.map(function (d) {return d.year;})),
    yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0, 2000]),

    xAxis = d3.svg.axis()
      .scale(xScale)
      .tickSize(-HEIGHT,0,0)
      .tickSubdivide(true),

    yAxis = d3.svg.axis()
      .scale(yScale)
      .tickSize(-WIDTH,0,0)
      .orient("left")
      .tickSubdivide(true);

// x axis
total.append("svg:g")
    .attr("class", "x axis grid")
    .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom + 15) + ")")
    .call(xAxis);

// y axis
total.append("svg:g")
    .attr("class", "y axis grid")
    .attr("transform", "translate(" + (MARGINS.left - 10 ) + ",0)")
    .call(yAxis);
       
   
// tooltip       
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>"+d.value + "</strong> maternal deaths";
  })
total.call(tip);

       
dataGroup.forEach(function(d, i) {

total.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', function (d) {
      return xScale(d.year);
    })
    .attr('y', function (d) {
      return yScale(d.value);
    })
    .attr('width', xScale.rangeBand())
    .attr('height', function (d) {
      return ((HEIGHT - MARGINS.bottom) - yScale(d.value));
    })
    .attr('class', 'area')
    .attr("transform", "translate(0,-1)")
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)

function type(d) {
  d.value = +d.value;
  return d;
}

});
       
}
   InitChart();