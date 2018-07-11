import React, { Component } from 'react';
import SearchBar from './SearchBar';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this)
    this.state = {
      searchTerm: ''
    }
  }

  handler(data) {
    this.setState({searchTerm: data})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Find All the Worst-Rated Businesses Near You</h1>
          <h3>{this.state.searchTerm}</h3>
        </header>
        <SearchBar handlerFromParent={this.handler} />
      </div>
    );
  }
}

export default App;
