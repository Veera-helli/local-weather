const WeatherTitle = ({ locationData }) => (
  <div className='d-flex align-items-center justify-content-center'>
    <h1 className='display-4 fw-bold darker-shadow mt-3' id='location-name'>
      {locationData?.LocalizedName}
    </h1>
    <h5
      className='fw-bold mx-2 p-1 bg-primary rounded-circle text-nowrap text-center'
      id='country-id'
    >
      {locationData?.Country?.ID}
    </h5>
  </div>
);

export default WeatherTitle;
