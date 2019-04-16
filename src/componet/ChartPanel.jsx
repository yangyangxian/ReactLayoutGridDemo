import React from 'react';
import _ from "lodash";
import Chartdemo from './chartdemo';
import BarChart from './BarChart';

class ChartPanel extends React.PureComponent {
    constructor(props) {
        super(props);
        let chartType = '';
        this.chartType = chartType;
        //this.state = chartType;
    }

    renderDetail(chartType){     
        let dynamicDetail:any = null; 
        switch (chartType){
          case 'chartdemo':{
            dynamicDetail = Chartdemo;
            break;
          }
          case 'barChart':{
            dynamicDetail = BarChart;
            break;
          }
          default:{         
            break;
          }
        }
          return dynamicDetail;
    }

        render() {
            let DynamicDetail = this.renderDetail(this.props.chartType);
            return (<div >
                    <DynamicDetail/>
            </div>)
        }
}
export default ChartPanel;