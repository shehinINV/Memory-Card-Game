import React from 'react'
import SingleCard from '../../SingleCard/SingleCard'

const GameBoard = ({cards, flippedCards, matchedCards, moves, matches, gameDuration, handleCardClick, resetGame}) => {
  return (
    <div className='card'>
        {cards.map((card) => {
            <SingleCard key={card} isFlipped={flippedCards.includes(card)} isMatched={matchedCards.includes(card.id)} onClick={() => handleCardClick(card)} />
        })}
    </div>
  )
}

export default GameBoard