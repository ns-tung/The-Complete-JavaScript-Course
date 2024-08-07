'use strict';

const restCountriesName = 'https://restcountries.com/v3.1/name/';
const restCountriesCode = 'https://restcountries.com/v3.1/alpha/';
const err = document.querySelector('.errors');
const spn = document.querySelectorAll('.spinner');
const spnOne = document.querySelector('.spinner-one');
const spnTwo = document.querySelector('.spinner-two');
const spnThree = document.querySelector('.spinner-three');
const spnFour = document.querySelector('.spinner-four');
const btnVC = document.querySelector('.view-country');
const btnWAI = document.querySelector('.where-am-i');
let countriesRow = document.querySelector('.countries');

const toggleDisplay = function (selector, act = 'remove') {
  act === 'remove' && selector.classList.add('d-none');
  act === 'add' && selector.classList.remove('d-none');
}

const clearContent = function (container = countriesRow) {
  if (err.innerHTML !== '') err.innerHTML = '';
  if (container.innerHTML !== '') container.innerHTML = '';
};

const renderCountry = function (data, neighbor = '') {
  const html = `
    <div class="col d-flex flex-wrap align-items-stretch country${neighbor}">
      <div class="card shadow-sm overflow-hidden">
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
  toggleDisplay(spnOne);
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
    <div class="col d-flex flex-wrap align-items-stretch country">
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

// toggleDisplay(spnOne, 'add');
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
    toggleDisplay(spnOne);
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

// toggleDisplay(spnOne, 'add');
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
      toggleDisplay(spnOne);
      renderCountry(data[0]);
    })
}

// toggleDisplay(spnOne, 'add');
// getCountryData('fin'); getCountryData('swe'); getCountryData('swi');

/* Chaining Promises ================================================== */

// Chaining Promises
const getCountryDataAndNeighbor = function (country) {
  fetch(restCountriesName + country)
    .then(res => res.json())
    .then(data => {
      toggleDisplay(spnOne);
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

// toggleDisplay(spnOne, 'add');
// getCountryDataAndNeighbor('viet');

// Use recursive to get all neighbors
const getCountryDataRecursive = function (country, neighbor = '') {
  fetch(neighbor === '' ? restCountriesName + country : restCountriesCode + country)
    .then((response) => response.json())
    .then((data) => {
      neighbor === '' && toggleDisplay(spnOne);
      renderCountry(data[0], neighbor);
      if (!data[0].borders || neighbor !== '') return;
      data[0].borders.map(country => getCountryDataRecursive(country, ' neighbor'));
    });
};

// toggleDisplay(spnOne, 'add');
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
    }).finally(() => toggleDisplay(spnOne));
}

// btnVC.addEventListener('click', function () {
//   clearContent();
//   toggleDisplay(spnOne, 'add');
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
    }).finally(() => toggleDisplay(spnOne));
}

// getCountryWithError('norway');

// btnVC.addEventListener('click', function () {
//   clearContent();
//   toggleDisplay(spnOne, 'add');
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
    }).finally(() => toggleDisplay(spnOne));
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
    }).finally(() => toggleDisplay(spnOne));
}

toggleDisplay(spnOne, 'add');
getCountryAndThrowError('finland');

btnVC.addEventListener('click', function () {
  clearContent();
  toggleDisplay(spnOne, 'add');
  getCountryAndThrowError('usa');
});

countriesRow.addEventListener('click', e => {
  const viewCountry = e.target;
  if (!viewCountry.classList.contains('view-country')) return;
  clearContent();
  toggleDisplay(spnOne, 'add');
  getCountryAndThrowError(viewCountry.dataset.country);
});

/* Coding Challenge #1 ==================================================

  In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

  Here are your tasks:

  PART 1

  1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
  2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
  The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
  3. Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data, log a message like this to the console: 'You are in Berlin, Germany'
  4. Chain a .catch method to the end of the promise chain and log errors to the console
  5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

  PART 2

  6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
  7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

  TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
  TEST COORDINATES 2: 19.037, 72.873
  TEST COORDINATES 2: -33.933, 18.474

*/

const countriesReverse = document.querySelector('.reverse-countries');

const renderCountryReverse = function (data, city = '', container = countriesReverse) {
  const html = `
    <div class="col d-flex flex-wrap align-items-stretch country">
      <div class="card shadow-sm overflow-hidden">
        <img class="card-img-top" src="${data.flags.svg}" alt="${data.flags.alt || `The flag of ${data.name.common}`}" />
        <div class="card-body bg-gray-400">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h2 class="card-title m-0">${data.name.common}</h2>
            <p class="badge bg-primary-lt pb-1 m-0">${data.region.toUpperCase()}</p>
          </div>
          ${city !== '' ? `<p class="card-text"><span>🏙️ </span>${city}</p>` : ''}
          ${city === '' ? `<p class="card-text"><span>👫 </span>${(+data.population / 1000000).toFixed(2)}M people</p>` : ''}
          <p class="card-text"><span>🗣️ </span>${Object.values(data.languages).join(', ')}</p>
          <p class="card-text"><span>💰 </span>${Object.keys(data.currencies).join(', ')}</p>
        </div>
        ${city !== '' ? '<div class="ribbon bg-teal"><p class="card-text">You are</p></div>' : ''}
      </div>
    </div>`;
  container.insertAdjacentHTML('beforeend', html);
}

const whereAmI = function (lat, lng) {
  const apiReverse = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`;
  fetch(apiReverse)
    .then(res => {
      if (!res.ok) throw new Error(`(${res.status}) Problem with geocoding.`);
      return res.json();
    })
    .then(data => {
      const { city, country, country_code } = data.address;
      console.log(`You are in ${city}, ${country}`)
      return fetch(restCountriesCode + country_code)
    })
    .then(res => {
      if (!res.ok) throw new Error(`(${res.status}) Country not found.`);
      return res.json();
    })
    .then(data => renderCountryReverse(data[0]))
    .catch(err => console.log('🚫 ' + err)).finally(() => toggleDisplay(spnTwo));
}

