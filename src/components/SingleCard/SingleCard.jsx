import React from 'react'
import './SingleCard.css';
import cardData from '../../cardData';


const SingleCard = ({card, isFlipped, isMatched, onClick}) => {

  return (
    <div className={`card ${isFlipped || isMatched ? 'flipped' : ''}`} onClick={onClick}>
        <span className='card-content'>
            {isFlipped || isMatched ? card.value : ''}
        </span>
    </div>
  )
}

export default SingleCard