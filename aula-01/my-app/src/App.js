import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    
    //this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  // Sintax experimental
  forceUpdateHandler = () => {
    this.forceUpdate();
  }
    
  render() {
    return (
      <div>
        <button onClick={ this.forceUpdateHandler}>FORCE UPDATE</button>
        <h4> Random number: { Math.random() }</h4>
      </div>
    );
  }
}

export default App;
