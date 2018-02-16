import React from 'react';
import PropTypes from 'prop-types';

class NotificationDispatcher extends React.Component {
  static propTypes = {
    showNotification: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      header: 'Header',
      message: 'Any message you want to show.',
      type: 'warn',
    };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  publish = () => {
    this.props.showNotification(this.state);
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: '300px auto' }}>
        <input onChange={this.onChange} type="text" name="header" defaultValue={this.state.header} />
        <textarea name="message" id="" onChange={this.onChange} defaultValue={this.state.message} cols="30" rows="10" />
        <select name="type" onChange={this.onChange} defaultValue={this.state.type}>
          <option>error</option>
          <option>warn</option>
          <option>ok</option>
        </select>
        <button onClick={this.publish}>publish</button>
      </div>
    );
  }
}

export default NotificationDispatcher;
