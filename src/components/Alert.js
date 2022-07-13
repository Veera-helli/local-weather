const Alert = ({ alert }) =>
  alert && (
    <div className='d-flex justify-content-center align-items-center'>
      <div
        className='alert alert-danger w-75 mx-5 border-danger border-3 border-top-0 border-bottom-0'
        role='alert'
      >
        {alert}
      </div>
    </div>
  );

export default Alert;
