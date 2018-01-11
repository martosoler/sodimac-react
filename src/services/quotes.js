import axios from 'axios';

// const apiPrefix = 'https://sodimac-quotes-api.azurewebsites.net'
const kongHost = 'https://solerthekong.cloudapp.net:8443'
const code = 'KMuoX5FjRO9m/ViWxjC3eDAGR6EijHLtGswioGnQalFQBV38mhyyWQ=='

const getQuotes = () => {
  console.log('getting quotes');
  return axios.get(`${kongHost}/quotes/api/list?code=${code}`)
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
