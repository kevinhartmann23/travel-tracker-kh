class Agency {
  constructor(userData, tripData, destinationData){
    this.customers = userData;
    this.bookedTrips = tripData;
    this.possibleDestinations = destinationData;
  }

  filterTripsByCustomerID(id) {
    return this.bookedTrips.filter(trip => trip.userID === id)
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

  calculateCustomerTotalYearExpense(userID){
    let customerTrips = this.filterTripsByCustomerID(userID)
    return customerTrips.reduce((acc, trip) => {
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
