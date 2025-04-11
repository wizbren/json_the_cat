const needle = require('needle');
const fetchBreedDescription = function (breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

//GET request
  needle.get(url, (error, response, body) => {
    if (error) {
      callback(`Error fetching data: ${error}`, null);
      return;
    }

//Checks to make sure body has data
    if (!body || body.length === 0) {
      callback(`"${breedName}" not found`, null);
      return;
    }

//Pulls breed description
    const breed = body[0];
    callback(null, breed.description);
  })
};


module.exports = { fetchBreedDescription };