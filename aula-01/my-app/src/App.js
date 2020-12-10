import React from 'react';
//import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      data: ''
    };

    this.myInput = React.createRef();

    this.updateState = this.updateState.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  updateState (event) {
    this.setState({ data: event.target.value });
  }

  clearInput () {
    this.setState({ data: '' });
    //ReactDOM.findDOMNode(this.refs.myInput).focus();
    this.myInput.current.focus();
  }
    
  render() {
    return (
      <div>
        <input value={this.state.data} onChange={this.updateState} ref={this.myInput} />
        <button onClick={this.clearInput}>CLEAR</button>
        <h4>{this.state.data}</h4>
      </div>
    );
  }
}

export default App;
