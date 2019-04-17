import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

      //to be array of json objects from each states from route '/api/'
      states: [
        /*
        {
          "count": "1",
          "last_update": "2019-04-16T05:00:00.000Z",
          "state": "NV"
        }
        */
      ]
    }
  }

  componentDidMount() {
    //poll our database every x milliseconds
    this.timer = setInterval(()=> this.getInfo(), 1000*300);

    //initialize chart here
  }

  getInfo() {
    axios.get('/api/')
      .then(res => {
        console.log(res.data)
        this.setState({states: res.data})
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
