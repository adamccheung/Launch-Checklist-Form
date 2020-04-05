// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
            <ol>
               <li>Name ${json[1].name}</li>
               <li>Diameter ${json[1].diameter}</li>
               <li>Star ${json[1].star}</li>
               <li>Distance from Earth ${json[1].distance}</li>
               <li>Number of Moons ${json[1].moons}</li>
            </ol>
            <img src="${json[1].image}">
         `;
      });
   });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotInput = document.getElementById('pilotName');
      let copilotInput = document.getElementById('copilotName');
      let fuelInput = document.getElementById('fuelLevel');
      let cargoInput = document.getElementById('cargoMass');
      let faultyItems = document.getElementById('faultyItems');
      let launchStatus = document.getElementById('launchStatus');
      let fuelStatus = document.getElementById('fuelStatus');
      let cargoStatus = document.getElementById('cargoStatus');
      let launchStatusCheck = document.getElementById('launchStatusCheck');
         if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
         alert("All fields are required!");
         } else if (isNaN(fuelInput.value) || isNaN(cargoInput.value)) {
              alert("Please enter a valid number.")
           } else if (fuelInput.value < 10000) {
                  fuelStatus.innerHTML = "There is not enough fuel for the journey.";
                  faultyItems.style.visibility = "visible";
                  launchStatus.innerHTML = "Shuttle not ready for launch.";
                  launchStatusCheck.style.backgroundColor = "red";
             } else if (cargoMass.value > 10000) {
                   cargoStatus.innerHTML = "There is too much mass for the shuttle to take off."
                   faultyItems.style.visibility = "visible";
                   launchStatus.innerHTML = "Shuttle not ready for launch.";
                   launchStatusCheck.style.color = "red";
               } else if (fuelInput.value >= 10000 && cargoMass.value <= 10000) {
                    launchStatusCheck.innerHTML = "Shuttle is ready for takeoff.";
                    launchStatusCheck.style.color = "green";

                 }

      event.preventDefault();
   });


   


});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
