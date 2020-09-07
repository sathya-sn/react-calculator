import React from 'react';
import './App.css';
import ResultDashboard from './ResultDashboard';
import KeysComponent from './KeysComponent';

class App extends Component {
  constructor(){
    super();

    this.state = {
        result: ""
    }
  }

  _onButtonClick(keyValue) {
    if(keyValue === "=")
      this._calculateValues();
    else if(keyValue === "CE")
      this._resetValues();
    else
      this.setState({
          result: this.state.result + keyValue
      })
  }

  _calculateValues() {
    try {
      const valueResult = this.state.result
      
      this.setState({
          result: (eval(valueResult) || "" ) + ""
      })
    } catch (err) {
      this.setState({
          result: `error while saving:: ${error}`
      })
    }
  }

  _resetValues() {
    this.setState({
        result: ""
    })
  }

  render() {
    return (
      <section className="calculator calculator-body">
          <h1>Calculator</h1>
          <ResultDashboard totalValue={this.state.result}/>
          <KeysComponent _onButtonClick={this.onClick}/>
      </section>
    );
  }
}

export default App;
