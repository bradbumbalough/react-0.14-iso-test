var all = require('when/keys').all

var fetchData = module.exports = (renderProps) => {
  return all(renderProps.components.filter((component) => {
    return component.loadData
  }).reduce((promises, component) => {
    promises[component.displayName] = component.loadData();
    return promises
  }, {}))
}
