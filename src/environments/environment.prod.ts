import sharedEnvironment from './base';

export const environment = {
  ...sharedEnvironment,
  production: true,
  countryAPI: 'https://restcountries.eu/rest/v2/name/',
  countryFields: ['name', 'capital', 'flag'],
  weatherAPI: 'http://api.apixu.com/v1/current.json'
};
