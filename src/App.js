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

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const cityWeather = await weatherService.getInfo(location);

      if (cityWeather?.DailyForecasts) {
        setWeather(cityWeather);
      } else if (cityWeather === 'Invalid location') {
        setAlert('Location not found. Please check for typos.');
      } else if (cityWeather === 'data error') {
        setAlert('Connection error. Daily request limit may be exceeded.');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const resetSearch = async (event) => {
    event.preventDefault();
    setWeather(null);
  };

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
