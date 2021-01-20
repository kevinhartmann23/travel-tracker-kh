import {expect} from 'chai';

import Trip from '../src/trip.js'

import {
  travelers,
  destinations
} from './test-data.js'

let newTrip;
let traveler;
let destination;

describe('Trip', () => {
  beforeEach('instantiate a new agency class', () => {
    destination = destinations[4];
    traveler = travelers[0];
    newTrip = new Trip(
      travelers.length,
      traveler.id,
      destination.id,
      10,
      "2021/01/30",
      6
    )
  });

  it('should store a unique id', () => {
    expect(newTrip.id).to.equal(21)
  });

  it('should store a related travler id', () => {
    expect(newTrip.userID).to.equal(1)
  });

  it('should store a specific destionation ID', () => {
    expect(newTrip.destinationID).to.equal(5)
  });

  it('should store a specific number of travelers', () => {
    expect(newTrip.travelers).to.equal(10)
  });

  it('should store a departure date', () => {
    expect(newTrip.date).to.equal("2021/01/30")
  });

  it('should store duration of trip', () => {
    expect(newTrip.duration).to.equal(6)
  });

  it('should have a default status of pending', () => {
    expect(newTrip.status).to.equal('pending')
  });

  it('should be able to store suggested activities', () => {
    expect(newTrip.suggestedActivities).to.deep.equal([])
  });

});
