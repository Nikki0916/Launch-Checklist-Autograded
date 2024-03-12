// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
        const div = document.getElementById("missionTarget");
        div.innerHTML = `
          <h2>Mission Destination</h2>
          <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
          </ol>
          <img src="${imageUrl}"> 
          `;
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
 
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById('faultyItems');

    list.style.visibility = 'visible';

    // Validate input
    if (pilot === '' || copilot === '' || fuelLevel === '' || cargoMass === '') {
        alert("All fields are required.");
        return;
    }

    // Update shuttle requirements
    if (isNaN(fuelLevel) || isNaN(cargoMass)) {
        alert("Fuel level and cargo mass must be numbers.");
        return;
    }

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    fuelLevel = Number(fuelLevel);
    cargoMass = Number(cargoMass);

    if (fuelLevel < 10000) {
        faultyItems.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'red';
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }

    if (cargoMass > 10000) {
        faultyItems.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'red';
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    // Final check for both fuel and cargo
    if (fuelLevel >= 10000 && cargoMass <= 10000) {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = 'green';
    }


}
    

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json();  
    });
    return planetsReturned;
  }


  function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)];
 }
    
 
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;