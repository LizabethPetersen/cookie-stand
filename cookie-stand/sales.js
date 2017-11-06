'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '8pm',];

// constructor function to build store and its data (function declaration)
function Store(name, min, max, avgSold) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avgSold = avgSold;
    this.salesByHour = [];
    this.renderCookiesSold();
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


Store.prototype.buildTable = function() {    
    const stores = document.getElementById('stores-list');
    const tr = document.getElementById('TR');
    for (let i = 0; i < hours.length; i++) {
        const th = document.createElement('TH');
        th.textContent = this.name;
        tr.textContent = hours[i] + ' : ' + this.salesByHour[i].cookiesSold + ' cookies ';
        tr.appendChild(th);
    };
    return table;
};


//airport.hourlySales();


//   airport.hourlySales();

 

////    hourlySales(){
//        const salesByHour = [];
//        for (let i = 0; i < hours.length; i++){
//            const hour = hours[i];
//            const custPerHour = getRandomIntInclusive(this.min, this.max);
//            const cookiesPerHour = Math.floor(custPerHour * this.avgSold);
//            const oneHour = {
//                hour: hour,
//                cookiesSold: cookiesPerHour
//            };
//            salesByHour.push(oneHour);
//        }
//        this.salesByHour = salesByHour;
//    }
//}


// Function for calculating customers per hour per store
//function hourlySales(){
//    const salesByHour = [];
//    for (let i = 0; i < hours.length; i++){
//        const hour = hours[i];
//        const custPerHour = getRandomIntInclusive(this.min, this.max);
//        const cookiesPerHour = Math.floor(custPerHour * this.avgSold);
//        const oneHour = {
//            hour: hour,
//            cookiesSold: cookiesPerHour
//        };
//        salesByHour.push(oneHour);
//    }
//    this.salesByHour = salesByHour;
//}
//
//// Function renders # of customers and cookies sold per hour
//function render() {
//    const div = document.createElement('DIV');
//    const h2 = document.createElement('H2');
//    div.appendChild(h2);
//    const ul = document.getElementById('sales');
//    for(let i = 0; i < hours.length; i++) {
//        const li = document.createElement('li');
//        li.textContent = this.name + ' : ' + hours[i] + ' : ' + this.salesByHour[i].cookiesSold + ' cookies ';
//        ul.appendChild(li);
//    }
//}
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


//
//airport.buildStore();
//pioneer.buildStore();
//powells.buildStore();
//stjohns.buildStore();
//waterfront.buildStore();
