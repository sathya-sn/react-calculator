
import React, {Component} from 'react';

class Key extends Component {
    render() {
        return (
            <ul className="calculator-button">
                <li><button value="1" onClick={e => this.props._onButtonClick(e.target.value)}>1</button></li>
                <li><button value="2" onClick={e => this.props._onButtonClick(e.target.value)}>2</button></li>
                <li><button value="3" onClick={e => this.props._onButtonClick(e.target.value)}>3</button></li>
                <li><button value="4" onClick={e => this.props._onButtonClick(e.target.value)}>4</button></li>
                <li><button value="5" onClick={e => this.props._onButtonClick(e.target.value)}>5</button></li>
                <li><button value="6" onClick={e => this.props._onButtonClick(e.target.value)}>6</button></li>
                <li><button value="7" onClick={e => this.props._onButtonClick(e.target.value)}>7</button></li>
                <li><button value="8" onClick={e => this.props._onButtonClick(e.target.value)}>8</button></li>
                <li><button value="9" onClick={e => this.props._onButtonClick(e.target.value)}>9</button></li>
                <li><button value="0" onClick={e => this.props._onButtonClick(e.target.value)}>0</button></li>
                <li><button value="+" onClick={e => this.props._onButtonClick(e.target.value)}>+</button></li>
                <li><button value="-" onClick={e => this.props._onButtonClick(e.target.value)}>-</button></li>
                <li><button value="*" onClick={e => this.props._onButtonClick(e.target.value)}>*</button></li>
                <li><button value="/" onClick={e => this.props._onButtonClick(e.target.value)}>/</button></li>
                <li><button value="CE" onClick={e => this.props._onButtonClick(e.target.value)}>cancel</button></li>
            </ul>
        );
    }
}