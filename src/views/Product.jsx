import React from 'react'
import SauHeader from '../components/SauHeader'
import SauFooter from '../components/SauFooter'
import CardProduct from '../components/CardProduct'

function Product() {
  return (
    <>
      <SauHeader />
      <h2 className='show-header show-h-p' >Product UI</h2>
      <hr />
      <br /> <br />
      <CardProduct imgname="https://picsum.photos/id/1060/536/354?blur=2" nameShow="Coffee"/>
      <CardProduct imgname="https://picsum.photos/id/870/536/354?grayscale&blur=2" nameShow="Beacon"/>
      <CardProduct imgname="https://picsum.photos/id/1084/536/354?grayscale" nameShow="Walrus"/>
      <CardProduct />

      <SauFooter />
    </>
  )
}

export default Product