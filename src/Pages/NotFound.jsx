import React, { useEffect } from 'react';

const NotFound = (props) => {
  useEffect(() => {
    props.setShowFooter();
  }, [props]);

  return (
    <div>
      <h1 className='text-center text-primary'>404 - Not Found</h1>
    </div>
  );
};

export default NotFound;
