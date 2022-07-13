const Alert = ({ alert }) => (
  <div className='d-flex justify-content-center align-items-center'>
    {alert ? (
      <div
        className='alert alert-danger w-75 mx-5 border-danger border-3 border-top-0 border-bottom-0'
        role='alert'
      >
        {alert}
      </div>
    ) : (
      <div className='d-none'></div>
    )}
  </div>
);

export default Alert;
