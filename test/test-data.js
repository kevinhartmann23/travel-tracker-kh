
let destinations = [{
  "id": 1,
  "destination": "Lima, Peru",
  "estimatedLodgingCostPerDay": 70,
  "estimatedFlightCostPerPerson": 400,
  "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
  "alt": "overview of city buildings with a clear sky"
}, {
  "id": 2,
  "destination": "Stockholm, Sweden",
  "estimatedLodgingCostPerDay": 100,
  "estimatedFlightCostPerPerson": 780,
  "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "alt": "city with boats on the water during the day time"
},
{
  "id": 3,
  "destination": "Sydney, Austrailia",
  "estimatedLodgingCostPerDay": 130,
  "estimatedFlightCostPerPerson": 950,
  "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "alt": "opera house and city buildings on the water with boats"
},
{
  "id": 4,
  "destination": "Cartagena, Colombia",
  "estimatedLodgingCostPerDay": 65,
  "estimatedFlightCostPerPerson": 350,
  "image": "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  "alt": "boats at a dock during the day time"
},
{
  "id": 5,
  "destination": "Madrid, Spain",
  "estimatedLodgingCostPerDay": 150,
  "estimatedFlightCostPerPerson": 650,
  "image": "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "alt": "city with clear skys and a road in the day time"
},
{
  "id": 6,
  "destination": "Jakarta, Indonesia",
  "estimatedLodgingCostPerDay": 70,
  "estimatedFlightCostPerPerson": 890,
  "image": "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "alt": "lit up city at night"
},
{
  "id": 7,
  "destination": "Paris, France",
  "estimatedLodgingCostPerDay": 100,
  "estimatedFlightCostPerPerson": 395,
  "image": "https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
  "alt": "city during the day time with eiffel tower"
},
{
  "id": 8,
  "destination": "Tokyo, Japan",
  "estimatedLodgingCostPerDay": 125,
  "estimatedFlightCostPerPerson": 1000,
  "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1971&q=80",
  "alt": "city with people walking in crosswalk and brightly lit shops at night"
},
{
  "id": 9,
  "destination": "Amsterdam, Netherlands",
  "estimatedLodgingCostPerDay": 100,
  "estimatedFlightCostPerPerson": 950,
  "image": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "alt": "canal with boats and trees and buildings along the side"
},
{
  "id": 10,
  "destination": "Toronto, Canada",
  "estimatedLodgingCostPerDay": 90,
  "estimatedFlightCostPerPerson": 450,
  "image": "https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2756&q=80",
}]

let travelers = [
  {
    "id": 1,
    "name": "Ham Leadbeater",
    "travelerType": "relaxer",
  }, {
    "id": 2,
    "name": "Rachael Vaughten",
    "travelerType": "thrill-seeker",
  }, {
    "id": 3,
    "name": "Sibby Dawidowitsch",
    "travelerType": "shopper",
  }, {
    "id": 4,
    "name": "Leila Thebeaud",
    "travelerType": "photographer",
  }, {
    "id": 5,
    "name": "Tiffy Grout",
    "travelerType": "thrill-seeker",
  }, {
    "id": 6,
    "name": "Laverna Flawith",
    "travelerType": "shopper",
  }, {
    "id": 7,
    "name": "Emmet Sandham",
    "travelerType": "relaxer",
  }, {
    "id": 8,
    "name": "Carlin O'Reilly",
    "travelerType": "history buff",
  }, {
    "id": 9,
    "name": "Natalee Deegin",
    "travelerType": "relaxer",
  }, {
    "id": 10,
    "name": "Rickie Jodlowski",
    "travelerType": "relaxer",
  }, {
    "id": 11,
    "name": "Joy Dovington",
    "travelerType": "history buff"
  }, {
    "id": 12,
    "name": "Lannie Heynel",
    "travelerType": "history buff"
  }, {
    "id": 13,
    "name": "Torin Billington",
    "travelerType": "photographer",
  }, {
    "id": 14,
    "name": "Ellynn Kyne",
    "travelerType": "history buff"
  }, {
    "id": 15,
    "name": "Emeline Winslet",
    "travelerType": "history buff"
  }, {
    "id": 16,
    "name": "Deirdre Paeckmeyer",
    "travelerType": "foodie",
  }, {
    "id": 17,
    "name": "Julian Ullyott",
    "travelerType": "relaxer",
  }, {
    "id": 18,
    "name": "Sheila Valentetti",
    "travelerType": "foodie",
  }, {
    "id": 19,
    "name": "Felicdad Rishbrook",
    "travelerType": "thrill-seeker",
  }, {
    "id": 20,
    "name": "Gregg Tours",
    "travelerType": "thrill-seeker",
  }]

let trips = [
  {
    "id": 1,
    "userID": 5,
    "destinationID": 1,
    "travelers": 1,
    "date": "2019/09/16",
    "duration": 8,
    "status": "approved",
    "suggestedActivities": []
  },
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
  }, {
    "id": 4,
    "userID": 12,
    "destinationID": 4,
    "travelers": 2,
    "date": "2020/02/25",
    "duration": 10,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 5,
    "userID": 2,
    "destinationID": 7,
    "travelers": 3,
    "date": "2020/04/30",
    "duration": 18,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 6,
    "userID": 4,
    "destinationID": 2,
    "travelers": 3,
    "date": "2020/06/29",
    "duration": 9,
    "status": "denied",
    "suggestedActivities": []
  }, {
    "id": 7,
    "userID": 8,
    "destinationID": 10,
    "travelers": 5,
    "date": "2020/5/28",
    "duration": 20,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 8,
    "userID": 2,
    "destinationID": 1,
    "travelers": 6,
    "date": "2021/02/09",
    "duration": 4,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 9,
    "userID": 6,
    "destinationID": 9,
    "travelers": 5,
    "date": "2019/12/19",
    "duration": 19,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 10,
    "userID": 5,
    "destinationID": 5,
    "travelers": 6,
    "date": "2020/07/23",
    "duration": 17,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 11,
    "userID": 2,
    "destinationID": 5,
    "travelers": 4,
    "date": "2020/10/14",
    "duration": 4,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 12,
    "userID": 3,
    "destinationID": 3,
    "travelers": 6,
    "date": "2020/10/17",
    "duration": 6,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 13,
    "userID": 12,
    "destinationID": 2,
    "travelers": 1,
    "date": "2021/02/12",
    "duration": 11,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 14,
    "userID": 2,
    "destinationID": 5,
    "travelers": 1,
    "date": "2020/09/24",
    "duration": 10,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 15,
    "userID": 4,
    "destinationID": 1,
    "travelers": 3,
    "date": "2020/07/04",
    "duration": 6,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 16,
    "userID": 8,
    "destinationID": 7,
    "travelers": 1,
    "date": "2019/11/20",
    "duration": 9,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 17,
    "userID": 2,
    "destinationID": 4,
    "travelers": 1,
    "date": "2019/10/30",
    "duration": 20,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 18,
    "userID": 6,
    "destinationID": 2,
    "travelers": 2,
    "date": "2020/09/25",
    "duration": 17,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 19,
    "userID": 5,
    "destinationID": 7,
    "travelers": 4,
    "date": "2019/07/21",
    "duration": 5,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 20,
    "userID": 12,
    "destinationID": 9,
    "travelers": 4,
    "date": "2020/10/05",
    "duration": 6,
    "status": "approved",
    "suggestedActivities": []
  }]

export {travelers, destinations, trips}
