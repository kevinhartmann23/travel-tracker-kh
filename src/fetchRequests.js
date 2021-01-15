let fetchRequests = {

  retrieveAllData(){
    return Promise.all([this.getAllUserData(), this.getAllDestinationData(), this.getAllTripData()])
      .then(data => {
        let allUsers = data[0];
        let destinationData = data[1];
        let tripData = data[2];
        console.log(allUsers, destinationData, tripData)
      })
      .catch(error => console.log(error))
  },

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

  addTripObj: {
    id: 5230,
    userID: 23,
    destinationID: 24,
    travelers: 2,
    date: "2020/05/23",
    duration: 12,
    status: "approved",
    suggestedActivities: ["swim", "drink cerveza", "ride horses"],
  },

  addDesitnationObj: {
    id: 5000,
    destination: "BORA BORA",
    estimatedLodgingCostPerDay: 400,
    estimatedFlightCostPerPerson: 300,
    image: "TEST",
    alt: "TEST",
  },

  changeTripStatusObj: {
    id: 3,
    status: "pending",
    suggestedActivities: ["PARTYYYYYYYY"],
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

  updateData(url, option){
    return fetch(url, this.createPostOption(option))
      .then(response => response.json())
      .then(message => console.log(message))
      .catch(error => console.log(error))
  }


}

export default fetchRequests;
