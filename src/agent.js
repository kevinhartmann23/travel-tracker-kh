import Agency from './agency.js'

class Agent extends Agency {
  constructor(userData, tripData, destinationData){
    super(userData, tripData, destinationData);
  }

  filterTripsByStatus(status) {
    return this.bookedTrips.filter(trip => trip.status === status)
  }

  viewAllBookedTrips(){
    return this.bookedTrips
  }

  viewTripsToday(today){
    let currentDate = Date.parse(today)
    return this.bookedTrips.filter(trip => {
      let startDate = Date.parse(trip.date)
      let endDate = Date.parse(this.determineEndDateByDuration(trip.id))
     return (startDate <= currentDate) && (currentDate <= endDate)
    })
  }

  totalIncomeGeneratedYearly(year){
    return this.customers.reduce((acc, customer) => {
      let customerTotal = this.calculateCustomerTotalYearExpense(customer.id, year)
      acc += customerTotal;
      return acc;
    }, 0)
  }

  changeTripStatusAndActivities(tripID, status, suggestedActivities){
    let modifyTrip = {
      id: tripID,
      status: status,
      suggestedActivities: suggestedActivities
    }
    return modifyTrip;
  }


}

export default Agent;
