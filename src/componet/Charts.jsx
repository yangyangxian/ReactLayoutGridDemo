import React from 'react';

var echarts = require('echarts');

class Charts extends React.PureComponent {
    constructor(props) {
        super(props);
        console.log(props.width);
        this.state = {ll:""};
        
        this.state.option = {
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
        };
    }

    onResize() {
        console.log("About to re-rendering the chart!!!!!");
        this.state.ll = "11";
        this.setState();
        //myChart.render();
        echarts.init(document.getElementById('chart')).setOption(this.state.option)
    }

    componentDidMount(props) {
        console.log("A");
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

        let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
        let observer = new MutationObserver(function(event) {
            //console.log("resize!");

            console.log("resize!!!!!!!!!!!!");
          });
        observer.observe(document.getElementById("chart"), { attributes: true, attributeFilter: ['clientWidth'], attributeOldValue: true })

        window.addEventListener("chart", function(event) {
            //console.log("resize!");

            console.log("resize!!!!!!!!!!!!");
          })
        
        document.getElementById("chart").onresize = function(event) {
            //console.log("resize!");

            console.log("resize!!!!!!!!!!!!");
            var padding = 20,
              style = myChart.container.offsetParent.style;
            style.width = this.innerWidth - padding + 'px';
            style.height = this.innerHeight - padding + 'px';
          };
    }

    render() {
        console.log("render!!!");
        const style={
            height:'100%',
            width:'100%'
        };
        return (
            <div id="chart" style={style}></div>
        )
    }
}
export default Charts;

