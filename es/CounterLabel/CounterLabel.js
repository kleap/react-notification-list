import React from 'react';
import PropTypes from 'prop-types';

var CounterLabel = function CounterLabel(_ref) {
  var label = _ref.label,
      value = _ref.value,
      color = _ref.color;
  return React.createElement(
    'span',
    { className: 'counter-label' },
    React.createElement(
      'span',
      { style: { color: color }, className: 'counter-label__label' },
      label
    ),
    React.createElement(
      'span',
      { style: { backgroundColor: color, color: '#fff' }, className: 'counter-label__value' },
      value
    )
  );
};

CounterLabel.propTypes = process.env.NODE_ENV !== "production" ? {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  color: PropTypes.string
} : {};

CounterLabel.defaultProps = {
  color: ''
};

export default CounterLabel;