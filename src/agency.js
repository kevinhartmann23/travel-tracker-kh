class Agency {
  constructor(userData, tripData, destinationData){
    this.customers = userData;
    this.bookedTrips = tripData;
    this.possibleDestinations = destinationData;
  }

  findCustomerbyInfo(info) {
    let result;
    if (typeof info === 'string') {
      result = this.customers.find(customer => customer['name'].toUpperCase().includes(info.toUpperCase()))
    } else {
      result = this.customers.find(customer => customer['id'] === info)
    }

    if (result === undefined) {
      result = "Error: User Not Found"
    }

    return result;

  }

  filterTripsByCustomerID(id) {
    return this.bookedTrips.filter(trip => trip.userID === id)
  }

  filterTripsByStatus(status) {
    return this.bookedTrips.filter(trip => trip.status === status)
  }

  calculateTripCost(tripID) {
    let bookedTrip = this.bookedTrips.find(trip => trip.id === tripID)
    let destination = this.possibleDestinations.find(dest => dest.id === bookedTrip.destinationID)
    let costForLodging = destination.estimatedLodgingCostPerDay * bookedTrip.duration
    let costForFlights = destination.estimatedFlightCostPerPerson * bookedTrip.travelers
    let agencyFee = 1.1
    let subtotal = costForLodging + costForFlights;
    let costData = {
      subtotal: subtotal,
      agencyFee: '10%',
      total: (subtotal * agencyFee).toFixed(2),
    }
    return costData;
  }

  calculateTotalSpent(userID){
    let customer = this.customers.find(person => person.id === userID)
  }
}

export default Agency;
