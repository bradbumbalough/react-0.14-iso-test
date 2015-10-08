var React = require('react'),
    API = require('../API'),
    {Link} = require('react-router')

var Vehicles = React.createClass({
  statics: {
    loadData: (props) => {
      return API.getVehicles()
    }
  },
  contextTypes: {
    data: React.PropTypes.object
  },
  render() {
    var {Vehicles} = this.context.data
    return (
      <div>
        <h2>Vehicles</h2>
        <ul>
          {
            Vehicles.results.map((vehicle) => {
              var id = vehicle.url.replace('http://swapi.co/api/vehicles/','').replace('/','')
              return <li key={vehicle.name}><Link to={`/vehicles/${id}`}>{vehicle.name}</Link></li>
            })
          }
        </ul>
        {this.props.children}
      </div>
  )}
});

module.exports = Vehicles;
