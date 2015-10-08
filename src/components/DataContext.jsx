var React = require('react')

var DataContext = React.createClass({
  getInitialState() {
    return {
      data: this.props.data,
    }
  },
  childContextTypes: {
    data: React.PropTypes.object
  },
  getChildContext() {
    var {data} = this.state
    data.append = this.append
    data.remove = this.remove
    return { data }
  },
  append(component, newData, keyToRemove) {
    var {data} = this.state
    if (keyToRemove) {
      delete data[keyToRemove]
    }
    if (data[component] !== undefined) {
      for (var key in newData) {
        data[component][key] = newData[key]
      }
    } else {
        data[component] = newData
    }
    this.setState({data})
  },
  remove(component) {
    var data = this.state.data
    delete data[component]
    this.setState({data})
  },
  render() {
    return this.props.children
  }
})

module.exports = DataContext
