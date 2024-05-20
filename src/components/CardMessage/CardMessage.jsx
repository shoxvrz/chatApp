import React from 'react'
import './CardMessage.css'



const CardMessage = ({owner}) => {
  return (
    <div className={owner ? 'card owner' : 'card'}>
      <span className={owner ? 'ownerText' : ''}>Hello!</span>
    </div>
  )

}

export default CardMessage