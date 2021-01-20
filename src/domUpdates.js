//NAV BAR BUTTONS
const bookButton = document.querySelector('.book-trip-button');
const bookBox = document.querySelector('.nav-left')
const searchBox = document.querySelector('.search-box');
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const dropdownBook = document.querySelector('#book-trip');
const dropdownLogout = document.querySelector('#logout');
const navDisplay = document.querySelector('.navigation-bar');
const footDisplay = document.querySelector('.foot');

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
const receiptSub = document.querySelector('.subtotal')
const receiptFee = document.querySelector('.agency-fee')
const receiptTotal = document.querySelector('.total')

//LOGIN PAGE
const loginDisplay = document.querySelector('.login-display');
const usernameInput = document.querySelector('.username-input');
const loginButton = document.querySelector('.login-button');
const password = document.querySelector('.password-input');
const incorrectPrompt = document.querySelector('.incorrect-prompt');

let domUpdates = {
  bookButton,
  dropdownBook,
  dropdownLogout,
  departDateInput,
  submitTripInput,
  closeModal,
  confirmButton,
  usernameInput,
  loginButton,
  password,

  displayCustomerTrips(traveler, agency){
    tripGrid.innerHTML = '';
    traveler.scheduledTrips.forEach(trip => {
      let destination = traveler.scheduleDestinations.find(dest => trip.destinationID === dest.id)
      let tripCost = agency.calculateTripCost(trip.id)
      tripGrid.innerHTML += `
      <article class="traveler-trip">
        <div class="image-wrapper" style="background-image: url(${destination.image});">
          <h1 class="destination-title">${destination.destination}</h1>
          <h2 class="destination-status">status: ${trip.status}</h2>
        </div>
        <div class="info-wrapper">
          <h3 class="travel-date">Departure: ${trip.date}</h3>
          <p class="travel-duration">Days: ${trip.duration}</p>
          <p class="travel-cost">Cost: $${tripCost.total}</p>
          <div class= "travelers-wrapper">
            <img class="person-icon" src="./images/person-grey.png" alt="suitcase">
            <p class="number-of-travalers">${trip.travelers}</p>
          </div>
        </div>
      </article>
      `
    })
  },

  displayCustomerFooter(agency, traveler){
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let yearExpense = agency.calculateCustomerTotalYearExpense(traveler.id, currentYear.toString())
    footerWelcomeMessage.innerText = `Welcome, ${traveler.name}!`
    footerExpenseAmount.innerText = `$${yearExpense}`
  },

  populateDestinationOptions(destinationNames){
    destinationNames.forEach(name => {
      let option = document.createElement("option")
      option.value = name;
      option.innerHTML = name;
      destinationSelectInput.appendChild(option)
    })
  },

  changeDepartDateDefault(elementId, date){
    document.getElementById(elementId).value = date;
    document.getElementById(elementId).min = date;
  },

  populateReceipt(cost){
    receiptSub.innerText = `Subtotal : $${cost.subtotal}`
    receiptFee.innerText = `Agent Fee (10%) : $${cost.agencyFee}`
    receiptTotal.innerText = `Total : $${cost.total}`
  },

  hideModalHelper(){
    modalBody.classList.add('hidden');
    costDisplay.classList.remove('hidden')
  },

  displayModalHelper(){
    bookTripModal.classList.remove('hidden');
    tripGrid.classList.add('blur');
  },

  resetModalHelper(){
    modalBody.classList.remove('hidden');
    tripGrid.classList.remove('blur');
    costDisplay.classList.add('hidden');
    bookTripModal.classList.add('hidden');
    document.getElementById("return-date").value = ''
    document.getElementById("depart-date").value = ''
    document.getElementById("input-travelers").value = '1'
    document.getElementById("destinations").value = 'placeholder'
  },

  changeAfterLogin(){
    loginDisplay.classList.add('hidden')
    tripGrid.classList.remove('hidden')
    navDisplay.classList.remove('hidden')
    footDisplay.classList.remove('hidden')
    password.value = ""
    usernameInput.value = ""
    incorrectPrompt.innerText = ""
  },

  changeAfterLogout(){
    loginDisplay.classList.remove('hidden')
    tripGrid.classList.add('hidden')
    navDisplay.classList.add('hidden')
    footDisplay.classList.add('hidden')
  },

  displayLoginError(){
    incorrectPrompt.innerText = "username or password is incorrect..."
  },

}


export default domUpdates;
