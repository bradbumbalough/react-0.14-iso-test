var React = require('react'),
    {render} = require('react-dom'),
    {Router} = require('react-router'),
    createBrowserHistory = require('history/lib/createBrowserHistory'),
    routes = require('./routes');

render(
  <Router history={createBrowserHistory()}>
    {routes}
  </Router>,
  document.getElementById('react-mount')
);
