import Agency from './agency.js';
import Traveler from './traveler.js';
import domUpdates from './domUpdates.js';

let fetchRequests = {
    postTripUrl:"http://localhost:3001/api/v1/trips",
    postNewDestinationUrl: "http://localhost:3001/api/v1/destinations",
    changeTripStatusUrl: "http://localhost:3001/api/v1/updateTrip",

    getAllUserData(){
    return fetch("http://localhost:3001/api/v1/travelers")
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
  },

    getSingleUserData(id){
    return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
  },

    getAllDestinationData(){
    return fetch("http://localhost:3001/api/v1/destinations")
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
  },

    getAllTripData(){
    return fetch("http://localhost:3001/api/v1/trips")
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
  },

  createPostOption(data){
    let option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    };
    return option;
  },

  updateData(url, option, agency, traveler, travelerID, tripId){
    return fetch(url, this.createPostOption(option))
      .then(response => response.json())
      .then(message => {
        Promise.all([
          fetchRequests.getAllUserData(),
          fetchRequests.getAllDestinationData(),
          fetchRequests.getAllTripData(),
          fetchRequests.getSingleUserData(travelerID)
        ])
          .then(data => {
            agency = new Agency(
              data[0].travelers,
              data[2].trips,
              data[1].destinations
            );
            traveler = new Traveler(
              data[3],
              agency.filterTripsByCustomerID(travelerID),
              agency.compileCustomerDestinations(travelerID)
            );
            domUpdates.displayCustomerTrips(traveler, agency)
            domUpdates.displayCustomerFooter(agency, traveler)
            domUpdates.populateReceipt(agency.calculateTripCost(tripId))
          })
      })
      .catch(error => console.log(error))
  },

  deleteSingleTrip(id){
    return fetch(`http://localhost:3001/api/v1/trips/${id}`, {method: "DELETE"})
      .then(response => response.json())
      .then(message => console.log(message))
      .catch(error => console.log(error))
  },


}

export default fetchRequests;
