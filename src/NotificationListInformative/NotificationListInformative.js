import React from 'react';
import PropTypes from 'prop-types';
import NotificationList from './../NotificationList';
import CounterLabel from './../CounterLabel';

import './NotificationListInformative.scss';

const NotificationListInformative = (props) => {
  const { error, warn, success } = props.types.reduce((result, type) =>
    ({ ...result, [type]: result[type] ? result[type] + 1 : 1 }), {});
  return (
    <React.Fragment>
      {
        !!props.types.length &&
        <div className="notification-list-info" >
          {!!error && <CounterLabel color="#f05a5c" label="error" value={error} />}
          {!!warn && <CounterLabel color="#f4db05" label="warn" value={warn} />}
          {!!success && <CounterLabel color="#badc52" label="success" value={success} />}
        </div>
      }

      <NotificationList {...props} />
    </React.Fragment>
  );
};

NotificationListInformative.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  items: PropTypes.arrayOf(Object).isRequired,
  onNotificationClose: PropTypes.func.isRequired,
};


export default NotificationListInformative;
