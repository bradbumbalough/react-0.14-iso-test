var React = require('react'),
    {render} = require('react-dom'),
    {Router} = require('react-router'),
    createBrowserHistory = require('history/lib/createBrowserHistory'),
    fetchData = require('./fetchData'),
    DataContext = require('./components/DataContext'),
    routes = require('./routes');

function AsyncProps(Component, props) {
  console.log(props)
  return <Component {...props}/>
}

render(
  <DataContext data={window.__DATA__} >
    <Router history={createBrowserHistory()} createElement={AsyncProps}>
      {routes}
    </Router>
  </DataContext>,
  document.getElementById('react-mount')
);
