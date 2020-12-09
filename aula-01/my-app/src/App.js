import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      data: 'Initial data...'
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState () {
    this.setState({ data: 'Data updated from the child component...' });
  }
    
  render() {
    return (
      <div>
        <Content myDataProp = {this.state.data} updateStateProp = {this.updateState} />
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
    <div>
      <button onClick = {this.props.updateStateProp}>CLICK</button>
      <h3>{this.props.myDataProp}</h3>
    </div>
    );
  }
}

export default App;
