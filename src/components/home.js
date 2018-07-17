import React, { Component } from 'react';

import Header from './header';
import Card from './card'

class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header() }
        <Card />
      </div>
    );
  }
}

// things that need a fix
// clear space (generate button)

export default Home;