import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, compose, bindActionCreators } from 'redux';
import { WithLimit, NotificationList } from '@kleap/react-notification-list';
import NotificationDispatcher from './NotificationDispatcher';

function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0;
  }
  switch (action.type) {
    case 'CLOSE_NOTIFICATION':
      return state.filter(n => n.id !== action.id);
    case 'SHOW_NOTIFICATION':
      return [...state, action.item];
    default:
      return state;
  }
}

function closeNotification(id) {
  return { type: 'CLOSE_NOTIFICATION', id };
}

function showNotification(item) {
  return { type: 'SHOW_NOTIFICATION', item: { ...item, id: Date.now().toString() } };
}

const LimitedNotificationList = WithLimit(NotificationList, { limit: 3 });

const NotificationContainer = connect(state => ({
  items: state,
}), dispatch => ({
  onNotificationClose: bindActionCreators(closeNotification, dispatch),
}))(LimitedNotificationList);

const store = createStore(counter, [], compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <NotificationContainer items={store.getState()} timeout={100000} />
      <NotificationDispatcher
        showNotification={(item) => {
          store.dispatch(showNotification(item));
        }}
      />
    </React.Fragment>
  </Provider>,
  document.getElementById('app'),
);

