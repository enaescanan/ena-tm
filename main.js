   function InitChart() {
                    
var data = [{
    "cause": "Hemorrhage", 
    "value": "414",
    "year": "1991"
}, {
    "cause": "Hemorrhage", 
    "value": "386",
    "year": "1992"
}, {
    "cause": "Hemorrhage", 
    "value": "308",
    "year": "1993"
}, {
    "cause": "Hemorrhage", 
    "value": "354",
    "year": "1994"
}, {
    "cause": "Hemorrhage", 
    "value": "333",
    "year": "1995"
}, {
    "cause": "Hemorrhage", 
    "value": "252",
    "year": "1996"
}, {
    "cause": "Hemorrhage", 
    "value": "285",
    "year": "1997"
}, {
    "cause": "Hemorrhage", 
    "value": "286",
    "year": "1998"
}, {
   "cause": "Hemorrhage", 
   "value": "265",
    "year": "1999"
}, {
    "cause": "Hemorrhage", 
    "value": "345",
    "year": "2000"
}, {
    "cause": "Hemorrhage", 
    "value": "309",
    "year": "2001"
}, {
    "cause": "Hemorrhage", 
    "value": "327",
    "year": "2002"
}, {
   "cause": "Hemorrhage", 
   "value": "319",
    "year": "2003"
}, {
    "cause": "Hemorrhage", 
    "value": "315",
    "year": "2004"
}, {
   "cause": "Hemorrhage", 
   "value": "263",
    "year": "2005"
}, {
    "cause": "Hemorrhage", 
    "value": "261",
    "year": "2006"
}, {
    "cause": "Hemorrhage", 
    "value": "286",
    "year": "2007"
}, {
    "cause": "Hemorrhage", 
    "value": "274",
    "year": "2008"
}, {
    "cause": "Hemorrhage", 
    "value": "286",
    "year": "2009"
}, {
    "cause": "Hemorrhage", 
    "value": "298",
    "year": "2010"
}, {
    "cause": "Abortive", 
    "value": "114",
    "year": "1991"
}, {
 "cause": "Hypertension",
    "value": "290",
    "year": "1991"
}, {
    "cause": "Hypertension",
    "value": "353",
    "year": "1992"
}, {
    "cause": "Hypertension",
    "value": "340",
    "year": "1993"
}, {
    "cause": "Hypertension",
    "value": "388",
    "year": "1994"
}, {
    "cause": "Hypertension",
    "value": "348",
    "year": "1995"
}, {
    "cause": "Hypertension",
    "value": "368",
    "year": "1996"
}, {
    "cause": "Hypertension",
    "value": "347",
    "year": "1997"
}, {
    "cause": "Hypertension",
    "value": "425",
    "year": "1998"
}, {
    "cause": "Hypertension",
    "value": "365",
    "year": "1999"
}, {
    "cause": "Hypertension",
    "value": "431",
    "year": "2000"
}, {
    "cause": "Hypertension",
    "value": "561",
    "year": "2001"
}, {
   "cause": "Hypertension",
   "value": "533",
    "year": "2002"
}, {
    "cause": "Hypertension",
    "value": "479",
    "year": "2003"
}, {
    "cause": "Hypertension",
    "value": "520",
    "year": "2004"
}, {
    "cause": "Hypertension",
    "value": "510",
    "year": "2005"
}, {
    "cause": "Hypertension",
    "value": "565",
    "year": "2006"
}, {
    "cause": "Hypertension",
    "value": "567",
    "year": "2007"
}, {
   "cause": "Hypertension",
   "value": "583",
    "year": "2008"
}, {
    "cause": "Hypertension",
    "value": "513",
    "year": "2009"
}, {
    "cause": "Hypertension",
    "value": "605",
    "year": "2010"
}, {
    "cause": "Abortive", 
    "value": "109",
    "year": "1992"
}, {
    "cause": "Abortive", 
    "value": "179",
    "year": "1993"
}, {
    "cause": "Abortive", 
    "value": "206",
    "year": "1994"
}, {
    "cause": "Abortive", 
    "value": "164",
    "year": "1995"
}, {
    "cause": "Abortive", 
    "value": "168",
    "year": "1996"
}, {
    "cause": "Abortive", 
    "value": "151",
    "year": "1997"
}, {
    "cause": "Abortive", 
    "value": "144",
    "year": "1998"
}, {
    "cause": "Abortive", 
    "value": "145",
    "year": "1999"
}, {
    "cause": "Abortive", 
    "value": "152",
    "year": "2000"
}, {
    "cause": "Abortive", 
    "value": "144",
    "year": "2001"
}, {
    "cause": "Abortive", 
    "value": "161",
    "year": "2002"
}, {
    "cause": "Abortive", 
    "value": "189",
    "year": "2003"
}, {
    "cause": "Abortive", 
    "value": "152",
    "year": "2004"
}, {
    "cause": "Abortive", 
    "value": "138",
    "year": "2005"
}, {
    "cause": "Abortive", 
    "value": "163",
    "year": "2006"
}, {
    "cause": "Abortive", 
    "value": "149",
    "year": "2007"
}, {
    "cause": "Abortive", 
    "value": "166",
    "year": "2008"
}, {
    "cause": "Abortive", 
    "value": "142",
    "year": "2009"
}, {
    "cause": "Abortive", 
    "value": "156",
    "year": "2010"
}];


// Group data
var dataGroup = d3.nest()
.key(function(d) {
    return d.cause;
})                    
.entries(data);

// Create vis       
var vis = d3.select("#visualisation"),
    WIDTH = 1000,
    HEIGHT = 500,
    MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    },

    
