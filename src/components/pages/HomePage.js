import React from 'react';
import Header from '../sections/header/Header';
import Body from '../sections/body/Body';
import About from '../sections/about/About';
import Skills from '../sections/skills/Skills';

class HomePage extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <Body>
          <About />
          <Skills />
        </Body>
      </div>
    );
  }
}

export default HomePage;
