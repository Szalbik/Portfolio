import React from 'react';
import Header from '../sections/header/Header';
import Wrapper from '../sections/wrapper/Wrapper';
import About from '../sections/about/About';
import Skills from '../sections/skills/Skills';
// import Experience from '../sections/experience/Experience';
// import Education from '../sections/education/Education';
// import Projects from '../sections/projects/Projects';
import Contact from '../sections/contact/Contact';

class HomePage extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Header>
          <Wrapper>
            <About />
            <Skills />
          </Wrapper>
          {/* <Wrapper color="#2f4152">
            <Projects />
          </Wrapper> */}
          <Wrapper color="#f2f3f3">
            <Contact />
          </Wrapper>
        </Header>
      </div>
    );
  }
}

export default HomePage;
