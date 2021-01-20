import {expect} from 'chai';

import Traveler from '../src/traveler.js'
import Agency from '../src/agency.js'

import {
  travelers,
  trips,
  destinations
} from '../test/test-data.js'

let travelAgency;
let newTraveler;

describe('Traveler', () => {
  beforeEach('instantiate a new traveler class', () => {
    travelAgency = new Agency(travelers, trips, destinations)
    newTraveler = new Traveler(
      travelAgency.findCustomerbyInfo(2),
      travelAgency.filterTripsByCustomerID(2)
    )
  });

  it('should store a specific travelers id', () => {
    expect(newTraveler.id).to.equal(2)
  });

  it('should store a specific travelers name', () => {
    expect(newTraveler.name).to.equal("Rachael Vaughten")
  });

  it('should store a specific travelers travel type', () => {
    expect(newTraveler.travelerType).to.equal("thrill-seeker")
  });

  it('should store a specific travers scheduled trips', () => {
    expect(newTraveler.scheduledTrips).to.deep.equal([
      {
        id: 2,
        userID: 2,
        destinationID: 8,
        travelers: 5,
        date: '2020/10/04',
        duration: 18,
        status: 'pending',
        suggestedActivities: []
      },
      {
        id: 5,
        userID: 2,
        destinationID: 7,
        travelers: 3,
        date: '2020/04/30',
        duration: 18,
        status: 'approved',
        suggestedActivities: []
      },
      {
        id: 8,
        userID: 2,
        destinationID: 1,
        travelers: 6,
        date: '2021/02/09',
        duration: 4,
        status: 'approved',
        suggestedActivities: []
      },
      {
        id: 11,
        userID: 2,
        destinationID: 5,
        travelers: 4,
        date: '2020/10/14',
        duration: 4,
        status: 'approved',
        suggestedActivities: []
      },
      {
        id: 14,
        userID: 2,
        destinationID: 5,
        travelers: 1,
        date: '2020/09/24',
        duration: 10,
        status: 'approved',
        suggestedActivities: []
      },
      {
        id: 17,
        userID: 2,
        destinationID: 4,
        travelers: 1,
        date: '2019/10/30',
        duration: 20,
        status: 'approved',
        suggestedActivities: []
      }
    ])
  });

  it('should be able to book a new trip', () => {
    let newIndex = newTraveler.scheduledTrips.length
    let newTrip = {
      "id": 21,
      "userID": 2,
      "destinationID": 9,
      "travelers": 4,
      "date": "2020/10/05",
      "duration": 6,
      "status": "pending",
      "suggestedActivities": []
    }
    newTraveler.bookTrip(newTrip)
    expect(newTraveler.scheduledTrips[newIndex]).to.equal(newTrip)
    expect(newTraveler.bookTrip(newTrip)).to.equal("That trip is already booked!")
  });

});
