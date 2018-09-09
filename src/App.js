import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IncrementCounter from './components/IncrementCounter';
import { connect } from 'react-redux';

class App extends Component {

  render() {

    const { count } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{count}</h1>
        </header>
        <IncrementCounter id="abc" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  
  
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(App);
