import axios from 'axios';

const getInfo = async (location) => {
  const baseUrl = 'https://dataservice.accuweather.com';
  const api_key = process.env.REACT_APP_API_KEY;

  try {
    const req1 = await axios.get(
      `${baseUrl}/locations/v1/cities/search?apikey=${api_key}&q=${location}`
    );

    if (!req1.data || req1.data.length === 0) {
      return 'Invalid location';
    }

    // There could be more than one location with the same name (req1.data.length > 1), so the app could make the user choose.
    // However, through some testing it was clear that the first one in the list is often the most relevant.
    // Hence, I stuck with the simple way of going with the first item on the list.
    try {
      const req2 = await axios.get(
        `${baseUrl}/forecasts/v1/daily/1day/${req1.data[0]?.Key}?apikey=${api_key}&metric=true`
      );
      return { weatherData: req2.data, locationData: req1.data };
    } catch {
      // currently there is no reason to differentiate with the two catch errors
      return 'data error';
    }
  } catch {
    return 'data error';
  }
};

export default { getInfo };
