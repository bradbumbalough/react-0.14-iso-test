var axios = require('axios');

var API = {
  getPeople: () => {
    return (
      axios.get('http://swapi.co/api/people/')
      .then((res) => {
        return res.data
      })
    )
  },
  getPerson: (id) => {
    return (
      axios.get('http://swapi.co/api/people/' + id + '/')
      .then((res) => {
        return res.data
      })
    )
  },
  getVehicles: () => {
    return (
      axios.get('http://swapi.co/api/vehicles/')
      .then((res) => {
        return res.data
      })
    )
  },
  getVehicle: (id) => {
    return (
      axios.get('http://swapi.co/api/vehicles/' + id + '/')
      .then((res) => {
        return res.data
      })
    )
  }
}

module.exports = API;
