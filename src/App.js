import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style = {titleStyle} id = "2Gather_title">
            <span style={big2}>2</span>Gather</div>
      </div>
    );
  }
}
const titleStyle = {
    fontFamily: 'Modak',
    fontSize: 100,
    color: 'green'
};

const  big2 = {
    fontFamily: 'Modak',
    fontSize: 100,
    color: 'blue'
};
export default App;
