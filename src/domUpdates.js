let domUpdates = {

  displayCustomerTrips(traveler, agency, displayArea){
    displayArea.innerHTML = '';
    traveler.scheduledTrips.forEach(trip => {
      let destination = traveler.scheduleDestinations.find(dest => trip.destinationID === dest.id)
      let tripCost = agency.calculateTripCost(trip.id)
      displayArea.innerHTML += `
      <article class="traveler-trip">
        <div class="image-wrapper" style="background-image: url(${destination.image});">
          <h1 class="destination-title">${destination.destination}</h1>
        </div>
        <div class="info-wrapper">
          <h2 class="travel-date">Departure: ${trip.date}</h2>
          <p class="travel-duration">Days: ${trip.duration}</p>
          <p class="travel-cost">Cost: $${tripCost.total}</p>
          <div class= "travelers-wrapper">
            <img class="person-icon" src="./images/person-grey.png" alt="suitcase">
            <p class="number-of-travalers">${trip.travelers}</p>
          </div>
        </div>
      </article>
      `
    })
  },

  displayCustomerFooter(agency, traveler, welcomeElement, expenseElement){
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let yearExpense = agency.calculateCustomerTotalYearExpense(traveler.id, currentYear.toString())
    console.log(traveler, currentYear, yearExpense)
    welcomeElement.innerText = `Welcome, ${traveler.name}!`
    expenseElement.innerText = `$${yearExpense}`
  },

  populateDestinationOptions(destinationNames, inputField){
    destinationNames.forEach(name => {
      let option = document.createElement("option")
      option.value = name;
      option.innerHTML = name;
      inputField.appendChild(option)
    })
  },

  changeDepartDateDefault(elementId, date){
    document.getElementById(elementId).value = date;
    document.getElementById(elementId).min = date;
  },
  // 
  // setReturnDateDefault(){
  //   document.getElementById('return-date').min = document.getElementById('depart-date').value
  // }
};


export default domUpdates;
