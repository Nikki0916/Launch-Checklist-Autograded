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
 
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById('faultyItems');

    // list.style.visibility = 'visible';


    function formSubmission(document, pilotName, copilotName, fuelLevel, cargoMass) {
        // Validate input
        // const pilotValidation = validateInput(pilotName);
        // const copilotValidation = validateInput(copilotName);
        // const fuelValidation = validateInput(fuelLevel);
        // const cargoValidation = validateInput(cargoMass);
    
        // Update shuttle requirements
        const faultyItems = document.getElementById('faultyItems');
        const launchStatus = document.getElementById('launchStatus');
    
        if (pilotValidation === "Empty" || copilotValidation === "Empty" || fuelValidation === "Empty" || cargoValidation === "Empty") {
            alert("All fields are required.");
            return;
        }
    
        if (fuelValidation === "Is a Number" && parseInt(fuelLevel) < 10000) {
            faultyItems.style.visibility = 'visible';
            faultyItems.innerHTML = `<li id="fuelStatus">Fuel level too low for launch</li>`;
            launchStatus.textContent = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            return;
        }
    
        if (cargoValidation === "Is a Number" && parseInt(cargoMass) > 10000) {
            faultyItems.style.visibility = 'visible';
            faultyItems.innerHTML += `<li id="cargoStatus">Cargo mass exceeds limit</li>`;
            launchStatus.textContent = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            return;
        }
    
        // If everything is valid, shuttle is ready for launch
        launchStatus.textContent = "Shuttle is ready for launch";
        launchStatus.style.color = "green";
    }
    ; }

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
    // let planet = {};
    // // get random number and get planet that in 
    
    // return planet
 
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;