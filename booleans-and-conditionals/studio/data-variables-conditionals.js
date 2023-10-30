// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "Ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimunFuelTemp = -300;
let maximunFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "Clear";
let preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    preparedForLiftOff = false
}
// add logic below to verify all astronauts are ready
if (astronautStatus !== "Ready") {
    preparedForLiftOff = false
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > 850000) {
    preparedForLiftOff = false
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius < minimunFuelTemp || fuelTempCelsius > maximunFuelTemp) {
    preparedForLiftOff = false
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel !== "100%") {
    preparedForLiftOff = false
}
// add logic below to verify the weather status is clear
if (weatherStatus !== "Clear") {
    preparedForLiftOff = false
}
// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff) {
    console.log("10..9..8..7..6..5..4..3..2..1..LIFTOFFFFFF")
    console.log("Date: " + date)
    console.log("Time: " + time)
    console.log("Astronaut Count: " + astronautCount)
    console.log("Crew Mass: " + crewMassKg)
    console.log("Fuel Mass: " + fuelMassKg)
    console.log("Shuttle Mass: " + shuttleMassKg)
    console.log("Total Mass: " + totalMassKg)
    console.log("Fuel Temp: " + fuelTempCelsius + " *C")
    console.log("Weather Status: " + weatherStatus)
    console.log("Have a safe flight!")
} else {
    console.log("ABORT! ABORT! ABORT!")
}

let jsCreator = "Brendan Eich";

console.log(jsCreator[-1]);
console.log(jsCreator[42]);

let phrase = "JavaScript rocks!";
console.log(phrase[phrase.length - 8]);

word = 'JavaScript';
console.log(word.slice(1,6))

let pluralNoun = "trees";
let name = "Drew";
let verb = "run";
let adjective = "Fast";
let color = "Blue";

console.log(`JavaScript provides a ${color} collection of tools — including ${adjective} syntax and ${pluralNoun} that allows ${name}to ${verb} with strings.`);
