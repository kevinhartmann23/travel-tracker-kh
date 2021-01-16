import Agency from './agency.js'

class Agent extends Agency {
  constructor(userData, tripData, destinationData){
    super(userData, tripData, destinationData);
  }

  filterTripsByStatus(status) {
    return this.bookedTrips.filter(trip => trip.status === status)
  }

  viewAllBookedTrips(){

  }

  viewTripsToday(){

  }

  totalIncomeGenerated(){

  }

  changeTripStatus(){

  }


}

export default Agent;
