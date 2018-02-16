'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CounterLabel = function CounterLabel(_ref) {
  var label = _ref.label,
      value = _ref.value,
      color = _ref.color;
  return _react2.default.createElement(
    'span',
    { className: 'counter-label' },
    _react2.default.createElement(
      'span',
      { style: { color: color }, className: 'counter-label__label' },
      label
    ),
    _react2.default.createElement(
      'span',
      { style: { backgroundColor: color, color: '#fff' }, className: 'counter-label__value' },
      value
    )
  );
};

CounterLabel.propTypes = {
  label: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.number.isRequired,
  color: _propTypes2.default.string
};

CounterLabel.defaultProps = {
  color: ''
};

exports.default = CounterLabel;