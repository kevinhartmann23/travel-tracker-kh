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

//NAV BAR BUTTONS
const bookButton = document.querySelector('.book-trip-button');
const bookBox = document.querySelector('.nav-left')
const searchBox = document.querySelector('.search-box');
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const dropdownBook = document.querySelector('#book-trip');
const dropdownLogout = document.querySelector('#logout');

//DISPLAY GRIDS - TRAVELER & AGENT
const tripGrid = document.querySelector('.traveler-page');
const adminPendingGrid = document.querySelector('.pending-trips');
const adminApprovedGrid = document.querySelector('.approved-trips');
const adminDepartedGrid = document.querySelector('.departed-trips');
const footerWelcomeMessage = document.querySelector('.welcome-user');
const footerExpenseAmount = document.querySelector('.expenses-cost');

//BOOK TRIP MODAL
const bookTripModal = document.querySelector('.traveler-book-modal');
const departDateInput = document.querySelector('#depart-date');
const returnDateInput = document.querySelector('#return-date');
const destinationSelectInput = document.querySelector('#destinations');
const numberTravelersInput = document.querySelector('.input-travelers');
const submitTripInput = document.querySelector('.submit-button');
const closeModal = document.querySelector('.close-button');
const costDisplay = document.querySelector('.cost-display');
const modalBody = document.querySelector('.modal-body');
const confirmButton = document.querySelector('.confirm-button');
const receiptSub = document.querySelector('.subtotal');
const receiptFee = document.querySelector('.agency-fee');
const receiptTotal = document.querySelector('.total');

bookButton.addEventListener('click', displayModal);
dropdownBook.addEventListener('click', displayModal);
closeModal.addEventListener('click', resetModal);
departDateInput.addEventListener('change', setReturnDateDefault);
submitTripInput.addEventListener('click', submitTrip);

let travelAgency, traveler, uniqueTripId;

window.onload = retrieveAllData();

function retrieveAllData(){
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
        travelAgency.findCustomerbyInfo(44),
        travelAgency.filterTripsByCustomerID(44),
        travelAgency.compileCustomerDestinations(44)
      );
      uniqueTripId = data[2].trips.length + 1;
      domUpdates.displayCustomerTrips(traveler, travelAgency, tripGrid)
      domUpdates.displayCustomerFooter(travelAgency, traveler, footerWelcomeMessage, footerExpenseAmount)
    })
    .catch(error => console.log(error))
}

function showData(){
  domUpdates.displayCustomerTrips(traveler, travelAgency, tripGrid)
  domUpdates.displayCustomerFooter(travelAgency, traveler, footerWelcomeMessage, footerExpenseAmount)
}

function displayModal(){
  bookTripModal.classList.remove('hidden');
  tripGrid.classList.add('blur');
  let todaysDate = travelAgency.convertDate(Date.now()).split('/').join('-');
  domUpdates.changeDepartDateDefault('depart-date', todaysDate);
  domUpdates.populateDestinationOptions(travelAgency.displayDestinationNames(), destinationSelectInput)
  // submitTripInput.addEventListener('click', testData);
}

function setReturnDateDefault(){
  let departDateSelected = Date.parse(document.getElementById('depart-date').value);
  let returnDateMinValue = travelAgency.convertDate(departDateSelected + (86400000 * 2)).split('/').join('-');
  document.getElementById('return-date').min = returnDateMinValue;
  document.getElementById('return-date').value = returnDateMinValue;
}

function hideModal(){
  modalBody.classList.add('hidden');
  costDisplay.classList.remove('hidden')
  confirmButton.addEventListener('click', resetModal);
}

function resetModal(){
  modalBody.classList.remove('hidden');
  costDisplay.classList.add('hidden');
  tripGrid.classList.remove('blur');
  bookTripModal.classList.add('hidden')

  document.getElementById("return-date").value = ''
  document.getElementById("depart-date").value = ''
  document.getElementById("input-travelers").value = '1'
  document.getElementById("destinations").value = 'placeholder'
}

function submitTrip(){
  let returnDate = document.getElementById("return-date").value.split('-').join('/')
  let departDate = document.getElementById("depart-date").value.split('-').join('/')
  let numberOfTravelers = document.getElementById("input-travelers").value
  let destination = document.getElementById("destinations").value
  let duration = travelAgency.determineDurationByEndDate(departDate, returnDate);
  let newTrip = new Trip(uniqueTripId, traveler.id, travelAgency.findDestinationByName(destination), numberOfTravelers, departDate, duration)
  fetchRequests.updateData(fetchRequests.postTripUrl, newTrip, travelAgency, traveler, uniqueTripId, tripGrid, footerWelcomeMessage, footerExpenseAmount, receiptSub, receiptFee, receiptTotal);
  hideModal();
}
