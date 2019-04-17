import React from 'react';

var echarts = require('echarts');

class StackAreaChart extends React.PureComponent {
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
                //text: '堆叠区域图'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    areaStyle: {},
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'line',
                    stack: '总量',
                    areaStyle: {},
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'视频广告',
                    type:'line',
                    stack: '总量',
                    areaStyle: {},
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'直接访问',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'搜索引擎',
                    type:'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {normal: {}},
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };

        this.setState((state, props) => ({ option: option }));

        var chartId = "chart" + parseInt(Math.random()*10000000);
        this.setState((state, props) => ({ chartId: chartId }));
    }

    componentDidMount(props) {
        var myChart = echarts.init(document.getElementById(this.state.chartId));
        
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
export default StackAreaChart;
