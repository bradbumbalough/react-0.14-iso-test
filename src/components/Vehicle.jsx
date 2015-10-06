var React = require('react'),
    {Link} = require('react-router'),
    API = require('../API')

var Vehicle = React.createClass({
  statics: {
    loadData: (props) => {
      return API.getVehicle(props.params.id)
    }
  },
  contextTypes: {
    data: React.PropTypes.object
  },
  render() {
    var {Vehicle} = this.context.data.data
    return (
      <div>
        <Link to="/vehicles">Back</Link>
        <h3>{Vehicle.name}</h3>
      </div>
  )}
});

module.exports = Vehicle;
