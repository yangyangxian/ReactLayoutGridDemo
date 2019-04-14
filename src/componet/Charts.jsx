import React from 'react';

var echarts = require('echarts');

class Charts extends React.PureComponent {
    constructor(props) {
        super(props);
        console.log(props.width) 
    }

    componentDidMount(props) {
        var myChart = echarts.init(document.getElementById('chart'));
        
        myChart.setOption({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });

        window.addEventListener("resize", function () {
            myChart.resize();
            //myCharts是你的初始化echarts图表时取的名字
          });
    }

    render() {
        return (
            <div id="chart"></div>
        )
    }
}
export default Charts;

