import React from 'react';
import ProgressCircle from '../progress/ProgressCircle';

class HomePage extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <ProgressCircle proc={60} text="html" />
      </div>
    );
  }
}

export default HomePage;
