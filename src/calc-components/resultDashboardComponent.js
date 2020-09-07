
import React, {Component} from 'react';

class ResultDashboard extends Component {
    render() {
        return (
            <div className="result-dashboard">
                <p>{this.props.totalValue}</p>
            </div>
        );
    } 
}