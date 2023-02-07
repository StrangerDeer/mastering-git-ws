const getBeers = require('./data')

function main(property) {
    
    console.log('property:', property)
    const beers = getBeers()
    
    if (property === 'score') {
        const scoreFilter = beers.sort( function (a,b) {
            return b.score - a.score
        });
        console.log(scoreFilter)
    }
   

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