// Create scale
xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([1991, 2010]),
yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0, 700]),
lSpace = WIDTH/dataGroup.length;

// Create axis
xAxis = d3.svg.axis()
.scale(xScale).tickFormat(d3.format("d")).tickSize(-HEIGHT,0,0),

yAxis = d3.svg.axis()
.scale(yScale).orient("left").tickSize(-WIDTH,0,0);

vis.append("svg:g")
    .attr("class", "x axis grid")
    .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom + 15) + ")")
    .call(xAxis);

// y axis
vis.append("svg:g")
    .attr("class", "y axis grid")
    .attr("transform", "translate(" + (MARGINS.left - 10 ) + ",0)")
    .call(yAxis);
       
       
// Create lines
var lineGen = d3.svg.line()
        .x(function(d) {
            return xScale(d.year);
        })
        .y(function(d) {
            return yScale(d.value);
        })
        .interpolate("cardinal");
       
       
// Tooltip div
// var tooltip = d3.select("body").append("div")	
//        .attr("class", "tooltip")				
//        .style("opacity", 0);
                    
                

dataGroup.forEach(function(d, i) {

    vis.append('svg:path')
    .data([data])
    .attr('d', lineGen(d.values))
    .attr('class', 'path')
    .attr('id', d.key)


    // Circles
    var dVal = d.values

    dVal.forEach(function(obj){
    if(obj.cause == d.key) {
        vis.append("circle")
        .attr("class", d.key+"-circles")
        .attr("cx", xScale(obj.year))
        .attr("cy", yScale(obj.value))
        .on("mouseover", function(d) {		

            d3.select(this).attr("class", obj.cause+"-circles hover")	
            
            if (obj.cause == "Hypertension") { d3.selectAll(".tooltip.show").transition()		
            .duration(100).style('opacity','0') 
                var fullCause = "hypertension"
                }
            
            else if (obj.cause == "Hemorrhage") { 
                var fullCause = "postpartum hemorrhage"
            } else if (obj.cause == "Abortive") { 
                var fullCause = "abortive outcome"
            }

            tooltip.attr("class", obj.cause+"-fill tooltip").transition()		
            .duration(100)		
            .style("opacity", .9).style('display', 'block');		

            tooltip.html("<strong>"+obj.value+"</strong> deaths<br>due to "+fullCause)	
            .style("left", (d3.event.pageX - 70) + "px")		
            .style("top", (d3.event.pageY - 80) + "px");


        }).on("mouseout", function(d) {	
            d3.select(this).attr("class", obj.cause+"-circles")	
            d3.selectAll(".tooltip.show").transition()		
            .duration(100).style('opacity','1')
            tooltip.attr("class", "tooltip").transition()		
                .duration(200)		
                .style("opacity", 0).style('display', 'none');	
            });
        }
    })

});

 


}
InitChart();
