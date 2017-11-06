'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '8pm',];

// constructor function to build store and its data (function declaration)
function Store(name, min, max, avgSold) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avgSold = avgSold;
    this.salesByHour = [];
    this.salesByDay = [];
    this.renderCookiesSold();
    this.buildTable();
};

// function expression
Store.prototype.renderCookiesSold = function() {
    for (let i = 0; i < hours.length; i++){
        const hour = hours[i];
        const custPerHour = getRandomIntInclusive(this.min, this.max);
        const cookiesPerHour = Math.floor(custPerHour * this.avgSold);
        const oneHour = {
            hour: hour,
            cookiesSold: cookiesPerHour
        };
        this.salesByHour.push(oneHour);
    }
};

const airport = new Store('PDX Airport', 23, 65, 6.3);
const pioneer = new Store('Pioneer Square', 3, 24, 1.2);
const powells = new Store('Powell\s', 11, 38, 3.7);
const stjohns = new Store('St. John\s', 20, 38, 2.3);
const waterfront = new Store('Waterfront', 2, 16, 4.6);

//const stores = ['PDX Airport', 'Pioneer', 'Powell\'s', 'St. John\'s', 'Waterfront'];

Store.prototype.buildTable = function() {
    // table construction
    const tableRow = document.createElement('TR'); // creates a row for each store
    const rowHeader = document.createElement('TH'); // creates a column for the store name
    rowHeader.textContent = this.name; // populates column with store names
    tableRow.appendChild(rowHeader); // appends row header to table row (that lists store names)
    console.log(tableRow);

    // fill rows with data
    for (let i = 0; i < hours.length; i++) {
        const tableDataSales = document.createElement('TD'); // creates row item for sales data
        tableRow.appendChild(tableDataSales); // appends table data to table row
        tableDataSales.textContent = this.salesByHour[i].cookiesSold;
    }
    // add totals to end or row
    const totalSales = document.createElement('TD'); // creates place for total sales data
    tableRow.appendChild(totalSales);
    totalSales.textContent = this.salesByDay;
};

airport.renderCookiesSold();
pioneer.renderCookiesSold();
powells.renderCookiesSold();
stjohns.renderCookiesSold();
waterfront.renderCookiesSold();

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}