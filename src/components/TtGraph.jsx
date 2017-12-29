import React, { Component } from 'react';
import * as d3 from "d3";

class TtGraph extends Component {
   constructor(props){
      super(props)
      // this.createGraph1 = this.createGraph1.bind(this)
   }
   componentDidMount() {
      this.createGraph1()
   }
   createGraph1() {

    var svg = d3.select("#"+ this.props.graph),
          margin = 200,
        width = svg.attr("width") - margin,
        height = svg.attr("height") - margin;
        var data = [
          [2011,45],
          [2012,47],
          [2013,52],
          [2014,70],
          [2015,75],
          [2016,78]
        ];

    var xScale = d3.scaleBand().range ([0, width]).padding(0.4),
        yScale = d3.scaleLinear().range ([height, 0]);

    var g = svg.append("g")
               .attr("transform", "translate(" + 100 + "," + 100 + ")");

     xScale.domain(data.map(function(d) { return d[0]; }));
     yScale.domain([0, d3.max(data, function(d) { return d[1]; })]);

     g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale));

     g.append("g")
      .call(d3.axisLeft(yScale)
      .tickFormat(function(d){
          return "$" + d;
      }).ticks(10));

     g.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return xScale(d[0]); })
      .attr("y", function(d) { return yScale(d[1]); })
      .attr("width", xScale.bandwidth())
      .attr("height", function(d) { return height - yScale(d[1]); })
      .attr("fill","teal").attr("opacity", 0.5);


      // var svg = d3.select("#"+ this.props.graph),
      //       margin = 200,
      //     width = svg.attr("width") - margin,
      //     height = svg.attr("height") - margin;
      //     var data = [
      //       [2011,45],
      //       [2012,47],
      //       [2013,52],
      //       [2014,70],
      //       [2015,75],
      //       [2016,78]
      //     ];
      //
      //
      // var xScale = d3.scaleLinear().range ([0, width]),//.padding(0.4),
      //     yScale = d3.scaleLinear().range ([height, 0]);
      //
      // var g = svg.append("g")
      //            .attr("transform", "translate(" + 100 + "," + 100 + ")");
      // var a = data.map(function(d) { return d[0]; });
      //  xScale.domain([d3.min(a), d3.max(a)]);
      //  yScale.domain([0, d3.max(data2, function(d) { return d[1]; })]);
      //
      //  g.append("g")
      //   .attr("transform", "translate(0," + height + ")")
      //   .call(d3.axisBottom(xScale).ticks(5));
      //
      //  g.append("g")
      //   .call(d3.axisLeft(yScale)
      //   .tickFormat(function(d){
      //       return "$" + d;
      //   }).ticks(10));
      //
      //
      //  g.selectAll(".bar")
      //   .data(data)
      //   .enter().append("rect")
      //   .attr("class", "bar")
      //   .attr("x", function(d) { return xScale(d[0]); })
      //   .attr("y", function(d) { return yScale(d[1]); })
      //   .attr("width", 20)//xScale.bandwidth())
      //   .attr("height", function(d) { return height - yScale(d[1]); })
      //   .attr("fill","teal").attr("opacity", 0.5);


    //  var data = [100, 400, 300, 900, 850, 1000];
    //  var barHeight = 20;
    //  var barGap = 1;
    //
    //  var svg = d3.select("#" + this.props.graph);
    //
    //  var scale = d3.scaleLinear()
    //                 .domain([d3.min(data), d3.max(data)])
    //                 .range([50, 500]);
    //
    // var g = svg.selectAll("g")
    //             .data(data)
    //             .enter()
    //             .append("g")
    //             .attr("transform", function(d,i){
    //               return "translate(0," + i*barHeight + ")";
    //             });
    // g.append("rect")
    //   .attr("width", function(d,i){
    //     return scale(d)
    //   })
    //   .attr("height", barHeight - barGap)
    //   .attr("fill", "orange")
    //
    // g.append("text")
    //   .attr("x", function(d,i){
    //     return scale(d) - 25;
    //   })
    //   .attr("y", barHeight/2)
    //   .attr("dy", ".35em")
    //   .attr("stroke","white")
    //   .attr("font-size", 12)
    //   .attr("font-family", "sans-serif")
    //   .text(function(d){
    //     return d
    //   })


    // var data = [10, 15, 20, 25, 30];
    // var colors = ['#ffffcc','#c2e699','#78c679','#31a354','#006837'];
    //
    // var svg = d3.select("#" + this.props.graph)
    //
    // var g = svg.selectAll("g")
    //             .data(data)
    //             .enter()
    //             .append("g")
    //             .attr("transform", function(d,i){
    //               return "translate(0,0)";
    //             })
    // var circles = g.append("circle")
    //                 .attr("cx", function(d,i){
    //                   return i*100 + 50;
    //                 })
    //                 .attr("cy", function(d,i){
    //                   return 100
    //                 })
    //                 .attr("r", function(d,i){
    //                   return d*1.5
    //                 })
    //                 .attr("fill", function(d,i){
    //                   return colors[i]
    //                 })
    //   g.append("text")
    //   .attr("stroke", "teal")
    //   .attr("x", function(d,i){
    //     return i*100 + 40;
    //   })
    //   .attr("y", function (d,i) {
    //     return 105
    //   })
    //   .attr("font-size", 12)
    //   .attr("font-family", "sans-serif")
    //   .text(function(d){
    //     return d
    //   })

      // //Create group element
      // var g = svg.append("g")
      //            .attr("transform", function(d, i) {
      //                return "translate(0,0) ";
      //            });
      //
      // //Create and append ellipse element into group
      // var ellipse = g.append("ellipse")
      //           .attr("cx", 250)
      //           .attr("cy", 50)
      //           .attr("rx", 150)
      //           .attr("ry", 50)
      //           .attr("fill", "green")
      //           .attr("opacity", 0.5)
      //
      // //Create and append text element into group
      // g.append("text")
      //  .attr("x", 140)
      //  .attr("y", 50)
      //  .attr("stroke", "steelblue")
      //  .attr("font-family", "sans-serif")
      //  .attr("font-size", "24px")
      //  .text("I am a pretty ellipse!");

    //Create line element inside SVG
    // svg.append("line")
    //    .attr("x1", 100)
    //    .attr("y1", 100)
    //    .attr("x2", 500)
    //    .attr("y2", 150)
    //    .attr("stroke", "black")

     //Create and append rectangle element
     // svg.append("rect")
     //         .attr("x", 0)
     //         .attr("y", 300)
     //         .attr("width", 200)
     //         .attr("height", 100)
     //Append circle
     // svg.append("circle")
     //    .attr("cx", 450)
     //    .attr("cy", 250)
     //    .attr("r", 50)

    //Append Ellipse
    // svg.append("ellipse")
    //    .attr("cx", 150)
    //    .attr("cy", 50)
    //    .attr("rx", 50)
    //    .attr("ry", 10)
   }
render() {
      return <svg id={this.props.graph} width={500} height={500}></svg>
   }
}
export default TtGraph
