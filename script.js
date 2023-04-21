console.log('funguju!');

const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');

console.log('Zacinam')

const btnClick = () => {
  fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
    .then((response) => response.json())
    .then((data) => {
      console.log('Vypisuji vychod')

      sunrise.textContent = `Vychod slunce: ${data.results.sunrise}`
      sunset.textContent = `Zapad slunce: ${data.results.sunset}`
    })
}



document.querySelector('.showBtn').addEventListener('click', btnClick);







//RESENI Z KODIM

/*  HTML
<div class="container">
      <button id="show">Ukázat</button>
      <div id="sunrise-sunset"></div>
    </div>
*/

/*
const showBtn = document.querySelector('#show');
showBtn.addEventListener('click', () => {
  fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { sunrise, sunset } = data.results;
      document.querySelector('#sunrise-sunset').innerHTML = `
        <p>Východ slunce: ${sunrise}</p>
        <p>Západ slunce: ${sunset}</p>
      `;
    });
});
*/




/*
const odpoved = document.querySelector('.odpoved')

const zpracujJSON = (data) => {
  console.log('Tady jsou data ze serveru')
  console.log(data.results.sunrise)
  odpoved.textContent = data.results.sunrise
}

const zpracujOdpoved = (odpoved) => {
  odpoved.textContent = 'Hura, mame data'
  // console.log(odpoved)
  const jsonPrislib = odpoved.json()
  jsonPrislib.then(zpracujJSON)
}

const promise = fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
odpoved.textContent = 'Strpeni, nacitam'
promise.then(zpracujOdpoved)
*/

/*
//ZKRACENY ZAPIS

fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
  .then((odpoved) => odpoved.json())
  .then((data) => {
    console.log(data)
    odpoved.textContent = data.results.sunrise
  })

//PRIKLAD 2.

const dnyDoVanoc = document.querySelector('.dnyDoVanoc')

fetch('https://just-countdown.eu/api/control?id=vanoce')
  .then((odpoved) => odpoved.json())
  .then((data) => {
    const hodiny = dnyDoVanoc.textContent = data.roomState.remainingTime.hours
    dnyDoVanoc.textContent = Math.round(hodiny / 24)
  })
*/