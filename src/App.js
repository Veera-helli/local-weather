import NavigationBar from './components/NavigationBar';
import SearchCard from './components/SearchCard';
import WeatherCard from './components/WeatherCard';
import weatherService from './services/weatherAPI';
import { useState, useEffect } from 'react';

const App = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [alert, setAlert] = useState('');

  // Alert disappears after 4 seconds
  useEffect(() => {
    if (alert !== '') setTimeout(() => setAlert(''), 4000);
  }, [alert]);

  // const exampleWeather = {
  //   Headline: {
  //     EffectiveDate: '2022-07-16T08:00:00+03:00',
  //     EffectiveEpochDate: 1657947600,
  //     Severity: 4,
  //     Text: 'Pleasant this weekend',
  //     Category: 'mild',
  //     EndDate: null,
  //     EndEpochDate: null,
  //     MobileLink:
  //       'http://www.accuweather.com/en/jo/amman/221790/daily-weather-forecast/221790?unit=c&lang=en-us',
  //     Link: 'http://www.accuweather.com/en/jo/amman/221790/daily-weather-forecast/221790?unit=c&lang=en-us',
  //   },
  //   DailyForecasts: [
  //     {
  //       Date: '2022-07-12T07:00:00+03:00',
  //       EpochDate: 1657598400,
  //       Temperature: {
  //         Minimum: {
  //           Value: 19.5,
  //           Unit: 'C',
  //           UnitType: 17,
  //         },
  //         Maximum: {
  //           Value: 33.9,
  //           Unit: 'C',
  //           UnitType: 17,
  //         },
  //       },
  //       Day: {
  //         Icon: 29,
  //         IconPhrase: 'Sunny',
  //         HasPrecipitation: false,
  //       },
  //       Night: {
  //         Icon: 33,
  //         IconPhrase: 'Clear',
  //         HasPrecipitation: false,
  //       },
  //       Sources: ['AccuWeather'],
  //       MobileLink:
  //         'http://www.accuweather.com/en/jo/amman/221790/daily-weather-forecast/221790?day=1&unit=c&lang=en-us',
  //       Link: 'http://www.accuweather.com/en/jo/amman/221790/daily-weather-forecast/221790?day=1&unit=c&lang=en-us',
  //     },
  //   ],
  // };
  // // for UI development
  // useEffect(() => {
  //   setLocation('Example');
  //   setWeather(exampleWeather);
  // }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      console.log('going to service');
      const cityWeather = await weatherService.getInfo(location);
      console.log('not caught');
      console.log(`>>> ${cityWeather}`);
      if (cityWeather.DailyForecasts) {
        console.log('valid data');
        setWeather(cityWeather);
      } else if (cityWeather === 'Invalid location') {
        setAlert('Location not found. Please check for typos.');
        console.log('Location not found. Please check for typos.');
      } else if (cityWeather === 'Forecast data error') {
        setAlert('Connection error. Daily request limit may be exceeded.');
        console.log('Connection error. Daily request limit may be exceeded.');
      }
    } catch {
      console.log('couldnt get all');
    }
  };

  const resetSearch = async (event) => {
    event.preventDefault();
    setWeather(null);
    console.log('weather null');
  };

  // setLocation('Amman');

  // setWeather(exampleWeather);

  return (
    <div>
      <NavigationBar />
      <div id='content'>
        {weather ? (
          <WeatherCard
            resetSearch={resetSearch}
            location={location}
            weather={weather}
          />
        ) : (
          <SearchCard
            handleSearch={handleSearch}
            setLocation={setLocation}
            alert={alert}
          />
        )}
      </div>
    </div>
  );
};

export default App;
