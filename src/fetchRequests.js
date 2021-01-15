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
  }


}

export default fetchRequests;
