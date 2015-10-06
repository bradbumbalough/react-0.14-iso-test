var React = require('react'),
    fetchData = require('./fetchData')

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
    var {Component, routerProps} = this.props
    var location = routerProps.location
    var nextLocation = nextProps.routerProps.location
    if (location !== nextLocation) {
      // this.setState({
      //   prevProps: this.props
      // })
      this.load(nextProps)
    }
  },

  load(props) {
    var {Component} = props
    fetchData(props.routerProps).then((data) => {
      this.context.data.append(data)
    }, (error) => {
      console.log(err)
    })
  },

  render() {
    var {Component, routerProps} = this.props
    return <Component {...routerProps}/>
  }
})

module.exports = function asyncProps(Component, props) {
  return Component.loadData ?
    <AsyncProps Component={Component} routerProps={props}/> :
    <Component {...props} />
}
