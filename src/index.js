// CSS (SCSS) files
import './css/base.scss';
import Agency from './agency.js';
import Traveler from './traveler.js';
import Trip from './trip.js'


import fetchRequests from './fetchRequests.js';
import domUpdates from './domUpdates.js';

// images
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

domUpdates.bookButton.addEventListener('click', displayModal);
domUpdates.dropdownBook.addEventListener('click', displayModal);
domUpdates.closeModal.addEventListener('click', resetModal);
domUpdates.departDateInput.addEventListener('change', setReturnDateDefault);
domUpdates.loginButton.addEventListener('click', verifyLoginCredentials);
domUpdates.submitTripInput.addEventListener('click', submitTrip);
domUpdates.dropdownLogout.addEventListener('click', logout)

let travelAgency, traveler, uniqueTripId;

function retrieveAllData(userId) {
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

function verifyLoginCredentials() {
  let travelerId = Number(domUpdates.usernameInput.value.split('traveler').join(''))
  if (domUpdates.password.value === 'traveler2020' && travelerId <= 50){
    retrieveAllData(Number(travelerId))
    domUpdates.changeAfterLogin();
  } else {
    domUpdates.displayLoginError();
  }
}

function logout() {
  domUpdates.changeAfterLogout();
}

function displayModal() {
  domUpdates.displayModalHelper();
  let todaysDate = travelAgency.convertDate(Date.now()).split('/').join('-');
  domUpdates.changeDepartDateDefault('depart-date', todaysDate);
  domUpdates.populateDestinationOptions(travelAgency.displayDestinationNames())
}

function setReturnDateDefault() {
  let departDateSelected = Date.parse(document.getElementById('depart-date').value);
  let returnDateMinValue = travelAgency.convertDate(departDateSelected + (86400000 * 2)).split('/').join('-');
  document.getElementById('return-date').min = returnDateMinValue;
  document.getElementById('return-date').value = returnDateMinValue;
}

function hideModal() {
  domUpdates.hideModalHelper()
  domUpdates.confirmButton.addEventListener('click', resetModal);
}

function resetModal() {
  domUpdates.resetModalHelper();
}

function submitTrip() {
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
