var React = require('react'),
    {render} = require('react-dom'),
    {Router} = require('react-router'),
    createBrowserHistory = require('history/lib/createBrowserHistory'),
    fetchData = require('./fetchData'),
    DataContext = require('./components/DataContext'),
    routes = require('./routes'),
    asyncProps = require('./AsyncProps')

render(
  <DataContext data={window.__DATA__} >
    <Router history={createBrowserHistory()} createElement={asyncProps}>
      {routes}
    </Router>
  </DataContext>,
  document.getElementById('react-mount')
);
