var React = require('react'),
    {Link} = require('react-router'),
    API = require('../API')

var Person = React.createClass({
  statics: {
    loadData: (props) => {
      return API.getPerson(props.params.id)
    }
  },
  contextTypes: {
    data: React.PropTypes.object
  },
  render() {
    var {Person} = this.context.data.data
    return (
      <div>
        <Link to="/people">Back</Link>
        <h3>{Person.name}</h3>
      </div>
  )}
});

module.exports = Person;
