const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];


if (!breedName) {
  console.log("Please provide breed name");
  process.exit(1);
}

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log(description);
  }
});