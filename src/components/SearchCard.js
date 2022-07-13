import Alert from './Alert';

const SearchCard = ({ handleSearch, setLocation, alert }) => {
  return (
    <div className='row d-flex justify-content-center align-items-center h-100'>
      <div className='col-10 col-xl-8'>
        <h1 className='fs-1 ms-2 ms-sm-4 top-text light-shadow'>
          Looking for weather forecasts?
        </h1>
        <div className='card border-0 text-center'>
          <h1 className='fs-2 fw-light pt-4 light-shadow'>
            Search for a city:
          </h1>
          <form onSubmit={handleSearch} className='w-100'>
            <div className='d-flex justify-content-center align-items-center'>
              <input
                className='w-75 m-4 p-2 fs-4'
                placeholder='Enter city name'
                onChange={({ target }) => setLocation(target.value)}
              ></input>
            </div>
            <Alert alert={alert} />
            <button
              className='btn btn-primary m-4 mb-5 px-4 fs-5'
              id='search-button'
              type='submit'
            >
              Show weather info
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
