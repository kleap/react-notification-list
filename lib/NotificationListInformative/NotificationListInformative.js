'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NotificationList = require('./../NotificationList');

var _NotificationList2 = _interopRequireDefault(_NotificationList);

var _CounterLabel = require('./../CounterLabel');

var _CounterLabel2 = _interopRequireDefault(_CounterLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationListInformative = function NotificationListInformative(props) {
  var _props$types$reduce = props.types.reduce(function (result, type) {
    var _extends2;

    return _extends({}, result, (_extends2 = {}, _extends2[type] = result[type] ? result[type] + 1 : 1, _extends2));
  }, {}),
      error = _props$types$reduce.error,
      warn = _props$types$reduce.warn,
      success = _props$types$reduce.success;

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    !!props.types.length && _react2.default.createElement(
      'div',
      { className: 'notification-list-info' },
      !!error && _react2.default.createElement(_CounterLabel2.default, { color: '#f05a5c', label: 'error', value: error }),
      !!warn && _react2.default.createElement(_CounterLabel2.default, { color: '#f4db05', label: 'warn', value: warn }),
      !!success && _react2.default.createElement(_CounterLabel2.default, { color: '#badc52', label: 'success', value: success })
    ),
    _react2.default.createElement(_NotificationList2.default, props)
  );
};

NotificationListInformative.propTypes = process.env.NODE_ENV !== "production" ? {
  types: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  items: _propTypes2.default.arrayOf(Object).isRequired,
  onNotificationClose: _propTypes2.default.func.isRequired
} : {};

exports.default = NotificationListInformative;
module.exports = exports['default'];