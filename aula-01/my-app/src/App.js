import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';

class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        header: "Header from props...",
        content: "Content from props..."
      };
    }
    render() {
    return (
      <div>
        <Header headerProp={this.state.header} />
        <Content contentProp={this.state.content} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return(
      <div>
        <h1> {this.props.headerProp}</h1>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return(
      <div>
        <h1> {this.props.contentProp}</h1>
      </div>
    );
  }
}

export default App;
