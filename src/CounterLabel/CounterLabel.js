import React from 'react';
import PropTypes from 'prop-types';


const CounterLabel = ({ label, value, color }) => (
  <span className="counter-label">
    <span style={{ color }} className="counter-label__label">
      {label}
    </span>
    <span style={{ backgroundColor: color, color: '#fff' }} className="counter-label__value">
      {value}
    </span>
  </span>
);

CounterLabel.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  color: PropTypes.string,
};

CounterLabel.defaultProps = {
  color: '',
};

export default CounterLabel;
