'use strict';


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '8pm',];
//const storeName = ['airport', 'pioneer', 'powells', 'stjohns', 'waterfront'];

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

// Function renders # of customers and cookies sold per hour
function render() {
    const div = document.createElement('DIV');
    const h2 = document.createElement('H2');
    div.appendChild(h2);
    const ul = document.getElementById('sales');
    for(let i = 0; i < hours.length; i++) {
        const li = document.createElement('li');
        li.textContent = this.name + ' : ' + hours[i] + ' : ' + this.salesByHour[i].cookiesSold + ' cookies ';
        ul.appendChild(li);
    }
}

// Function renders the store name above lists
//function storeName() {
//    for(let i = 0; i < name.length; i++) {
//        h2.textContent = name[i] + this.name;
//        div.appendChild(h2);
//    }
//}

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

// Object literal for each store
const airport = {
    name: 'PDX Airport',
    min: 23,
    max: 65,
    avgSold: 6.3,
    hourlySales: hourlySales,
    salesByHour: [],
    render: render,
};
airport.hourlySales();
airport.render();

const pioneer = {
    name: 'Pioneer Square',
    min: 3,
    max: 24,
    avgSold: 1.2,
    hourlySales: hourlySales,
    salesByHour: [],
    render: render,
};
pioneer.hourlySales();
pioneer.render();

const powells = {
    name: 'Powell\'s',
    min: 11,
    max: 38,
    avgSold: 3.7,
    hourlySales: hourlySales,
    salesByHour: [],
    render: render,
};
powells.hourlySales();
powells.render();

const stjohns = {
    name: 'St. John\'s',
    min: 20,
    max: 38,
    avgSold: 2.3,
    hourlySales: hourlySales,
    salesByHour: [],
    render: render,
};
stjohns.hourlySales();
stjohns.render();

const waterfront = {
    name: 'Waterfront',
    min: 2,
    max: 16,
    avgSold: 4.6,
    hourlySales: hourlySales,
    salesByHour: [],
    render: render,
};
waterfront.hourlySales();
waterfront.render();