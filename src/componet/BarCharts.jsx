import React from 'react';

var echarts = require('echarts');

class BarCharts extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    onResize() {
        var chartDOM = document.getElementById(this.state.chartId);
        var mychart = echarts.getInstanceByDom(chartDOM);
        mychart.resize()
    }

    componentWillMount() {
        var option = {
            title: {
                //text: 'ECharts 入门示例'
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
        };

        this.setState((state, props) => ({ option: option }));

        var chartId = "chart" + parseInt(Math.random()*10000000);
        this.setState((state, props) => ({ chartId: chartId }));
    }

    componentDidMount(props) {
        var myChart = echarts.init(document.getElementById(this.state.chartId));
        console.log(this.state.option);
        myChart.setOption(this.state.option);
    }

    render() {
        const style={
            height:'100%',
            width:'100%'
        };
        const id = this.state.chartId;
        return (
            <div id={id} style={style}></div>
        )
    }
}
export default BarCharts;

