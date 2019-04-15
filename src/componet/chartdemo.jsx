import React from 'react';
import { Pie, yuan } from 'ant-design-pro/lib/Charts';

class chartdemo extends React.PureComponent {
    constructor(props) {
        super(props);
        const salesPieData = [
            {
                x: '家用电器',
                y: 4544,
            },
            {
                x: '食用酒水',
                y: 3321,
            },
            {
                x: '个护健康',
                y: 3113,
            },
            {
                x: '服饰箱包',
                y: 2341,
            },
            {
                x: '母婴产品',
                y: 1231,
            },
            {
                x: '其他',
                y: 1231,
            },
         ];

         this.salesPieData = salesPieData;
    }
        
        render() {
            return (
                <Pie  hasLegend   title="销售额"   subTitle="销售额"
                total={() => (
                    <span
                        dangerouslySetInnerHTML={{
                        __html: yuan(this.salesPieData.reduce((pre, now) => now.y + pre, 0))
                        }}
                    />
                )}
                data={this.salesPieData}
                valueFormat={val => <span dangerouslySetInnerHTML={{ __html: yuan(val) }} />}
                height={200}
                />
            )
        }
}
export default chartdemo;