import React, {Component} from 'react';
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import Chartdemo from './chartdemo';
import Charts from './Charts';
import Wrapper from './Wrapper';

const ReactGridLayout = WidthProvider(RGL);

class MyFirstGrid extends React.PureComponent {
    static defaultProps = {
        className: "layout",
        items: 20,
        rowHeight: 60,
        onLayoutChange: function() {},
        cols: 12
        };

    constructor(props) {
        super(props);
        const layout = [
            {i: 'a', x: 0, y: 0, w: 5, h: 5, isResizable: true},
            {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 1, maxW: 5,isResizable: true},
            {i: 'c', x: 4, y: 0, w: 1, h: 2, isResizable: true}
          ];
        this.state = { layout };        
    }

    onLayoutChange(layout) {
        this.props.onLayoutChange(layout);
    }

    render() {
        // layout is an array of objects, see the demo for more complete usage        
        return (
          <ReactGridLayout layout={this.state.layout}
          onLayoutChange={this.onLayoutChange}
            {...this.props}>
            <div key="a"><Chartdemo /></div>
            <Wrapper key="b"><Charts /></Wrapper>
            <div key="c">(*)</div>
          </ReactGridLayout>
        )
      }
}

export default MyFirstGrid;