// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if(testInput === '') {
        return 'Empty';
    } else if (isNaN(testInput)) {
        return 'Not a Number';
    } else {
        return 'Is a Number';
    }
 };
 
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    let launchStatus = document.getElementById('launchStatus');
    list.style.visibility = 'visible';
    if (validateInput(pilot.value) !== 'Is a Number' || validateInput(copilot.value) !== 'Is a Number') {
        alert("Enter valid inputs");
        return;
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
    }

    if (validateInput(fuelLevel.value) === 'Is a Number') {
        if (Number(fuelLevel.value) < 10000) {
            list.style.visibility = 'visible';
            launchStatus.style.color = 'red';
            launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
            fuelStatus.innerHTML = 'Fuel level too low for launch';
        } else {
            fuelStatus.innerHTML = 'Fuel level high enough for launch';
        }
    }

    if (validateInput(cargoLevel.value) === 'Is a Number') {
        if (Number(cargoLevel.value) > 10000) {
            list.style.visibility = 'visible';
            launchStatus.style.color = 'red';
            launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
            cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
        } else {
            cargoStatus.innerHTML = 'Cargo mass low enough for launch';
        }
    }
    if (Number(fuelLevel.value) >= 10000 && Number(cargoLevel.value) <= 10000) {
        launchStatus.innerHTML = 'Shuttle is Ready for Launch';
        launchStatus.style.color = 'green';
    }
}
 
async function myFetch() {
    try {
        const response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
        const planetsData = await response.json();
        return planetsData;
    } catch (error) {
        console.log("Error fetching planets data:", error);
        return [];
    }
}

function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
}
    // let planet = {};
    // // get random number and get planet that in 
    
    // return planet
 
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;