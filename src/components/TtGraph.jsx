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
    var svg = d3.select("#" + this.props.graph)

      //Create group element
      var g = svg.append("g")
                 .attr("transform", function(d, i) {
                     return "translate(0,0)";
                 });

      //Create and append ellipse element into group
      var ellipse = g.append("ellipse")
                .attr("cx", 250)
                .attr("cy", 50)
                .attr("rx", 150)
                .attr("ry", 50)
                .attr("fill", "green")
                .attr("opacity", 0.5)

      //Create and append text element into group
      g.append("text")
       .attr("x", 140)
       .attr("y", 50)
       .attr("stroke", "steelblue")
       .attr("font-family", "sans-serif")
       .attr("font-size", "24px")
       .text("I am a pretty ellipse!");

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
