import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from './../Icon/Icon';

function normalizeTypeToHeader(type) {
  return `${type.replace(/\b\w/g, l => l.toUpperCase())}!`;
}

const icons = {
  error: 'cross',
  warn: 'warn',
  success: 'check',
};

const Notification = props => (
  <section className={classnames({
    notification: true,
    [`notification_${props.type}`]: !!props.type,
  })}
  >
    <div className={classnames({
      'notification__icon-container': true,
      [`notification__icon-container_${props.type}`]: !!props.type,
    })}
    >
      <Icon icon={icons[props.type || 'success']} md />
    </div>
    <div className="notification__content">
      <button className="notification__close-button" onClick={() => props.close(props.id)} >
        <Icon icon="cross" sm />
      </button>
      <span className={classnames({
        notification__header: true,
        [`notification__header_${props.type}`]: !!props.type,
      })}
      >{(props.header || normalizeTypeToHeader(props.type)) + props.id}
      </span>
      <p className="notification__message">{props.message}</p>
    </div>
  </section>
);

Notification.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  message: PropTypes.string,
  close: PropTypes.func.isRequired,
  header: PropTypes.string,
  type: PropTypes.string,
};

Notification.defaultProps = { header: '', message: '', type: 'success' };


export default Notification;
