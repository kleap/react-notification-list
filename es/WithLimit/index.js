var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

export default (function (Component, _ref) {
  var _class, _temp;

  var _ref$limit = _ref.limit,
      limit = _ref$limit === undefined ? 3 : _ref$limit;
  return _temp = _class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

      _this.state = {
        items: props.items,
        pending: 0
      };
      _this.updating = false;
      return _this;
    }

    _class.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
      var items = nextProps.items;

      if (!this.updating) {
        this.superSetState({ items: items.slice(0, limit), pending: items.slice(limit).length });
      }
      return false;
    };

    _class.prototype.superSetState = function superSetState(_ref2) {
      var _this2 = this;

      var items = _ref2.items,
          pending = _ref2.pending;

      this.setState({ items: items, pending: pending }, function () {
        _this2.forceUpdate();
        _this2.updating = false;
      });
      this.updating = true;
    };

    _class.prototype.render = function render() {
      return React.createElement(Component, _extends({}, this.props, { items: this.state.items, types: this.props.items.map(function (i) {
          return i.type;
        }) }));
    };

    return _class;
  }(React.Component), _class.propTypes = {
    items: PropTypes.arrayOf(Object).isRequired
  }, _class.displayName = 'WithLimit' + getDisplayName(Component), _temp;
});

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}