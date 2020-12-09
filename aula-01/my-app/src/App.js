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
    this.setState({ data: 'Data updated...' });
  }
    
  render() {
    return (
      <div>
        <button onClick = {this.updateState}>CLICK</button>
        <h4>{ this.state.data }</h4>
      </div>
    );
  }
}

export default App;
