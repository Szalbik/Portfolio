import React from 'react';
import Header from '../sections/header/Header';
import Body from '../sections/body/Body';
import About from '../sections/about/About';
import Skills from '../sections/skills/Skills';
import Experience from '../sections/experience/Experience';

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
        <Body color="#2f4152">
          <Experience />
        </Body>
      </div>
    );
  }
}

export default HomePage;