import React from 'react';
import PropTypes from 'prop-types';

const Body = props => <div className="ui container">{props.children}</div>;

Body.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Body;
