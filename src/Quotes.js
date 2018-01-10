import React, { Component } from 'react';

class Quotes extends Component {
  constructor(props) {
    super();
    console.log('Quotes constructor');
  }

  render() {
    console.log('Quotes render');
    return (
      <ul>
        {
          this.props.quotes.map((quote) => (<li key={quote.name}>{quote.name}</li>))
        }
      </ul>
    );
  }
}

export default Quotes;
