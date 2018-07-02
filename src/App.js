import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import { fetchAjax } from './actions';

class App extends Component {
  componentDidMount(){
     // THIS triggers the thunk "fetchAjax"
      const url = "https://www.reddit.com/r/reactjs.json";
      const dispatch = this.props.dispatch;
      dispatch(fetchAjax(url))
  }
  render() {
    const requesting = this.props.ajaxReducer.requesting;
    const dataJson =  JSON.stringify(this.props.ajaxReducer.data) ;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          ajax count: {this.props.countReducer.count} <br />
          {requesting && "Requesting "+this.props.ajaxReducer.url}
          {!requesting && `url from ${this.props.ajaxReducer.url} returns ${dataJson}`}
        </p>
      </div>
    );
  }
}
//map store's state to App's prop
const mapStateToProp = state => {
  const { countReducer, ajaxReducer } = state
  return {
    countReducer,
    ajaxReducer
  }
}

export default connect(mapStateToProp)(App)
