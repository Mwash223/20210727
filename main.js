// alert("Loaded your javascript");

// we need to be able to keep up with sale number by the hr so we need to have a list of hours
const biznessHours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
];

// define an object literal
let Seattle = {
  // identify props
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiessale: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalDailyCookies: 0,
  // Determine per hour open, how many customers to expect?
  //methods

  getCustomersPerHour: function () {
    for (let index = 0; index < biznessHours.length; index++) {
      this.customersPerHour.push(
        getRandomNumberOfCustomersGivenARange(
          this.minCustomers,
          this.maxCustomers
        )); //pass;
    }
    // lets see if we r even close. lets add some debug.... string literal
    console.log("load up the customers...");
  }
};
    getCookiesSoldPerHour: function (){
        totalDailyCookies = 0;
        this.getCustomersPerHour();

        for (let index = 0; index < this.customersPerHour.length; index++){
            
            let totalDailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
    }


function getRandomNumberOfCustomersGivenARange(minCustomers, maxCustomers) {
  return (
    Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers
  ); // IF WE GET 0 Start a mincustomers
}

//call the method
Seattle.getCustomersPerHour(); // should load array
for (let index = 0; index < Seattle.customersPerHour.length; index++) {
  console.log(customersPerHour[index]);
}

// let tokyo = {
//     // identify props
//     minCustumers: 3,
//     maxCustumers: 24,
//     avgCookies: 1.2
// }

// let dubai = {
//     // identify props
//     minCustumers: 11,
//     maxCustumers: 38,
//     avgCookies: 37
// }

// let paris = {
//     // identify props
//     minCustumers: 20,
//     maxCustumers: 38,
//     avgCookies: 3.3
// }

// let lima = {
//     // identify props
//     minCustumers: 2,
//     maxCustumers: 16,
//     avgCookies: 4.6
// }
