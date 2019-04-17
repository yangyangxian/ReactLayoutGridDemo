import React, {Component} from 'react';
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import Chartdemo from './chartdemo';
import BarChart from './BarChart';
import StackAreaChart from './StackAreaChart';
import BarCharts from './BarCharts';
import ChartPanel from './ChartPanel';
import Wrapper from './Wrapper';

const ReactGridLayout = WidthProvider(RGL);

class MyFirstGrid extends React.PureComponent {
    static defaultProps = {
        className: "layout",
        items: 20,
        rowHeight: 20,
        onLayoutChange: function() {},
        cols: 36
        };

    constructor(props) {
        super(props);
        const layout = [
            {i: '0', x: 0, y: 0, w: 5, h: 5, isResizable: true},
            {i: '1', x: 0, y: 200, w: 5, h: 5, isResizable: true},
            {i: 'b', x: 1, y: 400, w: 14, h: 9, minW: 1,isResizable: true},
            {i: 'c', x: 4, y: 400, w: 1, h: 2, isResizable: true},
            {i: 'd', x: 14, y: 400, w: 13, h: 10, isResizable: true}
          ];
        this.state = { layout };   
        
        this.childb = React.createRef();
        this.childd = React.createRef();
    }

    onLayoutChange(layout) {
        this.props.onLayoutChange(layout);

        this.setState({w : layout[1].w, h : layout[1].h });
    }

    onResize = (i) => {
      if(i == "b") {
        this.childb.current.onResize();
      } else if (i == "d") {
        this.childd.current.onResize();
      }

      this.setState({w : 2, h : 3});
    };
  

    onResizeStop(layout, newItem, e){
      console.log(e.i)
      this.onResize(e.i);
    }

    render() {
        // layout is an array of objects, see the demo for more complete usage  
        let chartType = ['chartdemo','barChart'];
        return (
          <ReactGridLayout layout={this.state.layout}
          onLayoutChange={this.onLayoutChange.bind(this)}
          onResizeStop={this.onResizeStop.bind(this)}
            {...this.props}>
              {
                chartType.map((item,index) => {
                      return  <div key={index}><ChartPanel chartType={item} /></div>
                  })
              }
            
            <div key="b"><BarCharts ref={this.childb} style={{width:'inherit'}}/></div>
            <div key="c">(*)</div>
            <div key="d"><StackAreaChart ref={this.childd} style={{width:'inherit'}}/></div>
          </ReactGridLayout>
        )
      }
}

export default MyFirstGrid;