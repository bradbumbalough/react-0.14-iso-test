var React = require('react')

var DataContext = React.createClass({
  getInitialState() {
    console.log(this.props.data)
    return {
      data: this.props.data,
    }
  },
  childContextTypes: {
    data: React.PropTypes.object
  },
  getChildContext() {
    return {
      data: {
        append: this.append,
        remove: this.remove,
        data: this.state.data
      }
    }
  },
  append(newData) {
    console.log(newData)
    var {data} = this.state
    for (var key in newData) {
      data[key] = newData[key]
      this.setState({data})
    }
  },
  remove(key) {
    var data = this.state.data
    delete data[key]
    this.setState({data})
  },
  render() {
    return this.props.children
  }
})

module.exports = DataContext
