import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import { fetchAjax } from './actions';

class App extends Component {
  componentDidMount(){
      const url = "https://www.reddit.com/r/reactjs.json";
      const dispatch = this.props.dispatch;
      dispatch(fetchAjax(url))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          ajax count: {this.props.count} <br/>
          requesing: {this.props.requesting}<br/>
          data:{this.props.data}
        </p>
      </div>
    );
  }
}
//map store's state to App's prop
const mapStateToProp = state => {
  const {count, requesting, data} = state
  return {
    count,
    requesting,
    data
  }
}

export default connect(mapStateToProp)(App)
