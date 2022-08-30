import axios from 'axios';

axios.get('https://pokeapi.co/api/v2/pokemon/charizar')
  .then(function (response) {
    // handle success
    console.log("success!!")
    console.log(response.data);

  })
  .catch(function (error) {
    // handle error
    console.log("errror!!")
    console.log(error.data);
  })
  .then(function () {
    // always executed
  });