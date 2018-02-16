'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames4 = require('classnames');

var _classnames5 = _interopRequireDefault(_classnames4);

var _Icon = require('./../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function normalizeTypeToHeader(type) {
  return type.replace(/\b\w/g, function (l) {
    return l.toUpperCase();
  }) + '!';
}

var icons = {
  error: 'cross',
  warn: 'warn',
  success: 'check'
};

var Notification = function Notification(props) {
  var _classnames, _classnames2, _classnames3;

  return _react2.default.createElement(
    'section',
    { className: (0, _classnames5.default)((_classnames = {
        notification: true
      }, _classnames['notification_' + props.type] = !!props.type, _classnames))
    },
    _react2.default.createElement(
      'div',
      { className: (0, _classnames5.default)((_classnames2 = {
          'notification__icon-container': true
        }, _classnames2['notification__icon-container_' + props.type] = !!props.type, _classnames2))
      },
      _react2.default.createElement(_Icon2.default, { icon: icons[props.type || 'success'], md: true })
    ),
    _react2.default.createElement(
      'div',
      { className: 'notification__content' },
      _react2.default.createElement(
        'button',
        { className: 'notification__close-button', onClick: function onClick() {
            return props.close(props.id);
          } },
        _react2.default.createElement(_Icon2.default, { icon: 'cross', sm: true })
      ),
      _react2.default.createElement(
        'span',
        { className: (0, _classnames5.default)((_classnames3 = {
            notification__header: true
          }, _classnames3['notification__header_' + props.type] = !!props.type, _classnames3))
        },
        (props.header || normalizeTypeToHeader(props.type)) + props.id
      ),
      _react2.default.createElement(
        'p',
        { className: 'notification__message' },
        props.message
      )
    )
  );
};

Notification.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  message: _propTypes2.default.string,
  close: _propTypes2.default.func.isRequired,
  header: _propTypes2.default.string,
  type: _propTypes2.default.string
} : {};

Notification.defaultProps = { header: '', message: '', type: 'success' };

exports.default = Notification;
module.exports = exports['default'];