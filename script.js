const API_URL = 'https://restcountries.com/v3.1/all';

const apiRequest = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return console.error(error);
  }
};

const CountryCard = ({ name, capital, population, region, flags }) => {
  return `
        <a href="#" class="country scale-effect" data-country-name="${name.offical}">
          <div class="country-flag">
            <img src="${flags.png}" alt="${flags.name} Flag" />
          </div>
          <div class="country-info">
            <h2 class="country-title">${name.common}</h2>
            <ul class="country-brief">
              <li>
                <strong>population: </strong>${population}
              </li>
              <li>
                <strong>Region: </strong>${region}
              </li>
              <li>
                <strong>capital: </strong>${capital}
              </li>
            </ul>
          </div>
          </a>
        `;
};

const renderCountries = async () => {
  const countriesContainer = document.querySelector('.countries-grid');
  const countries = await apiRequest(API_URL);
  console.log(countries[0]);
  countriesContainer.innerHTML = countries.map((country) => CountryCard(country)).join('');
};

renderCountries();
