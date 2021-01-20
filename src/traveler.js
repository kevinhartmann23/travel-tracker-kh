class Traveler  {
  constructor(data, trips, destinations) {
    this.id = data.id;
    this.name = data.name;
    this.travelerType = data.travelerType;
    this.scheduledTrips = trips;
    this.scheduleDestinations = destinations;
  }

  bookTrip(trip) {
    if (this.scheduledTrips.some(scheduled => scheduled.id === trip.id) === false) {
      this.scheduledTrips.push(trip)
    } else {
      return 'That trip is already booked!'
    }
  }
}

export default Traveler;
