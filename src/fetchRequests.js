import Agency from './agency.js';
import Traveler from './traveler.js';
import domUpdates from './domUpdates.js';

let fetchRequests = {
    postTripUrl:"http://localhost:3001/api/v1/trips",
    postNewDestinationUrl: "http://localhost:3001/api/v1/destinations",
    changeTripStatusUrl: "http://localhost:3001/api/v1/updateTrip",
  // fetchRequests.deleteSingleTrip(4)

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

//Provided by Traveler.bookTrip()
  // addTripObj: {
  //   id: 5230,
  //   userID: 23,
  //   destinationID: 24,
  //   travelers: 2,
  //   date: "2020/05/23",
  //   duration: 12,
  //   status: "approved",
  //   suggestedActivities: ["swim", "drink cerveza", "ride horses"],
  // },

//Provided by Agency.addNewDestination()
  // addDesitnationObj: {
  //   id: 5000,
  //   destination: "BORA BORA",
  //   estimatedLodgingCostPerDay: 400,
  //   estimatedFlightCostPerPerson: 300,
  //   image: "TEST",
  //   alt: "TEST",
  // },

//Provided by Agent.changeTripStatusAndActivities()
  // changeTripStatusObj: {
  //   id: 3,
  //   status: "pending",
  //   suggestedActivities: ["PARTYYYYYYYY"],
  // },

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

  updateData(url, option, agency, traveler, uniqueId){
    return fetch(url, this.createPostOption(option))
      .then(response => response.json())
      .then(message => {
        console.log(message)
        Promise.all([
          fetchRequests.getAllUserData(),
          fetchRequests.getAllDestinationData(),
          fetchRequests.getAllTripData()
        ])
          .then(data => {
            agency = new Agency(
              data[0].travelers,
              data[2].trips,
              data[1].destinations
            );
            traveler = new Traveler(
              agency.findCustomerbyInfo(44),
              agency.filterTripsByCustomerID(44),
              agency.compileCustomerDestinations(44)
            );
            uniqueId = data[2].trips.length + 1;
            console.log('wait, then load')
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
