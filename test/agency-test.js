import {expect} from 'chai';

import Agency from '../src/agency.js'
import Agent from '../src/agent.js'
import Traveler from '../src/traveler.js'

import {
  travelers,
  trips,
  destinations
} from './test-data.js'

let travelAgency;
let agent;
let user;

describe.only('Agency & Agent', () => {
  beforeEach('instantiate a new agency class', () => {
    travelAgency = new Agency(travelers, trips, destinations)
    user = new Traveler(travelAgency.findCustomerbyInfo(2), travelAgency.filterTripsByCustomerID(2))
    agent = new Agent(travelers, trips, destinations)
  });

  it('should store all traveler data', () => {
    expect(travelAgency.customers).to.deep.equal(travelers)
    expect(agent.customers).to.deep.equal(travelers)
  });

  it('should store all trip data', () => {
    expect(travelAgency.bookedTrips).to.deep.equal(trips)
    expect(agent.bookedTrips).to.deep.equal(trips)
  });

  it('should store all destination data', () => {
    expect(travelAgency.possibleDestinations).to.deep.equal(destinations)
    expect(agent.possibleDestinations).to.deep.equal(destinations)
  });

  it('should calculate the cost of a single trip plus 10% agency fee', () => {
    expect(travelAgency.calculateTripCost(12)).to.deep.equal({
      subtotal: 6480,
      agencyFee: '10%',
      total: (7128.00).toFixed(2),
    })
  });

  it('should filter trips by customer id', () => {
    expect(travelAgency.filterTripsByCustomerID(2)).to.deep.equal([
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
        date: '2021/02/07',
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
    expect(travelAgency.filterTripsByCustomerID(5)).to.deep.equal([
      {
        id: 1,
        userID: 5,
        destinationID: 1,
        travelers: 1,
        date: '2019/09/16',
        duration: 8,
        status: 'approved',
        suggestedActivities: []
      },
      {
        id: 10,
        userID: 5,
        destinationID: 5,
        travelers: 6,
        date: '2020/07/23',
        duration: 17,
        status: 'approved',
        suggestedActivities: []
      },
      {
        id: 19,
        userID: 5,
        destinationID: 7,
        travelers: 4,
        date: '2019/07/21',
        duration: 5,
        status: 'approved',
        suggestedActivities: []
      }
    ])
  });

  it('should filter customers by name or ID', () => {
    expect(travelAgency.findCustomerbyInfo(2)).to.deep.equal({
      "id": 2,
      "name": "Rachael Vaughten",
      "travelerType": "thrill-seeker",
    })
    expect(travelAgency.findCustomerbyInfo('Felicdad rishbrook')).to.deep.equal({
      "id": 19,
      "name": "Felicdad Rishbrook",
      "travelerType": "thrill-seeker",
    })
    expect(travelAgency.findCustomerbyInfo("leila")).to.deep.equal({
      "id": 4,
      "name": "Leila Thebeaud",
      "travelerType": "photographer",
    })

    expect(travelAgency.findCustomerbyInfo("Kevin HaRTmann")).to.equal("Error: User Not Found")
  });

  it('should determine an end date given a start date and duration', () => {
    expect(travelAgency.determineEndDateByDuration(2)).to.equal("2020/10/22")
    expect(travelAgency.determineEndDateByDuration(3)).to.equal("2020/06/08")

  });

  it('should determine a duration given a start date and end date', () => {
    expect(travelAgency.determineDurationByEndDate("2019/07/21", "2019/07/26")).to.equal(5)
  });

  it('should calculate the cost of total spent by a customer', () => {
    expect(travelAgency.calculateCustomerTotalYearExpense(2)).to.equal(21906.5)
  });

/////////////////////////AGENT ONLY TEST///////////////////////////////////////

it('should filter trips by status', () => {
  expect(agent.filterTripsByStatus('pending')).to.deep.equal([
    {
        "id": 2,
        "userID": 2,
        "destinationID": 8,
        "travelers": 5,
        "date": "2020/10/04",
        "duration": 18,
        "status": "pending",
        "suggestedActivities": []
      }, {
        "id": 3,
        "userID": 3,
        "destinationID": 3,
        "travelers": 4,
        "date": "2020/05/22",
        "duration": 17,
        "status": "pending",
        "suggestedActivities": []
      }
    ])
  expect(agent.filterTripsByStatus('denied')).to.deep.equal([
    {
      "id": 6,
      "userID": 4,
      "destinationID": 2,
      "travelers": 3,
      "date": "2020/06/29",
      "duration": 9,
      "status": "denied",
      "suggestedActivities": []
    }
  ])
});

  it('should be able to change the status of a travlers trip by id', () => {
    expect(agent.changeTripStatus(2, "approve", ["Horseback Ride", "Snorkel", "Mix it up with the locals"])).to.equal({
      id: 3,
      status: "pending",
      suggestedActivities: ["Horseback Ride", "Snorkel", "Mix it up with the locals"]
    })
  });

  it('should be able to view all users booked trips', () => {
    expect(agent.viewAllBookedTrips()).to.deep.equal(trips)
  });

  it('should be able to view all trips that are currently happening by date', () => {
    expect(viewTripsToday()).to.equal()
  });

  it('should generate a total income for this year by all users', () => {
    expect().to.equal()
  });
});
