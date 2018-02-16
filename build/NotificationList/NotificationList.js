'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationList = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Notification = require('./../Notification');

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationList = exports.NotificationList = function (_Component) {
  _inherits(NotificationList, _Component);

  function NotificationList(props) {
    _classCallCheck(this, NotificationList);

    var _this = _possibleConstructorReturn(this, (NotificationList.__proto__ || Object.getPrototypeOf(NotificationList)).call(this, props));

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

  _createClass(NotificationList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var items = this.props.items;

      items.forEach(this.setTimer);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var items = nextProps.items;
      var olditems = this.props.items;

      var difference = _lodash2.default.differenceBy(items, olditems, 'id');
      difference.forEach(this.setTimer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var items = this.props.items.map(function (item) {
        return _react2.default.createElement(_Notification2.default, _extends({ key: item[_this2.props.itemKey], close: _this2.onNotificationClose }, item));
      });

      return _react2.default.createElement(
        'div',
        { className: 'notification-list' },
        items
      );
    }
  }]);

  return NotificationList;
}(_react.Component);

NotificationList.propTypes = {
  items: _propTypes2.default.arrayOf(Object).isRequired,
  onNotificationClose: _propTypes2.default.func.isRequired,
  onNotificationTimeout: _propTypes2.default.func,
  timeout: _propTypes2.default.number,
  itemKey: _propTypes2.default.string
};
NotificationList.defaultProps = {
  onNotificationTimeout: undefined,
  itemKey: 'id',
  timeout: 3000
};
exports.default = NotificationList;