var all = require('when/keys').all

function getComponents(props) {
  // return an array of the rendered components
  return props.components !== undefined ?
    props.components :
    props.routes.map((route) => {
      return route.component
    })
}

var fetchData = module.exports = (renderProps) => {
  return all(getComponents(renderProps).filter((component) => {
    return component.loadData
  }).reduce((promises, component) => {
    promises[component.displayName] = component.loadData(renderProps);
    return promises
  }, {}))
}
