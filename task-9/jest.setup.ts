import "@testing-library/jest-dom"
import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});
global.fetch = require('node-fetch');
global.alert = jest.fn(); 
// jest.setup.js
// global.fetch = require('node-fetch');