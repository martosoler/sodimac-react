import axios from 'axios';

// const apiPrefix = 'https://sodimac-quotes-api.azurewebsites.net'
const apiPrefix = 'https://solerthekong.cloudapp.net:8443'
const code = 'KMuoX5FjRO9m/ViWxjC3eDAGR6EijHLtGswioGnQalFQBV38mhyyWQ=='

axios.interceptors.request.use((config) => {
    // Do something before request is sent
    config.headers.Host = 'sodimac-quotes-api.azurewebsites.net';
    return config;
  }, (error) => {
    console.error(error);
    return Promise.reject(error);
  });

const getQuotes = () => {
  console.log('getting quotes');
  return axios.get(`${apiPrefix}/api/list?code=${code}`)
    .then(res => res.data)
    .catch((error) => {
      console.error('Error getting quotes', error);
      return Promise.resolve([
        { name: 'default - a'},
        { name: 'default - b'},
      ])
    });
}

export default getQuotes;
