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
    this.getInfo()
    //poll our database every x milliseconds
    this.timer = setInterval(()=> this.getInfo(), 10000);
  }

  getInfo() {
    axios.get('/api/')
      .then(res => {
        console.log(res.data)
        console.log(this.state.states)
        const newstate = res.data.map(x => {
            return [x.state, +x.count, x.last_update]
        })
        console.log(newstate)
        //this.setState({states: res.data})
        this.setState({states: newstate})
      })
  }

  

  render() {
    return (
      <div style={{
        height:"100%",
        width: "100%"
      }}>
        <ChoroplethMap key={this.state.states} data={this.state.states}/>
      </div>
    );
  }
}

export default App;
