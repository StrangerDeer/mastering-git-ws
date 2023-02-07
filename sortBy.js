const getBeers = require('./data')

function main(property) {
    const beers = getBeers();
    console.log('property:', property)

    if (property === 'abv') {
    const sortByABV = beers.sort(function(a,b) {
        return b.abv - a.abv
    });
    console.log(sortByABV);
    }
}

main(process.argv[2])

// Usage: node sortBy.js <score|abv>
// Example: node sortBy.js score