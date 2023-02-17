const request = require("request");
const breedName = process.argv[2];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
  (error, response, body) => {
    if (error) {
      return console.log("Failed to request details: ", error);
    }

    const data = JSON.parse(body);
    const breed = data[0];

    if (breed) {
      console.log(breed.description);
    } else {
      console.log(`${breedName} not found`);
    }
  }
);
