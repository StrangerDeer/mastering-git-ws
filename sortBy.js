const getBeers = require('./data')

function main(property) {
    
    const beers = getBeers()
    
    if (property === 'score') {
        const scoreFilter = beers.sort( function (a,b) {
            return b.score - a.score
        });
    }
    console.log('property:', property)
   
    console.log(scoreFilter)

}

main(process.argv[2])

// Usage: node sortBy.js <score|abv>
// Example: node sortBy.js score