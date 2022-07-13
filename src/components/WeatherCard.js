const WeatherCard = ({ resetSearch, location, weather }) => {
  const iconList = [...Array(33).keys()].filter(
    (icon) => ![0, 9, 10, 27, 28].includes(icon)
  ); // the AccuWeather icons list doesn't contain all numbers in the range for some odd reason

  const iconIndex = weather?.DailyForecasts[0]?.Day?.Icon;
  const icon_id = `icon_${iconIndex}`;

  return (
    <div className='row d-flex justify-content-center align-items-center h-100'>
      <div className='col-10 col-xl-8'>
        <h1 className='fs-1 ms-sm-4 top-text light-shadow'>
          Here's your data!
        </h1>
        <div className='card border-0 text-center p-5'>
          <div className='w-100'>
            <h1 className='display-4 fw-bold darker-shadow' id='location-name'>
              {location}
            </h1>
            <h2 className='fs-3 fw-light light-shadow' id='phrase'>
              {`${weather?.DailyForecasts[0]?.Day?.IconPhrase}` || 'not found'}
            </h2>
            <div className='d-md-flex align-items-center justify-content-center'>
              <div className='d-flex align-items-center justify-content-center'>
                <div id={icon_id} className='wicon'>
                  {!iconList.includes(iconIndex) && 'icon not found'}
                </div>
              </div>
              <h2
                id='temperature'
                className='display-1 text-nowrap darker-shadow'
              >
                {`${weather?.DailyForecasts[0]?.Temperature?.Maximum?.Value}°C` ||
                  'not found'}
              </h2>
            </div>
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
