import React from 'react';
import { Bar } from 'ant-design-pro/lib/Charts';

class barChart extends React.PureComponent {
    constructor(props) {
        super(props);
        const salesData = [];
        for (let i = 0; i < 12; i += 1) {
        salesData.push({
            x: `${i + 1}月`,
            y: Math.floor(Math.random() * 1000) + 200,
        });
        }

         this.salesData = salesData;
    }
        
        render() {
            return (
                <Bar
                    height={200}                    
                    title="销售额趋势"
                    data={this.salesData}
                />
            )
        }
}
export default barChart;