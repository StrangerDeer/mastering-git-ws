const getBeers = require("./data");

function main(keyword) {
  const beers = getBeers();
  console.log("keyword:", keyword);
  // Tip: string.prototype.includes()
  const filtered = beers.filter((beer) => beer.name.includes(keyword));

  console.log(filtered);
}

main(process.argv[2]);

// Usage: node searchByName.js <keyword>
// Example: node searchByName.js Rabbit
