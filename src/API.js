var axios = require('axios');

var API = {
  getPeople: () => {
    return (
      axios.get('http://swapi.co/api/people/')
      .then((res) => {
        return res.data
      })
    )
  }
}

module.exports = API;
