import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      header: "Header from state ...",
      content: "Content from state ..."
    };
  }

  render() {
    return (
      <div>
        <header><h1>{ this.state.header}</h1></header>
        <content><h2>{this.state.content}</h2></content>
      </div>
    );
  }
}

export default App;
