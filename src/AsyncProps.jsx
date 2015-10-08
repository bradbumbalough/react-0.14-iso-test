var React = require('react'),
    fetchData = require('./fetchData')

function compareObjects(a, b) {
  var aKeys = Object.keys(a)
  var bKeys = Object.keys(b)
  var len = aKeys.length
  if (len != bKeys.length) return false
  for (var i = 0; i < len; i++) {
    if (a[aKeys[i]] !== b[bKeys[i]]) return false
  }
  return true
}

// component to get the props
var AsyncProps = React.createClass({
  propTypes: {
    Component: React.PropTypes.func,
    routerProps: React.PropTypes.object
  },

  contextTypes: {
    data: React.PropTypes.object
  },

  componentDidMount() {
    // fetch the data
    this.load(this.props)
  },

  componentWillReceiveProps(nextProps) {
    var {routeParams, route} = this.props.routerProps
    var nextRoute = nextProps.routerProps.route
    var nextRouteParams = nextProps.routerProps.routeParams
    var routeChanged = route !== nextRoute
    var routeParamsChanged = !compareObjects(routeParams, nextRouteParams)
    if ( routeChanged || routeParamsChanged) {
      this.load(nextProps, this.props)
    }
  },

  componentWillUnmount() {
    this.context.data.remove(this.props.Component.displayName)
  },

  load(props, oldProps) {
    var {Component} = props
    var {append, remove} = this.context.data
    //fetchData(props.routerProps).then((data) => {
    Component.loadData(props.routerProps).then((data) => {
      append(Component.displayName,data,oldProps !== undefined ? oldProps.Component.displayName : null)
    }, (error) => {
      console.log(err)
    })
  },

  render() {
    var {Component, routerProps} = this.props
    if (this.context.data[Component.displayName] !== undefined) {
      return <Component {...routerProps}/>
    } else {
      return null
    }
  }
})

module.exports = function asyncProps(Component, props) {
  return Component.loadData ?
    <AsyncProps Component={Component} routerProps={props}/> :
    <Component {...props} />
}
