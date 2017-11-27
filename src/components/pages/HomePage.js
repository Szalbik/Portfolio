import React from 'react';
import ProgressCircle from '../progress/ProgressCircle';
import Header from '../sections/Header';

class HomePage extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <ProgressCircle proc={60} text="html" />
      </div>
    );
  }
}

export default HomePage;
