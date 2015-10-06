var React = require('react'),
    API = require('../API')

var Person = React.createClass({
  statics: {
    key: 'Person',
    loadData: (props) => {
      return API.getPerson(props.params.id)
    }
  },
  contextTypes: {
    data: React.PropTypes.object
  },
  render() {
    var {Person} = this.context.data.data
    console.log(Person)
    return (
      <div>
        <h1>{Person.name}</h1>
      </div>
  )}
});

module.exports = Person;
