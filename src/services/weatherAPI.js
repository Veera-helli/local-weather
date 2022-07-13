import axios from 'axios';

const getInfo = async (location) => {
  const baseUrl = 'https://dataservice.accuweather.com'; // remember to change this
  const API_KEY = 'FQhDhttKGhz2VTiKYKN3WP6RSAT6qEcs';

  const req1 = await axios
    .get(
      `${baseUrl}/locations/v1/cities/search?apikey=${API_KEY}&q=${location}`
    )
    .catch((e) => console.log('error in request 1', e));

  if (!req1.data || req1.data.length === 0) {
    return 'Invalid location';
  }

  console.log('data >>>>');
  console.log(req1.data);
  console.log('Key >>>');
  console.log(req1.data[0]?.Key);

  const req2 = await axios
    .get(
      `${baseUrl}/forecasts/v1/daily/1day/${req1.data[0]?.Key}?apikey=${API_KEY}&metric=true`
    )
    .catch((e) => {
      console.log('error in request 2', e);
      return 'error in request 2';
    });
  // const req2 = null;
  console.log(req2.data);
  return req2.data;
};

export default { getInfo };
