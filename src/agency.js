class Agency {
  constructor(userData, tripData, destinationData){
    this.customers = userData;
    this.bookedTrips = tripData;
    this.possibleDestinations = destinationData;
  }

  filterTripsByCustomerID(id) {
    return this.bookedTrips.filter(trip => trip.userID === id)
  }

  compileCustomerDestinations(customerID){
    let trips = this.filterTripsByCustomerID(customerID)
    let destinations = this.possibleDestinations.filter(dest => {
      return trips.find(trip => trip.destinationID === dest.id)
    })
    return destinations;
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

  displayDestinationNames(){
    return this.possibleDestinations.map(dest => dest.destination)
  }

  findDestinationByName(name){
    return this.possibleDestinations.find(dest => dest.destination === name).id
  }

  addNewDestination(destID, location, lodgingCost, flightCostPerPerson, imageURL, altText){
    let newDestination = {
      id: destID,
      destination: location,
      estimatedLodgingCostPerDay: lodgingCost,
      estimatedFlightCostPerPerson: flightCostPerPerson,
      image: imageURL,
      alt: altText,
    }
    return newDestination
  }

  calculateTripCost(tripID) {
    let bookedTrip = this.bookedTrips.find(trip => trip.id === tripID)
    let destination = this.possibleDestinations.find(dest => dest.id === bookedTrip.destinationID)
    let costForLodging = destination.estimatedLodgingCostPerDay * bookedTrip.duration
    let costForFlights = destination.estimatedFlightCostPerPerson * bookedTrip.travelers
    let subtotal = costForLodging + costForFlights;
    let agencyFee = subtotal * .1
    let costData = {
      subtotal: subtotal,
      agencyFee: agencyFee,
      total: (subtotal + agencyFee).toFixed(2),
    }
    return costData;
  }

  calculateCustomerTotalYearExpense(userID, year){
    let customerTrips = this.filterTripsByCustomerID(userID)
    let filteredTripsByYear = customerTrips.filter(trip => trip.date.slice(0,4) === year)
    return filteredTripsByYear.reduce((acc, trip) => {
      let costData = this.calculateTripCost(trip.id)
      acc += Number(costData.total)
      return acc;
    }, 0)
  }

  determineEndDateByDuration(tripID){
    let bookedTrip = this.bookedTrips.find(trip => trip.id === tripID)
    let startDate = Date.parse(bookedTrip.date)
    let milisecondsPerDay = 86400000
    let timeAway = bookedTrip.duration * milisecondsPerDay
    let endDate = new Date(startDate + timeAway)
    return this.convertDate(endDate)
  }

  convertDate(date){
    let newDate = new Date(date)
    let year = newDate.getFullYear()
    let month = newDate.getMonth() + 1
    let day = newDate.getDate()
    if (day < 10){
      day = '0' + day
    }
    if (month < 10){
      month = '0' + month
    }
    return year + '/' + month + '/' + day;
  }

  determineDurationByEndDate(startDate, endDate){
    let milisecondsPerDay = 86400000
    let returnDate = Date.parse(endDate)
    let departDate = Date.parse(startDate)
    let duration = (returnDate - departDate) / milisecondsPerDay
    return duration
  }
}

export default Agency;
