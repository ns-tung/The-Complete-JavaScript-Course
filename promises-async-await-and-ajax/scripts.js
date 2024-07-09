'use strict';

const restCountriesName = 'https://restcountries.com/v3.1/name/';
const restCountriesCode = 'https://restcountries.com/v3.1/alpha/';
const err = document.querySelector('.errors');
const spn = document.querySelector('.spinner');
const btn = document.querySelector('.view-country');
let countriesRow = document.querySelector('.countries');

const removeSpinner = function () {
  spn.classList.add('d-none');
}

const clearContent = function () {
  if (err.innerHTML !== '') err.innerHTML = '';
  if (countriesRow.innerHTML !== '') countriesRow.innerHTML = '';
};

const renderCountry = function (data, neighbor = '') {
  const html = `
    <div class="col d-flex flex-wrap align-items-stretch country${neighbor}">
      <div class="card shadow-lg border-0 overflow-hidden">
        <img class="card-img-top" src="${data.flags.svg}" alt="${data.flags.alt || `The flag of ${data.name.common}`}" />
        <div class="card-body bg-gray-400">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h2 class="card-title m-0">${data.name.common}
              ${neighbor !== '' ? `<button class="btn btn-sm px-2 ms-2 view-country" data-country="${data.name.common.toLowerCase()}">View</button>` : ``}
            </h2>
            <p class="badge bg-primary-lt pb-1 m-0">${data.region.toUpperCase()}</p>
          </div>
          <p class="card-text"><span>👫 </span>${(+data.population / 1000000).toFixed(2)}M people</p>
          <p class="card-text"><span>🗣️ </span>${Object.values(data.languages).join(', ')}</p>
          <p class="card-text"><span>💰 </span>${Object.keys(data.currencies).join(', ')}</p>
        </div>
        ${neighbor !== '' ? `<div class="ribbon ribbon-bottom bg-teal"><p class="card-text">Neighbor</p></div>` : ``}
      </div>
    </div>`;
  countriesRow.insertAdjacentHTML('beforeend', html);
}

const renderError = function (msg) {
  if (err.innerHTML !== '') err.innerHTML = '';
  msg = `<p class="py-3">${'🔻 ' + msg}</p>`;
  err.insertAdjacentHTML('afterbegin', msg);
}

/* Asynchronous JavaScript, AJAX and APIs ==================================================

  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous

*/

