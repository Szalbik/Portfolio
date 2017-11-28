import React from 'react';
import ProgressCircle from '../progress/ProgressCircle';
import Header from '../sections/header/Header';
import Body from '../sections/body/Body';
import About from '../sections/about/About';

class HomePage extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <Body>
          <About />
        </Body>
        <ProgressCircle proc={60} text="html" />
      </div>
    );
  }
}

export default HomePage;
