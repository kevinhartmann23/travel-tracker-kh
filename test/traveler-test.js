import {expect} from 'chai';

import Traveler from '../src/traveler.js'
// import {
//   travelers,
//   trips,
//   destinations
// } from 'test-data.js'

let newTraveler;

describe('Traveler', () => {
  beforeEach('instantiate a new traveler class', () => {
    travelAgency = new Agency(travelers, trips, destinations)
    newTraveler = new Traveler(travelAgency.findCustomerbyInfo(2), travelAgency.filterTripsByCustomerID(2))
  });

  it('should', () => {
    expect().to.equal()
  });

  it('should', () => {
    expect().to.equal()
  });

  it('should', () => {
    expect().to.equal()
  });

  it('should', () => {
    expect().to.equal()
  });

  it('should', () => {
    expect().to.equal()
  });

});
