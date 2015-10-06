var React = require('react')
var {Route, IndexRoute} = require('react-router')

module.exports = [
  <Route path="/" component={require('./components/App')}>
    <IndexRoute component={require('./components/People')}/>
    <Route path="people" component={require('./components/People')}>
      <Route path=":id" component={require('./components/Person')}/>
    </Route>
    <Route path="vehicles" component={require('./components/Vehicles')}>
      <Route path=":id" component={require('./components/Vehicle')}/>
    </Route>
  </Route>
]
