import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Notification from './../Notification';

export class NotificationList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(Object).isRequired,
    onNotificationClose: PropTypes.func.isRequired,
    onNotificationTimeout: PropTypes.func,
    timeout: PropTypes.number,
    itemKey: PropTypes.string,
  }

  static defaultProps = {
    onNotificationTimeout: undefined,
    itemKey: 'id',
    timeout: 3000,
  }

  constructor(props) {
    super(props);
    this.timers = {};
  }

  componentDidMount() {
    const { items } = this.props;
    items.forEach(this.setTimer);
  }

  componentWillReceiveProps(nextProps) {
    const { items } = nextProps;
    const { items: olditems } = this.props;
    const difference = _.differenceBy(items, olditems, 'id');
    difference.forEach(this.setTimer);
  }

  onNotificationClose = (id) => {
    this.props.onNotificationClose(id);
  }

  onNotificationTimeout = (id) => {
    this.props.onNotificationTimeout(id);
    clearTimeout(this.timers[id]);
  }

  setTimer = ({ id }) => {
    this.timers[id] = setTimeout(
      () => (this.props.onNotificationTimeout ?
        this.onNotificationTimeout(id) :
        this.onNotificationClose(id)),
      this.props.timeout,
    );
  }

  render() {
    const items = this.props.items.map(item => (
      <Notification key={item[this.props.itemKey]} close={this.onNotificationClose} {...item} />));

    return (
      <div className="notification-list">
        <CSSTransitionGroup
          transitionName="notification-item"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {items}
        </CSSTransitionGroup>
      </div>);
  }
}

export default NotificationList;
