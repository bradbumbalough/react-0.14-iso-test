var express = require('express'),
    React = require('react'),
    {renderToString} = require('react-dom/server'),
    babelify = require('express-babelify-middleware'),
    {createLocation, createMemoryHistory, useQueries} = require('history'),
    routes = require('./routes'),
    fetchData = require('./fetchData'),
    DataContext = require('./components/DataContext'),
    path = require('path'),
    {match, RoutingContext} = require('react-router');

var app = express();

app.set('port',process.env.PORT || 3000);
app.set('view engine', 'ejs');

// bablified js file
app.get('/bundle.js', babelify(__dirname + '/client.js'));

// favicon
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'favicon.ico'))
})


// server router
app.get('*', (req, res) => {
  var history = useQueries(createMemoryHistory)()
  var location = history.createLocation(req.url)
  match({routes, location}, (error, redirectLocation, renderProps) => {
    if (redirectLocation)
      res.redirect(301, redirectLocation.pathname + redirectLocation.search)
    else if (error)
      res.send(500, error.message)
    else if (renderProps == null)
      res.send(404, 'Not found')
    else
      fetchData(renderProps).then((data) => {
        var clientHandoff = data,
            html = renderToString(<DataContext data={data}><RoutingContext {...renderProps}/></DataContext>);
        return res.render('index.ejs', { reactOutput: html, reactData: JSON.stringify(clientHandoff)});
      }, (error) => {
        console.log(error)
      });
  });
});

app.listen(app.get('port'));
