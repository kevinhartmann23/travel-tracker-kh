// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import fetchRequests from './fetchRequests.js';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

window.onload = fetchRequests.retrieveAllData();

// fetchRequests.updateData("http://localhost:3001/api/v1/trips", fetchRequests.addTripObj)
// fetchRequests.updateData("http://localhost:3001/api/v1/destinations", fetchRequests.addDesitnationObj)
// fetchRequests.updateData("http://localhost:3001/api/v1/updateTrip", fetchRequests.changeTripStatusObj)
// fetchRequests.deleteSingleTrip(4)
