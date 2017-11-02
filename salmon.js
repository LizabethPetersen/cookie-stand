'use strict';

//const div = document.createElement('div');
//const h1 = document.createElement('h1');
//const h2 = document.createElement('h2');
//const ul = document.createElement('ul');
//const li = document.createElement('li');

//// 0. get a reference to the parent element
//const ul = document.getElementById('car-list');
//
//// 1. create the element that you want
//const li = document.createElement('li');
//
//// 2. set attributes and text value
//li.textContent = 'Ford Pinto';
//li.classList.add('car');
//
//// 3. add (append) to the parent element
//ul.appendChild(li);


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '8pm',];
//const stores = ['airport', 'pioneer', 'powells', 'stjohns', 'waterfront'];

// Function for calculating customers per hour per store
function hourlySales(){
    const salesByHour = [];
    for (let i = 0; i < hours.length; i++){
        const hour = hours[i];
        const custPerHour = getRandomIntInclusive(this.min, this.max);
        const cookiesPerHour = Math.floor(custPerHour * this.avgSold);
        const oneHour = {
            hour: hour,
            cookiesSold: cookiesPerHour
        };
        salesByHour.push(oneHour);
    }
    this.salesByHour = salesByHour;
}

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

//pioneer.hourlySales();
//powells.hourlySales();
//stjohns.hourlySales();
//waterfront.hourlySales();
//
// what do we do to populate salesByHour?

//function calcSales(custPerHour, salesByHour) {
//        this.custPerHour;
//        this.salesByHour = hourlySales;
//        calcSales.push(calcSales)
//    };
//
//console.log(calcSales);


// Object literal for each store
const airport = {
    min: 23,
    max: 65,
    avgSold: 6.3,
    hourlySales: hourlySales,
    salesByHour: [],
    render: render,
};
airport.hourlySales();
airport.render();

function render() {
    const ul = document.getElementById('sales');
    for(let i = 0; i < hours.length; i++) {
        const li = document.createElement('li');
        li.textContent = hours[i] + ' : ' + this.salesByHour[i].cookiesSold + ' cookies ';
        ul.appendChild(li);
    }
}

//const pioneer = {
//    min: 3,
//    max: 24,
//    avgSold: 1.2,
//    salesByHour: salesByHour,
//    //    calcSales: 
//    render() {
//        const div = document.createElement('div');
//        const li = document.createElement('li');
//        for(let i = 0; i < this.hour.length; i++) {
//            li.textContent = this.hour + ' ' + this.salesByHour + ' cookies ';
//            div.appendChild('li');
//        }
//        return li;
//    }
//};
//
//const powells = {
//    min: 11,
//    max: 38,
//    avgSold: 3.7,
//    salesByHour: salesByHour,
//    //   calcSales: total,
//    render() {
//        const div = document.createElement('div');
//        const li = document.createElement('li');
//        for(let i = 0; i < this.hour.length; i++) {
//            li.textContent = this.hour + ' ' + this.salesByHour + ' cookies ';
//            div.appendChild('li');
//        }
//        return li;
//    }
//};
//
//const stjohns = {
//    min: 20,
//    max: 38,
//    avgSold: 2.3,
//    salesByHour: salesByHour,
//    //    calcSales: total,
//    render() {
//        const div = document.createElement('div');
//        const li = document.createElement('li');
//        for(let i = 0; i < this.hour.length; i++) {
//            li.textContent = this.hour + ' ' + this.salesByHour + ' cookies ';
//            div.appendChild('li');
//        }
//        return li;
//    }
//};
//
//const waterfront = {
//    min: 2,
//    max: 16,
//    avgSold: 4.6,
//    salesByHour: salesByHour,
//    //   calcSales: total,
//    render() {
//        const div = document.createElement('div');
//        const li = document.createElement('li');
//        for(let i = 0; i < this.hour.length; i++) {
//            li.textContent = this.hour + ' ' + this.salesByHour + ' cookies ';
//            div.appendChild('li');
//        }
//        return li;
//    }
//};



//const ul = document.getElementById('main-list');

// 1. create the element that you want
//const li = document.createElement('li');

// 3. add (append) to the parent element
//ul.appendChild(li);



//for(let i = 0; i < hours.length; i++) {
//    const li = hourlySales[i].render();
//    ul.appendChild(li);
//}