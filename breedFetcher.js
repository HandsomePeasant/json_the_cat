const request = require('request');
let url = "https://api.thecatapi.com/v1/breeds/search?q=" + process.argv.slice(2);

request(url, (error, response, body) => {
  if (error) {
    return console.log(`Encountered an error: ${error}`);
  }

  const data = JSON.parse(body);
    if (data.length === 0) {
    return console.log('Breed not found :(');
  } else {
    console.log(data[0].description);
  }
});