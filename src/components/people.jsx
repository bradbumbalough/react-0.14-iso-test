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
    return (
      <div>
        <h1>Select Your Favorite Star Wars Character</h1>
        <ul>
          {
            this.context.data.People.results.map((person) => {
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
