import WeatherTitle from './WeatherTitle';
import WeatherForecast from './WeatherForecast';

const WeatherCard = ({ resetSearch, location, data }) => {
  const iconList = [...Array(33).keys()].filter(
    (icon) => ![0, 9, 10, 27, 28].includes(icon)
  ); // the AccuWeather icons list doesn't contain all numbers in the range for some odd reason

  const iconIndex = data?.weatherData?.DailyForecasts[0]?.Day?.Icon;
  const icon_id = `icon_${iconIndex}`;
  const iconFound = iconList.includes(iconIndex);

  return (
    <div className='row d-flex justify-content-center align-items-center h-100'>
      <div className='col-10 col-xl-8'>
        <h1 className='fs-1 ms-sm-4 top-text light-shadow'>
          Here's your data!
        </h1>
        <div className='card border-0 text-center p-5'>
          <div className='w-100'>
            <WeatherTitle locationData={data?.locationData[0]} />
            <WeatherForecast
              weatherData={data?.weatherData?.DailyForecasts[0]}
              icon_id={icon_id}
              iconFound={iconFound}
            />
          </div>
        </div>
        <div className='w-100 text-center'>
          <button
            className='btn btn-primary m-4 mb-5 px-4 fs-5'
            id='reset-button'
            onClick={resetSearch}
          >
            Search for another city
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
