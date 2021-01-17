// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import Agency from './agency.js';
import Traveler from './traveler.js';
import Agent from './agent.js'

import fetchRequests from './fetchRequests.js';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/suitcase.png'
import './images/menu.png'
import './images/user.png'
import './images/person-grey.png'
import './images/person-coral.png'
import './images/arrow.png'
import './images/admin.png'
import './images/close.png'

console.log('This is the JavaScript entry file - your code begins here.');

let allUsers, destinationData, tripData;

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
      allUsers = data[0].travelers;
      destinationData = data[1].destinations;
      tripData = data[2].trips;
      showData();
    })
    .catch(error => console.log(error))
}

function showData(){
  console.log(allUsers, destinationData, tripData)
  console.log(allUsers[23], destinationData[12], tripData[24])
}
