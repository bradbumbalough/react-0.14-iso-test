var React = require('react');

var App = React.createClass({
  render() {
    return (
      <div>
      'Hello World!'
      {this.props.children}
    </div>
  )}
})

module.exports = App;
