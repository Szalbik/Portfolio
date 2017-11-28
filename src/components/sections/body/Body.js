import React from 'react';
import PropTypes from 'prop-types';

const Body = props => (
  <div style={{ backgroundColor: `${props.color}` }}>
    <div className="ui container">{props.children}</div>
  </div>
);

Body.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Body.defaultProps = {
  color: 'white',
};

export default Body;
