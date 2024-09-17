import React from 'react'
import SauHeader from '../components/SauHeader'
import SauFooter from '../components/SauFooter'

function Login() {
  return (
    <>
      <SauHeader />
      <h2 className='show-header' style={{ 'backgroundColor': 'yellow' }}>Login UI</h2>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <SauFooter />
    </>
  )
}

export default Login