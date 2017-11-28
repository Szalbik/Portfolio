import React from 'react';
import PropTypes from 'prop-types';
import './title.scss';

const Title = ({ text }) => (
  <div className="title">
    <h2 className="title__text">{text}</h2>
  </div>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
