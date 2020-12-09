import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state =  {
      data: []
    };

    this.setStateHandle = this.setStateHandle.bind(this);
  }

  setStateHandle () {
    let item = "setState ...";
    let myArray = [...this.state.data];
    
    myArray.push(item);
    this.setState({data: myArray});
  }
    
  render() {
    return (
      <div>
        <button onClick={this.setStateHandle}>SET STATE</button>
        <h4> State Array: {this.state.data}</h4>
      </div>
    );
  }
}

export default App;
