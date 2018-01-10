import React, { Component } from 'react';
import './App.css';
import Quotes from './Quotes.js';
import getQuotes from './services/quotes.js';

class App extends Component {
  constructor() {
    super();
    console.log('constructor');
    this.state = {};
  }

  componentDidMount() {
    const defaultQuotes = [
      { name: 'default - a'},
      { name: 'default - b'},
    ];
    return getQuotes()
      .then(response => {
        console.log('getQuotes', response);
        if (response.quotes) {
          this.setState({
            quotes: response.quotes,
          });
        } else {
          this.setState({
            quotes: defaultQuotes
          });
        }
      });
  }

  render() {
    if (!this.state.quotes) {
      return null;
    }

    console.log('App render', this.state.quotes);
    return (
      <div className="App">
        <Quotes quotes={this.state.quotes}></Quotes>
      </div>
    );
  }
}

export default App;
