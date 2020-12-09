import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      data: 'Initial data...'
    };

    this.updateStatus = this.updateStatus.bind(this);
  }

  updateStatus (event) {
    this.setState({ data: event.target.value });
  }
    
  render() {
    return (
      <div>
        <input type="text" value={this.state.data} onChange = {this.updateStatus} />
        <h4>{ this.state.data }</h4>
      </div>
    );
  }
}

export default App;
