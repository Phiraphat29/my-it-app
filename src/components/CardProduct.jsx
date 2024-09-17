import React from 'react'

export default function CardProduct(props) {
  return (
    <div style={{textAlign: 'center'}}>
        <img src= {props.imgname} />
        <br />
        {props.nameShow}
    </div>
  )
}
