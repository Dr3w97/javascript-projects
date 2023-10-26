// Declare and assign the variables below
let nameOfSpaceShuttle
nameOfSpaceShuttle = "Determination"

let shuttleSpeed
shuttleSpeed = 17500

let distanceToMars
distanceToMars = 225000000

let distanceToMoon
distanceToMoon = 384400

let milesPerKilometer
milesPerKilometer = 0.621

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof (nameOfSpaceShuttle));
console.log(typeof (shuttleSpeed));
console.log(typeof (distanceToMars));
console.log(typeof (distanceToMoon));
console.log(typeof (milesPerKilometer));
// Calculate a space mission below
let milesToMars
milesToMars = (distanceToMars * milesPerKilometer)

// Print the results of the space mission calculations below
let hoursToMars
hoursToMars = (milesToMars / shuttleSpeed)

let daysToMars
daysToMars = (hoursToMars / 24)
console.log(nameOfSpaceShuttle," will take",daysToMars, " days to reach Mars.")

// Calculate a trip to the moon below
let milesToTheMoon 
milesToTheMoon = (distanceToMoon * milesPerKilometer)
let hoursToTheMoon 
hoursToTheMoon = (milesToTheMoon/shuttleSpeed)
let daysToTheMoon
daysToTheMoon = (hoursToTheMoon/24)

// Print the results of the trip to the moon below
console.log(nameOfSpaceShuttle," will take",daysToTheMoon, " days to reach the moons.")