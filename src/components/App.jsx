var React = require('react'),
    {Link} = require('react-router')

var activeStyle = {
  fontWeight: 'bold'
}

var App = React.createClass({
  render() {
    return (
        <div>
          <h1>React 0.14 Isomorphic Test App</h1>
          <ul>
            <li><Link to="/people" activeStyle={activeStyle} >People</Link></li>
            <li><Link to="/vehicles" activeStyle={activeStyle}>Vehicles</Link></li>
          </ul>
          {this.props.children}
        </div>
      )}
})

module.exports = App;
