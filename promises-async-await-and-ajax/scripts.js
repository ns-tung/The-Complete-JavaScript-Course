'use strict';

const restCountries = 'https://restcountries.com/v3.1/name/';
const countriesRow = document.querySelector('.countries');

/* Asynchronous JavaScript, AJAX and APIs ==================================================

  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous
*/

const getCountry = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', restCountries + country);
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
    countriesRow.style.opacity = 1;
    countriesRow.style.width = 'inherit !important';
  })
}

getCountry('vietnam'); getCountry('lao'); getCountry('cambodia'); getCountry('usa'); getCountry('germany'); getCountry('portugal')