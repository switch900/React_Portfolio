import { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import QrContainer from './QRContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="Header">
          <h1>Andrew Hewitson</h1>
          <h3>React Portfolio</h3>
        </div>
        <NavBar />
        <QrContainer />
      </div>
    );
  }
}

export default App;