const whereAmIRefactor = function (lat, lng) {
  const apiReverse = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`;
  fetchCountry(apiReverse, 'Problem with geocoding.')
    .then(data => {
      const { city, country, country_code } = data.address;
      console.log(`You are in ${city}, ${country}`)
      return fetchCountry(restCountriesCode + country_code, 'Country not found.')
    })
    .then(data => renderCountryReverse(data[0]))
    .catch(err => console.log('🚫 ' + err)).finally(() => toggleDisplay(spnTwo));
}

toggleDisplay(spnTwo, 'add');
whereAmIRefactor(52.508, 13.381);
whereAmIRefactor(19.037, 72.873);
whereAmIRefactor(-33.933, 18.474);

/* The Event Loop ==================================================

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop

*/

console.log('start'); // 1
setTimeout(() => console.log('0 seconds timer')); // 4
Promise.resolve('Promise resolved').then(res => console.log(res)); // 3
console.log('end'); // 2

/* Building a Promise ================================================== */

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮')
  setTimeout(function () {
    const randomNum = Math.random();
    randomNum >= .5 && resolve('You WIN 💰');
    randomNum < .5 && reject(new Error('You LOST your money 🤧'));
  }, 2000)
});

lotteryPromise
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promisifying setTimeout
const timer = function (seconds = 0) {
  // console.log(`⏳ ${seconds} second passed.`);
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

timer(1)
  .then(() => timer(2))
  .then(() => timer(3))
  .then(() => timer(4));

// static resolve() and reject() methods
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));

// Promisifying the Geo-location API
const getPosition = function () {
  clearContent(iAm);
  toggleDisplay(spnThree, 'add');
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(pos => resolve(pos), err => reject(err));
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
}

let city, country_code;
const iAm = document.querySelector('.i-am');
const youR = document.querySelector('.you-are');

const whereAmIPromise = function () {
  toggleDisplay(youR);
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      const apiReverse = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`;
      return fetchCountry(apiReverse, 'Problem with geocoding.')
    })
    .then(data => {
      ({ city, country_code } = data.address);
      return fetchCountry(restCountriesCode + country_code, 'Country not found.');
    })
    .then(data => renderCountryReverse(data[0], city, iAm))
    .catch(err => console.error('🚫 ' + err)).finally(() => toggleDisplay(spnThree));
}

