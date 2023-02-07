const getBeers = require('./data')

function main(type) {

    const beers = getBeers()

    const typeFilter = beers.filter(beer => beer.type.includes(type))

    console.log('type:', type)
    console.log(typeFilter)
}

main(process.argv[2])


// Usage: node filterByType.js <type>
// Example: node filterByType.js ALE