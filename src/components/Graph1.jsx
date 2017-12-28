import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

class Graph1 extends Component {
   constructor(props){
      super(props)
      this.createGraph1 = this.createGraph1.bind(this)
   }
   componentDidMount() {
      this.createGraph1()
   }
   componentDidUpdate() {
      this.createGraph1()
   }
   createGraph1() {
      // const node = this.node
    const dataMax = max(this.props.data)
    const yScale = scaleLinear()
       .domain([0, dataMax])
       .range([0, this.props.size[1]])
   select("#" + this.props.graph)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect')

   select("#" + this.props.graph)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove()

   select("#" + this.props.graph)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', '#fe9922')
      .attr('x', (d,i) => i * 25)
      .attr('y', d => this.props.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 25)
   }
render() {
      return <svg id={this.props.graph} width={500} height={500}></svg>
   }
}
export default Graph1