// btnWAI.addEventListener('click', whereAmIPromise);

/* Coding Challenge #2 ==================================================

  Build the image loading functionality that I just showed you on the screen.

  Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

  PART 1:

  1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

  If this part is too tricky for you, just watch the first part of the solution.

  PART 2:

  2. Consume the promise using .then and also add an error handler;
  3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
  4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
  5. After the second image has loaded, pause execution for 2 seconds again;
  6. After the 2 seconds have passed, hide the current image.

  TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

*/

const images = document.querySelector('.images');
const imageOne = 'https://images.unsplash.com/photo-1504457047772-27faf1c00561?q=100&w=1920';
const imageTwo = 'https://images.unsplash.com/photo-1516484681091-7d83961805f4?q=100&w=1920';
const imageThree = 'https://images.unsplash.com/photo-1599898330165-6c3b93296d60?q=100&w=1920';
const imageFour = 'https://images.unsplash.com/photo-1600051916848-b39423368552?q=100&w=1920';
const errorMsg = '<div class="py-3 px-5 fs-3">🚫 Image not found.</div>';

const createImage = function (imgPath, spinner = '') {
  spinner !== '' && toggleDisplay(spinner, 'add');
  const imgEl = document.createElement('img');
  imgEl.classList = 'h-100 rounded-2';
  imgEl.src = imgPath;
  return new Promise(function (resolve, reject) {
    imgEl.addEventListener('load', function () {
      resolve(imgEl);
    });
    imgEl.addEventListener('error', function () {
      reject(new Error('Image not found.'));
    });
  })
}

toggleDisplay(spnFour, 'add');
createImage(imageOne, spnFour)
  .then(image => {
    toggleDisplay(spnFour);
    images.append(image);
    return timer(5);
  })
  .catch(err => {
    console.error(err, `Error loading image: ${imageOne}:`);
    toggleDisplay(spnFour);
    spnFour.insertAdjacentHTML('afterend', errorMsg);
    return timer(3);
  })
  .then(() => {
    spnFour.nextElementSibling.remove();
    return createImage(imageTwo, spnFour);
  })
  .then((image) => {
    images.append(image);
    toggleDisplay(spnFour);
    return timer(5);
  })
  .catch(err => {
    console.error(err, `Error loading image: ${imageTwo}:`);
    toggleDisplay(spnFour);
    spnFour.insertAdjacentHTML('afterend', errorMsg);
    return timer(3);
  })
  .then(() => {
    spnFour.nextElementSibling.remove();
    return createImage(imageThree, spnFour);
  })
  .then((image) => {
    images.append(image);
    toggleDisplay(spnFour);
    return timer(5);
  })
  .catch(err => {
    console.error(err, `Error loading image: ${imageThree}:`);
    toggleDisplay(spnFour);
    spnFour.insertAdjacentHTML('afterend', errorMsg);
    return timer(3);
  })
  .then(() => {
    spnFour.nextElementSibling.remove();
    return createImage(imageFour, spnFour);
  })
  .then((image) => {
    images.append(image);
    toggleDisplay(spnFour);
  })
  .catch(err => {
    console.error(err, `Error loading image: ${imageFour}:`);
    toggleDisplay(spnFour);
    spnFour.insertAdjacentHTML('afterend', errorMsg);
  })
// .catch(err => console.error(err));

/* Consuming Promises with Async/Await ================================================== */

const whereAmIAA = async function () {
  toggleDisplay(youR);
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;
  const apiReverse = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`;
  const data = await fetchCountry(apiReverse, 'Problem with geocoding.');
  const { city, country_code } = data.address;
  const [country] = await fetchCountry(restCountriesCode + country_code, 'Country not found.');
  renderCountryReverse(country, city, iAm);
  toggleDisplay(spnThree);
}

// btnWAI.addEventListener('click', whereAmIAA);

/* Error Handling With try...catch ================================================== */

const whereAmITC = async function () {
  try {
    toggleDisplay(youR);
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const apiReverse = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`;
    const data = await fetchCountry(apiReverse, 'Problem with geocoding.');
    const { city, country_code } = data.address;
    const [country] = await fetchCountry(restCountriesCode + country_code, `Country '${country_code}' not found.`);
    renderCountryReverse(country, city, iAm);
    toggleDisplay(spnThree);
  } catch (err) {
    toggleDisplay(spnThree);
    console.error('👉 ' + err);
    toggleDisplay(youR, 'add');
    youR.textContent = err;
  }
}

