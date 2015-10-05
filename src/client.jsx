var React = require('react'),
    {render} = require('react-dom'),
    {Router} = require('react-router'),
    createBrowserHistory = require('history/lib/createBrowserHistory'),
    asyncProps = require('./AsyncProps'),
    DataContext = require('./components/DataContext'),
    routes = require('./routes');

render(
  <DataContext data={window.__DATA__}>
    <Router history={createBrowserHistory()}>
      {routes}
    </Router>
  </DataContext>,
  document.getElementById('react-mount')
);
