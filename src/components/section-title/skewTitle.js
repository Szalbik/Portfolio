import React from 'react';
import PropTypes from 'prop-types';
import './skewTitle.scss';

const Title = ({ text }) => (
  <div className="skew-title">
    <h2 className="skew-title__text">{text}</h2>
  </div>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
