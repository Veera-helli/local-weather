const WeatherForecast = ({ weatherData, icon_id, iconFound }) => (
  <>
    <h2 className='fs-3 fw-light light-shadow' id='phrase'>
      {`${weatherData?.Day?.IconPhrase}` || 'not found'}
    </h2>
    <div className='d-md-flex align-items-center justify-content-center'>
      <div className='d-flex align-items-center justify-content-center'>
        <div id={icon_id} className='wicon'>
          {!iconFound && 'icon not found'}
        </div>
      </div>
      <h2 id='temperature' className='display-1 text-nowrap darker-shadow'>
        {`${weatherData?.Temperature?.Maximum?.Value}°C` || 'not found'}
      </h2>
    </div>
  </>
);

export default WeatherForecast;
