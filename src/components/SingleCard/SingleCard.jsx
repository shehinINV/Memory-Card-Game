import React from 'react'
import './SingleCard.css';
import cardData from '../../cardData';

const SingleCard = () => {
  return (
    <div className='card'>
        {/* { cardData.map((value, id) => (
            <div className='card-item' key={id}>
                <div className='card-item-inner'>
                    <div className='card-item-front'>
                        <img src={value} alt={value} />
                    </div>
                    <div className='card-item-back'>
                        <h3>{value}</h3>
                    </div>
                </div>
            </div>
        ))} */}
    </div>
  )
}

export default SingleCard