"use client"
import React from 'react'

import './deliveryCartTop.css'
import { Star,CurrencyRupee } from '@mui/icons-material'

const DeliveryCartTop = (props) => {
  
  return (
    <div className={` w-[55%] border-b-2 border-solid border-grey pb-3 max-[600px]:w-[100%]`}>
      <div className="deliveryCardTitle">
        <div style={{ fontSize: "18px" , fontWeight:"600" }}  className={`cardtitle`}>{props.values.name}</div>
        <div className="rating">
          4 <Star style={{ fontSize: "10px" }} />
        </div>
      </div>
      <div className="cardDetails">
        <div className="cardDetail">{props.values.details}</div>
        <div className="cardPrice">
          <p>
            <CurrencyRupee style={{ fontSize: "16px" }} />
            <span>{props.values.price}</span> for one
          </p>
        </div>
      </div>
      <div className="timing">
        Delivery in <span> {props.values.time}</span> minutes
      </div>
     
    </div>
  )
}

export default DeliveryCartTop
