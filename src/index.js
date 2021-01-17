// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import Agency from './agency.js';
import Traveler from './traveler.js';
import Agent from './agent.js'

import fetchRequests from './fetchRequests.js';
import domUpdates from './domUpdates.js';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/suitcase.png'
import './images/menu.png'
import './images/user.png'
import './images/person-grey.png'
import './images/person-coral.png'
import './images/arrow.png'
import './images/admin.png'
import './images/close.png'

let bookButton = document.querySelector('.book-trip-button');
let bookBox = document.querySelector('.nav-left')
let searchBox = document.querySelector('.search-box');
let searchButton = document.querySelector('.search-button');
let searchInput = document.querySelector('.search-input');
let tripGrid = document.querySelector('.traveler-page');
let adminPendingGrid = document.querySelector('.pending-trips')
let adminApprovedGrid = document.querySelector('.approved-trips')
let adminDepartedGrid = document.querySelector('.departed-trips')

let travelAgency, traveler;

window.onload = retrieveAllData();

// fetchRequests.updateData("http://localhost:3001/api/v1/trips", fetchRequests.addTripObj)
// fetchRequests.updateData("http://localhost:3001/api/v1/destinations", fetchRequests.addDesitnationObj)
// fetchRequests.updateData("http://localhost:3001/api/v1/updateTrip", fetchRequests.changeTripStatusObj)
// fetchRequests.deleteSingleTrip(4)

function retrieveAllData(){
  return Promise.all([
    fetchRequests.getAllUserData(),
    fetchRequests.getAllDestinationData(),
    fetchRequests.getAllTripData()
  ])
    .then(data => {
      travelAgency = new Agency(data[0].travelers, data[2].trips, data[1].destinations)
      traveler = new Traveler(travelAgency.findCustomerbyInfo(2), travelAgency.filterTripsByCustomerID(2), travelAgency.compileCustomerDestinations(2))
      showData();
    })
    .catch(error => console.log(error))
}

function showData(){
  domUpdates.displayCustomerTrips(traveler, travelAgency, tripGrid)
}
