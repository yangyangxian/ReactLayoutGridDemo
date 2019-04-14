import React, {Component} from 'react';

export default class Wrapper extends Component {
    render() {
        var that = this;
        var newChildren = React.Children.map(this.props.children, function(child) {
            return React.cloneElement(child, { width: that.props.style.width,
                height: that.props.style.height})
        });
        return (
            <div {...this.props}>
                {newChildren}
            </div>
        );
    }
}
