const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];


function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => driver.substring(0, name.length) === name)
}

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);

}

console.log(matchName(drivers, "Sammy"));
