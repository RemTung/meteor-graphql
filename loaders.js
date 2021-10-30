const DataLoader = require('dataloader');
const fetch = require('node-fetch');

const API_URL = 'http://localhost:4000/v1';

const meteorLoader = new DataLoader((ids) => {
  const arrayOfMeteorPromises = ids.map((id) => {
    console.log(`Calling for meteor: ${id}`);
    return fetch(`${API_URL}/meteor/${id}`).then((res) => res.json());
  });
  return Promise.all(arrayOfMeteorPromises);
});

module.exports = {
  getDataLoaders: () => ({
    meteorLoader: meteorLoader,
  }),
};
