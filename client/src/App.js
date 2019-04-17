import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ChoroplethMap from './components/ChoroplethMap';

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
      <div style={{
        height:"100vh",
        width: "100vw"
      }}>
        <ChoroplethMap data={this.state.data}/>
      </div>
    );
  }
}

export default App;
