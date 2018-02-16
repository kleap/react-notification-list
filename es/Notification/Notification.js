import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from './../Icon/Icon';

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

  return React.createElement(
    'section',
    { className: classnames((_classnames = {
        notification: true
      }, _classnames['notification_' + props.type] = !!props.type, _classnames))
    },
    React.createElement(
      'div',
      { className: classnames((_classnames2 = {
          'notification__icon-container': true
        }, _classnames2['notification__icon-container_' + props.type] = !!props.type, _classnames2))
      },
      React.createElement(Icon, { icon: icons[props.type || 'success'], md: true })
    ),
    React.createElement(
      'div',
      { className: 'notification__content' },
      React.createElement(
        'button',
        { className: 'notification__close-button', onClick: function onClick() {
            return props.close(props.id);
          } },
        React.createElement(Icon, { icon: 'cross', sm: true })
      ),
      React.createElement(
        'span',
        { className: classnames((_classnames3 = {
            notification__header: true
          }, _classnames3['notification__header_' + props.type] = !!props.type, _classnames3))
        },
        (props.header || normalizeTypeToHeader(props.type)) + props.id
      ),
      React.createElement(
        'p',
        { className: 'notification__message' },
        props.message
      )
    )
  );
};

Notification.propTypes = process.env.NODE_ENV !== "production" ? {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  message: PropTypes.string,
  close: PropTypes.func.isRequired,
  header: PropTypes.string,
  type: PropTypes.string
} : {};

Notification.defaultProps = { header: '', message: '', type: 'success' };

export default Notification;