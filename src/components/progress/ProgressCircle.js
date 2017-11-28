import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import './progress-circle.css';

const ProgressCircle = ({ text, proc }) => (
  <div>
    <CircularProgressbar
      backgroundPadding={5}
      strokeWidth={6}
      percentage={proc}
      textForPercentage={percentage => `${percentage}%`}
      initialAnimation
    />
    <p>{text}</p>
  </div>
);

ProgressCircle.propTypes = {
  text: PropTypes.string,
  proc: PropTypes.number,
};

ProgressCircle.defaultProps = {
  text: 'css',
  proc: 20,
};

export default ProgressCircle;
