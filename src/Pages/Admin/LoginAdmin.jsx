import React from 'react'

const LoginAdmin = (props) => {
  React.useEffect(() => {
    props.setShowFooter();
  }, [props]);
  return (
    <div>login admin</div>
  )
}

export default LoginAdmin