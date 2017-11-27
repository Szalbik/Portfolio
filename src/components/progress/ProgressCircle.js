import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import './progress-circle.css';

const ProgressCircle = ({ text, proc, maxWidth }) => (
  <div style={{ maxWidth: `${maxWidth}px` }}>
    <CircularProgressbar
      backgroundPadding={5}
      strokeWidth={6}
      percentage={proc}
      textForPercentage={() => `${text}`}
      initialAnimation
    />
  </div>
);

ProgressCircle.propTypes = {
  text: PropTypes.string,
  proc: PropTypes.number,
  maxWidth: PropTypes.number,
};

ProgressCircle.defaultProps = {
  text: 'css',
  proc: 20,
  maxWidth: 150,
};

export default ProgressCircle;
