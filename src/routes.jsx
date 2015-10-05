var React = require('react')
var {Route, IndexRoute} = require('react-router')

module.exports = [
  <Route path="/" component={require('./components/app')}>
    <IndexRoute component={require('./components/people')}>
      <Route path="/people/:id" component={require('./components/person')}/>
    </IndexRoute>
  </Route>
]
