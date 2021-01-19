// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import Agency from './agency.js';
import Traveler from './traveler.js';
import Agent from './agent.js';
import Trip from './trip.js'


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
import './images/close-hover.png'
import './images/airplane.png'
import './images/background.jpg'

//NAV BAR BUTTONS
const bookButton = document.querySelector('.book-trip-button');
const dropdownBook = document.querySelector('#book-trip');
const dropdownLogout = document.querySelector('#logout');

//BOOK TRIP MODAL
const departDateInput = document.querySelector('#depart-date');
const submitTripInput = document.querySelector('.submit-button');
const closeModal = document.querySelector('.close-button');
const confirmButton = document.querySelector('.confirm-button');

//LOGIN PAGE
const usernameInput = document.querySelector('.username-input');
const loginButton = document.querySelector('.login-button');
const password = document.querySelector('.password-input');

bookButton.addEventListener('click', displayModal);
dropdownBook.addEventListener('click', displayModal);
closeModal.addEventListener('click', resetModal);
departDateInput.addEventListener('change', setReturnDateDefault);
loginButton.addEventListener('click', verifyLoginCredentials);
submitTripInput.addEventListener('click', submitTrip);
dropdownLogout.addEventListener('click', logout)

let travelAgency, traveler, uniqueTripId;

function retrieveAllData(userId){
  return Promise.all([
    fetchRequests.getAllUserData(),
    fetchRequests.getAllDestinationData(),
    fetchRequests.getAllTripData()
  ])
    .then(data => {
      travelAgency = new Agency(
        data[0].travelers,
        data[2].trips,
        data[1].destinations
      );
      traveler = new Traveler(
        travelAgency.findCustomerbyInfo(userId),
        travelAgency.filterTripsByCustomerID(userId),
        travelAgency.compileCustomerDestinations(userId)
      );
      uniqueTripId = data[2].trips.length + 1;
      domUpdates.displayCustomerTrips(traveler, travelAgency)
      domUpdates.displayCustomerFooter(travelAgency, traveler)
    })
    .catch(error => console.log(error))
}

function verifyLoginCredentials(){
  let travelerId = Number(usernameInput.value.split('traveler').join(''))
  if(password.value === 'traveler2020' && travelerId <= 50){
    let travelerId = usernameInput.value.split('traveler').join('')
    retrieveAllData(Number(travelerId))
    domUpdates.changeAfterLogin();
  } else {
    domUpdates.displayLoginError();
  }
}

function logout(){
  domUpdates.changeAfterLogout();
}

function displayModal(){
  domUpdates.displayModalHelper();
  let todaysDate = travelAgency.convertDate(Date.now()).split('/').join('-');
  domUpdates.changeDepartDateDefault('depart-date', todaysDate);
  domUpdates.populateDestinationOptions(travelAgency.displayDestinationNames())
}

function setReturnDateDefault(){
  let departDateSelected = Date.parse(document.getElementById('depart-date').value);
  let returnDateMinValue = travelAgency.convertDate(departDateSelected + (86400000 * 2)).split('/').join('-');
  document.getElementById('return-date').min = returnDateMinValue;
  document.getElementById('return-date').value = returnDateMinValue;
}

function hideModal(){
  domUpdates.hideModalHelper()
  confirmButton.addEventListener('click', resetModal);
}

function resetModal(){
  domUpdates.resetModalHelper();
}

function submitTrip(){
  let returnDate = document.getElementById("return-date").value.split('-').join('/')
  let departDate = document.getElementById("depart-date").value.split('-').join('/')
  let numberOfTravelers = document.getElementById("input-travelers").value
  let destination = document.getElementById("destinations").value
  let duration = travelAgency.determineDurationByEndDate(departDate, returnDate);
  let newTrip = new Trip(uniqueTripId, traveler.id, travelAgency.findDestinationByName(destination), numberOfTravelers, departDate, duration)
  uniqueTripId ++
  fetchRequests.updateData(fetchRequests.postTripUrl, newTrip, travelAgency, traveler, traveler.id, newTrip.id);
  hideModal();
}
