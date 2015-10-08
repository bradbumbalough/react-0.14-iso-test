var React = require('react'),
    API = require('../API'),
    {Link} = require('react-router')

var People = React.createClass({
  statics: {
    loadData: (props) => {
      return API.getPeople()
    }
  },
  contextTypes: {
    data: React.PropTypes.object
  },
  render() {
    var {People} = this.context.data
    return (
      <div>
        <h2>People</h2>
          <ul>
            {
              People.results.map((person) => {
                var id = person.url.replace('http://swapi.co/api/people/','').replace('/','')
                return <li key={person.name}><Link to={`/people/${id}`}>{person.name}</Link></li>
              })
            }
          </ul>
        {this.props.children}
      </div>
  )}
});

module.exports = People;
