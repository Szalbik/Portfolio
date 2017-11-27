import React from 'react';

class ProgressCircle extends React.Component {
  state = {};

  render() {
    return (
      <div className="radial-progress">
        <div className="circle">
          <div className="fill" />
        </div>
      </div>
    );
  }
}

export default ProgressCircle;
