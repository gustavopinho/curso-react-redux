import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';

class App extends React.Component {
    render() {
    return (
      <div>
        <h1>{this.props.headerProp}</h1>
        <h1>{this.props.contentProp}</h1>
      </div>
    );
  }
}

App.defaultProps = {
  headerProp: " Header from props...",
  contentProp:"Content from props..."
}

export default App;