const getCountry = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', restCountriesName + country);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    const html = `
    <div class="col country">
      <div class="card overflow-hidden">
        <img class="card-img-top" src="${data.flags.svg}" alt="${data.flags.alt || `The flag of ${data.name.common}`}" />
        <div class="card-body border-top bg-gray-400">
          <div class="d-flex align-items-center justify-content-between mb-3">
          <h2 class="card-title m-0">${data.name.common}</h2>
          <p class="badge bg-primary-lt pb-1 m-0">${data.region.toUpperCase()}</p></div>
          <p class="card-text"><span>👫 </span>${(+data.population / 1000000).toFixed(2)}M people</p>
          <p class="card-text"><span>🗣️ </span>${Object.values(data.languages).join(', ')}</p>
          <p class="card-text"><span>💰 </span>${Object.keys(data.currencies).join(', ')}</p>
        </div>
      </div>
    </div>`;

    countriesRow.insertAdjacentHTML('beforeend', html);
  })
}

// getCountry('vietnam'); getCountry('lao'); getCountry('cambodia'); getCountry('usa'); getCountry('germany'); getCountry('portugal');

/* Callback Hell ================================================== */

const getCountryAndNeighbor = function (country) {

  // AJAX call country
  const request = new XMLHttpRequest();
  request.open('GET', restCountriesName + country);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    // Render country
    renderCountry(data);

    // Get neighbor countries
    const neighbors = data.borders;
    if (!neighbors) return;

    // AJAX call neighbor countries
    neighbors.map(code => {
      const request = new XMLHttpRequest();
      request.open('GET', restCountriesCode + code);
      request.send();
      request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        renderCountry(data, ' neighbor');
      })
    })
  })
}

// getCountryAndNeighbor('fin');

/*
  setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
      console.log('2 seconds passed');
      setTimeout(() => {
        console.log('3 second passed');
        setTimeout(() => {
          console.log('4 second passed');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
*/

/* Promises, the Fetch API and Consuming Promises ================================================== */

const getCountryData = function (country) {
  fetch(restCountriesName + country)
    .then(res => res.json())
    .then(data => {
      renderCountry(data[0]);
    })
}

// getCountryData('fin'); getCountryData('swe'); getCountryData('swi');

/* Chaining Promises ================================================== */

// Chaining Promises
const getCountryDataAndNeighbor = function (country) {
  fetch(restCountriesName + country)
    .then(res => res.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];
      if (!neighbor) return;
      return fetch(restCountriesCode + neighbor);
    })
    .then(res => res.json())
    .then(data => {
      renderCountry(data[0], ' neighbor')
    })
}

// getCountryDataAndNeighbor('viet');

// Use recursive to get all neighbors
const getCountryDataRecursive = function (country, neighbor = '') {
  fetch(neighbor === '' ? restCountriesName + country : restCountriesCode + country)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0], neighbor);
      if (!data[0].borders || neighbor !== '') return;
      data[0].borders.map(country => getCountryDataRecursive(country, ' neighbor'));
    });
};

// getCountryDataRecursive('finland');

/* Handling Rejected Promises ================================================== */

// Chaining Promises (no recursive)
const getCountryWithErr = function (country) {
  fetch(restCountriesName + country)
    .then(res => res.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders;
      if (!neighbor) return;
      return fetch(restCountriesCode + neighbor[0]);
    })
    .then(res => res.json())
    .then(data => {
      renderCountry(data[0], ' neighbor')
    }).catch(err => {
      console.error('🔺 ' + err + '.');
      renderError(`<strong>Error</strong>: ${err.message}. Try again!`);
    }).finally(() => removeSpinner());
}

// btn.addEventListener('click', function () {
//   clearContent();
//   spn.classList.remove('d-none');
//   getCountryWithErr('vietnam');
// });

// Use recursive to get all neighbors
const getCountryWithError = function (country, neighbor = '') {
  fetch(neighbor === '' ? restCountriesName + country : restCountriesCode + country)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0], neighbor);
      if (!data[0].borders || neighbor !== '') return;
      data[0].borders.map(country => getCountryWithError(country, ' neighbor'))
    }).catch(err => {
      console.error('🔺 ' + err + '.');
      renderError(`<strong>Error</strong>: ${err.message}. Try again!`);
    }).finally(() => removeSpinner());
}

// getCountryWithError('norway');

// btn.addEventListener('click', function () {
//   clearContent();
//   spn.classList.remove('d-none');
//   getCountryWithError('finland');
// });

/* Throwing Errors Manually ================================================== */

const fetchCountry = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`(${response.status}) ${errorMsg}`);
    return response.json();
  })
}

// Chaining Promises (no recursive)
const getCountryAndThrowErr = function (country) {
  const url = restCountriesName + country;
  const message = `Can not found country "${country}"`;
  fetchCountry(url, message)
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders;
      if (!neighbor) throw new Error('No neighbor');
      const url = restCountriesCode + neighbor[0];
      const message = `Can not found countries "neighbor"`;
      return fetchCountry(url, message);
    })
    .then(data => {
      renderCountry(data[0], ' neighbor')
    }).catch(err => {
      console.error('🔺 ' + err + '.');
      renderError(err.message + `.`);
    }).finally(() => removeSpinner());
}

// Use recursive to get all neighbors
const getCountryAndThrowError = function (country, neighbor = '') {
  const url = (neighbor === '' ? restCountriesName : restCountriesCode) + country;
  const message = `Can not found ${neighbor === '' ? 'country "' + country + '"' : 'countries "neighbor"'}`;
  fetchCountry(url, message)
    .then(data => {
      renderCountry(data[0], neighbor);
      if (!data[0].borders || neighbor !== '') return;
      data[0].borders.map(neigh => getCountryAndThrowError(neigh, ' neighbor'));
    }).catch(err => {
      console.error('🔺 ' + err + '.');
      renderError(`<strong>Error</strong>: ${err.message}.`);
    }).finally(() => removeSpinner());
}

spn.classList.remove('d-none');
getCountryAndThrowError('finland');

btn.addEventListener('click', function () {
  clearContent();
  spn.classList.remove('d-none');
  getCountryAndThrowError('usa');
});

countriesRow.addEventListener('click', e => {
  const viewCountry = e.target;
  if (!viewCountry.classList.contains('view-country')) return;
  clearContent();
  spn.classList.remove('d-none');
  getCountryAndThrowError(viewCountry.dataset.country);
});