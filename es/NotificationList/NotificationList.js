var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from './../Notification';

export var NotificationList = (_temp = _class = function (_Component) {
  _inherits(NotificationList, _Component);

  function NotificationList(props) {
    _classCallCheck(this, NotificationList);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.onNotificationClose = function (id) {
      _this.props.onNotificationClose(id);
      clearTimeout(_this.timers[id]);
    };

    _this.onNotificationTimeout = function (id) {
      _this.props.onNotificationTimeout(id);
      clearTimeout(_this.timers[id]);
    };

    _this.setTimer = function (_ref) {
      var id = _ref.id;

      _this.timers[id] = setTimeout(function () {
        return _this.props.onNotificationTimeout ? _this.onNotificationTimeout(id) : _this.onNotificationClose(id);
      }, _this.props.timeout);
    };

    _this.timers = {};
    return _this;
  }

  NotificationList.prototype.componentDidMount = function componentDidMount() {
    var items = this.props.items;

    items.forEach(this.setTimer);
  };

  NotificationList.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var items = nextProps.items;
    var olditems = this.props.items;

    var difference = _.differenceBy(items, olditems, 'id');
    difference.forEach(this.setTimer);
  };

  NotificationList.prototype.render = function render() {
    var _this2 = this;

    var items = this.props.items.map(function (item) {
      return React.createElement(Notification, _extends({ key: item[_this2.props.itemKey], close: _this2.onNotificationClose }, item));
    });

    return React.createElement(
      'div',
      { className: 'notification-list' },
      items
    );
  };

  return NotificationList;
}(Component), _class.defaultProps = {
  onNotificationTimeout: undefined,
  itemKey: 'id',
  timeout: 3000
}, _temp);

NotificationList.propTypes = process.env.NODE_ENV !== "production" ? {
  items: PropTypes.arrayOf(Object).isRequired,
  onNotificationClose: PropTypes.func.isRequired,
  onNotificationTimeout: PropTypes.func,
  timeout: PropTypes.number,
  itemKey: PropTypes.string
} : {};
export default NotificationList;