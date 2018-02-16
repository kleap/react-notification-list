import React from 'react';
import PropTypes from 'prop-types';
import NotificationList from './../NotificationList';
import './NotificationListInformative.scss';

const NotificationListInformative = props => (
  <React.Fragment>
    <NotificationList {...props} />
    <div className="notification-list-info">
      <span className="notification-list-info__total">
        <span className="notification-list-info__total-value">
          {props.total}
        </span>
      </span>
      <span className="notification-list-info__pending">
        <span className="notification-list-info__pending-text" />
        {props.pending}
      </span>
    </div>
  </React.Fragment>
);

NotificationListInformative.propTypes = {
  pending: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(Object).isRequired,
  onNotificationClose: PropTypes.func.isRequired,
};


export default NotificationListInformative;
