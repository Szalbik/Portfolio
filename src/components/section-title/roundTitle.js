import React from 'react';
import PropTypes from 'prop-types';
import './roundTitle.scss';

const Title = ({ text }) => (
  <div className="round-title">
    <h2 className="round-title__text">{text}</h2>
  </div>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
