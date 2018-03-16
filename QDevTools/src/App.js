import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ListBox from './components/ListBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        	<ListBox header="0" items={this.props["0"]}/>
        	<ListBox header="InProcess" items={this.props.InProcess}/>
        	<ListBox header="Done" items={this.props.Done}/>
        </header>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    '0': state.db['0'].queue,
    InProcess: state.db['InProcess'].queue,
    Done: state.db['Done'].queue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps,mapDispatchToProps)(App);