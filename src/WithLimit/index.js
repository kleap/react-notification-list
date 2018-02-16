import React from 'react';
import PropTypes from 'prop-types';

export default (Component, { limit = 3 }) => class extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(Object).isRequired,
  }

  static displayName = `WithLimit${getDisplayName(Component)}`;

  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      pending: 0,
    };
    this.updating = false;
  }


  shouldComponentUpdate(nextProps) {
    const { items } = nextProps;
    if (!this.updating) {
      this.superSetState({ items: items.slice(0, limit), pending: items.slice(limit).length });
    }
    return false;
  }

  superSetState({ items, pending }) {
    this.setState({ items, pending }, () => {
      this.forceUpdate();
      this.updating = false;
    });
    this.updating = true;
  }

  render() {
    return (
      <Component {...this.props} items={this.state.items} types={this.props.items.map(i => i.type)} />);
  }
};


function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
