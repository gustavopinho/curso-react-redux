import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Iniciando com ReactJs {props.subject}.
        </p>
      </header>
    </div>
  );
}

export default App;
