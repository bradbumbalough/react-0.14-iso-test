var React = require('react');

var App = React.createClass({
  render() {
    return (
      <div>
      'Hello People!'
      {this.props.children}
    </div>
  )}
});

module.exports = App;
