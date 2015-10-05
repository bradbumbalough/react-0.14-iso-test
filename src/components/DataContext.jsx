var React = require('react');

var DataContext = React.createClass({
  childContextTypes: {
    data: React.PropTypes.object
  },
  getChildContext() {
    return {
      data: this.props.data
    }
  },
  render() {
    return this.props.children
  }
});

module.exports = DataContext;
