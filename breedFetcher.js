const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

  request(url, (error, response, body) => {
    if (error) {
    callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
      callback("Breed not found :(", null);
      } else {
      callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };