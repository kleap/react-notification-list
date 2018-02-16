var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import NotificationList from './../NotificationList';
import CounterLabel from './../CounterLabel';

var NotificationListInformative = function NotificationListInformative(props) {
  var _props$types$reduce = props.types.reduce(function (result, type) {
    var _extends2;

    return _extends({}, result, (_extends2 = {}, _extends2[type] = result[type] ? result[type] + 1 : 1, _extends2));
  }, {}),
      error = _props$types$reduce.error,
      warn = _props$types$reduce.warn,
      success = _props$types$reduce.success;

  return React.createElement(
    React.Fragment,
    null,
    !!props.types.length && React.createElement(
      'div',
      { className: 'notification-list-info' },
      !!error && React.createElement(CounterLabel, { color: '#f05a5c', label: 'error', value: error }),
      !!warn && React.createElement(CounterLabel, { color: '#f4db05', label: 'warn', value: warn }),
      !!success && React.createElement(CounterLabel, { color: '#badc52', label: 'success', value: success })
    ),
    React.createElement(NotificationList, props)
  );
};

NotificationListInformative.propTypes = process.env.NODE_ENV !== "production" ? {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  items: PropTypes.arrayOf(Object).isRequired,
  onNotificationClose: PropTypes.func.isRequired
} : {};

export default NotificationListInformative;