btnWAI.addEventListener('click', whereAmITC);

/* Returning Values from Async Functions ================================================== */

const whereAmIRV = async function () {
  try {
    toggleDisplay(youR);
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const apiReverse = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`;
    const data = await fetchCountry(apiReverse, 'Problem with geocoding.');
    const { city, country, country_code } = data.address;
    const [you] = await fetchCountry(restCountriesCode + country_code, `Country '${country_code}' not found.`);
    renderCountryReverse(you, city, iAm);
    toggleDisplay(spnThree);

    // return value from async function
    return `You are in ${city}, ${country}`;
  } catch (err) {
    toggleDisplay(spnThree);
    console.error('👉 ' + err);
    toggleDisplay(youR, 'add');
    youR.textContent = err;

    // reject promise returned from async function
    throw err;
  }
}

console.log('❶ Will get your location.');

// whereAmIRV()
//   .then(data => console.log('❷ ' + data))
//   .catch(err => console.error('❷ 👉 ' + err.message))
//   .finally(() => console.log('❸ Finished getting location.'));

(async function () {
  try {
    const data = await whereAmIRV();
    console.log('❷ ' + data);
  } catch (error) {
    console.error('❷ 👉 ' + error.message);
  }
  console.log('❸ Finished getting location.');
})()

/* Running Promises in Parallel ================================================== */

const getCountries = async function (one, two, three) {
  try {
    // const [countryOne] = await fetchCountry(restCountriesName + one, `Country ${one} not found.`);
    // const [countryTwo] = await fetchCountry(restCountriesName + two, `Country ${two} not found.`);
    // const [countryThree] = await fetchCountry(restCountriesName + three, `Country ${three} not found.`);
    // console.log([countryOne.capital[0], countryTwo.capital[0], countryThree.capital[0]]);
    const data = await Promise.all([
      fetchCountry(restCountriesName + one, `Country ${one} not found.`),
      fetchCountry(restCountriesName + two, `Country ${two} not found.`),
      fetchCountry(restCountriesName + three, `Country ${three} not found.`)
    ]);
    console.log(data.map(d => d[0].capital[0]));
  } catch (error) {
    console.error(error);
  }
}

getCountries('portugal', 'canada', 'tanzania');

/* Other Promise Combinator: race, allSettled and any ==================================================

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race

*/

(async function () {
  try {
    const data = await Promise.race([
      fetchCountry(restCountriesName + 'italy', `Country not found.`),
      fetchCountry(restCountriesName + 'egypt', `Country not found.`),
      fetchCountry(restCountriesName + 'mexico', `Country not found.`)
    ]);
    console.log(data[0].flag, data[0].name.common);
  } catch (error) {
    console.error(error);
  }
})()

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('🐢 Request took too long!'))
    }, sec * 1000)
  })
}

Promise.race([
  timeout(5),
  fetchCountry(restCountriesName + 'mexico', `Country not found.`)
])
  .then(res => console.log('🚅', res[0].flag, res[0].name.common, 'won.'))
  .catch(err => console.error(err))

Promise.all([
  Promise.resolve('SUCCESS FIRST'), Promise.reject('ERROR'), Promise.resolve('SUCCESS AGAIN')
]).then(res => res.map(r => console.log(r.status === 'rejected' ? '🔺' + r.reason : r.value)))
  .catch(err => console.error(err))

Promise.allSettled([
  Promise.resolve('SUCCESS FIRST'), Promise.reject('ERROR'), Promise.resolve('SUCCESS AGAIN')
]).then(res => res.map(r => console.log(r.status === 'rejected' ? '🔺 ' + r.reason : r.value)))

Promise.any([
  Promise.reject('ERROR'), Promise.resolve('SUCCESS FIRST (any)'), Promise.resolve('SUCCESS AGAIN')
]).then(res => console.log(res))

/* Coding Challenge #3 ==================================================

  PART 1:

  Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.

  Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

  PART 2:

  1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
  2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
  3. Check out the 'imgs' array in the console! Is it like you expected?
  4. Use a promise combinator function to actually get the images from the array 😉
  5. Add the 'parallel' class to all the images (it has some CSS styles).

  TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.
*/

const allImg = document.querySelectorAll('.img');
const imgOne = document.querySelector('.image-one');
const imgTwo = document.querySelector('.image-two');
const imgThree = document.querySelector('.image-three');
const imgFour = document.querySelector('.image-four');
const imgsArr = [imgOne, imgTwo, imgThree, imgFour];
const imO = 'https://images.unsplash.com/photo-1499561385668-5ebdb06a79bc?q=100&w=1920';
const imT = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=100&w=1920';
const imTh = 'https://images.unsplash.com/photo-1440778303588-435521a205bc?q=100&w=1920';
const imF = 'https://images.unsplash.com/photo-1471500466955-85aecf33f71f?q=100&w=1920';
const imgArr = [imO, imT, imTh, imF];

spn.forEach(s => s.classList.remove('d-none'));
const loadNPause = async function () {
  try {
    for (let i = 0; i < imgArr.length; i++) {
      try {
        const iE = await createImage(imgArr[i]);
        spn[i].classList.add('d-none');
        imgsArr[i].append(iE);
      } catch (error) {
        spn[i].classList.add('d-none');
        imgsArr[i].innerHTML = errorMsg;
        console.error('Error loading image:', error);
      }
      i < 3 && await timer(1);
    }

    // try {
    //   const iO = await createImage(imO);
    //   spn[0].classList.add('d-none');
    //   imgOne.append(iO);
    // } catch (error) {
    //   spn[0].classList.add('d-none');
    //   imgOne.innerHTML = errorMsg;
    //   console.error(error);
    // }
    // await timer(1);

    // try {
    //   const iT = await createImage(imT);
    //   spn[1].classList.add('d-none');
    //   imgTwo.append(iT);
    // } catch (error) {
    //   imgTwo.innerHTML = errorMsg;
    //   console.error(error);
    // }
    // await timer(1);

    // try {
    //   const iTh = await createImage(imTh);
    //   spn[2].classList.add('d-none');
    //   imgThree.append(iTh);
    // } catch (error) {
    //   spn[2].classList.add('d-none');
    //   imgThree.innerHTML = errorMsg;
    //   console.error(error);
    // }
    // await timer(1);

    // try {
    //   const iF = await createImage(imF);
    //   spn[3].classList.add('d-none');
    //   imgFour.append(iF);
    // } catch (error) {
    //   spn[3].classList.add('d-none');
    //   imgFour.innerHTML = errorMsg;
    //   console.error(error);
    // }
  } catch (error) { console.error('Unexpected error:', error) }
}

loadNPause();

const loadAll = async function (imgs) {
  try {
    const arrImg = imgs.map(async i => {
      try {
        return await createImage(i);
      }
      catch (error) {
        console.error('Error loading image:', error);

        // re-rejecting
        throw error; // throw Promise.reject(error);
      }
    })

    const imgsEl = await Promise.allSettled(arrImg);

    for (let i = 0; i < imgsEl.length; i++) {
      if (imgsEl[i].status === 'fulfilled') allImg[i].append(imgsEl[i].value)
      else allImg[i].innerHTML = errorMsg;
      spn[i + 4].classList.add('d-none');
    }
  } catch (error) { console.error('Unexpected error:', error) }

  // try {
  //   const arrImg = imgs.map(async i => await createImage(i));
  //   const imgsEl = await Promise.all(arrImg);
  //   for (let i = 0; i < allImg.length; i++) {
  //     allImg[i].append(imgsEl[i]);
  //     spn[i + 4].classList.add('d-none');
  //   }
  // } catch (error) { console.error('Unexpected error:', error) }
}

loadAll([imageOne, imageTwo, imageThree, imageFour]);