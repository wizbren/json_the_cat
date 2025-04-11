const needle = require('needle');
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

//Error and process exit if no breed name provided
if (!breedName) {
  console.log("Please provide breed name");
  process.exit(1);
}


//This is the GET request, passing url as first argument, and
//an anonymous callback as second argument
needle.get(url, (error, response, body) => {
  if (error) {
    console.error("Error fetching data: ", error);
    return;
  }
//Checks if its an array of obj, then prints the object
  console.log("Type of body: ", typeof body);
//Logs body content to make data visible
  console.log("Body content: ", body);

  //Checks to ensure body contains data
  if (body && body.length > 0) {
    const breed = body[0];
    console.log(`${breedName} is generally ${breed.description}`);
  } else {
    console.log(`"${breedName}" not found`);
  };
});