import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = props => (
  <div style={{ backgroundColor: `${props.color}` }}>
    <div className="ui container">{props.children}</div>
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Wrapper.defaultProps = {
  color: 'white',
};

export default Wrapper;
