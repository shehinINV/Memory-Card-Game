import React, { useEffect, useState } from 'react'
import './CardComponent.css';
import SingleCard from '../SingleCard/SingleCard';
import cardData from '../../cardData';
import GameBoard from './GameBoard/GameBoard';

const CardComponent = () => {
  
  // Sample custom hook
  const useGameState = () => {
    const [cards, setCards] = useState([]);
    const [moves, setMoves] = useState(0);
    const [matches, setMatches] = useState(0);
    const [matchedCards, setMatchedCards] = useState([]);
    const [gameDuration, setGameDuration] = useState(0);
    
  useEffect(() => {
    const shuffled = shuffledCards(cardData);
    setCards(shuffled);
  }, []);

  useEffect(() => {
    let timer;
    if (matches < 8) {
        timer = setInterval(() => {
            setGameDuration((prevDuration) => prevDuration + 1);
        }, 1000);
    } else {
        clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [matches]);
}
  

  const handleCardClick = (card) => {

    if (flippedCards.lenghth === 2 || flippedCards.includes(card)) {
        return;
    }
    const newFlippedCards = [...flippedCards, card];
    setFlippedCards(newFlippedCards);
    if (newFlippedCards.length ==2) {
        setMoves((prevMoves) => prevMoves + 1);
        const [firstCard, secondCard] = newFlippedCards;
        if (firstCard.value === secondCard.value) {
            setMatches((prevMatches) => prevMatches + 1);
            setMatchedCards((prev) =>[...prev, firstCard, secondCard.id]);
        }
        setTimeout(() => {
            setFlippedCards([]);
        }, 1000);
    }
  };
  const shuffledCards  = (card) => {
    const duplicatedCards = [...card, ...card];
    return duplicatedCards.sort(() => Math.random() - 0.5);
  };

  const resetGame = () => {
    setCards(shuffledCards(cardData));
    setFlippedCards([]);
    setMoves(0);
    setMatchedCards([]);
    setMatches(0);
    setGameDuration(0);
  };

  return {
    cards, 
    flippedCards,
    matchedCards,
    moves,
    matches,
    gameDuration,
    handleCardClick,
    resetGame,
  }
}
  
  const MemoryGame = () => {
    const {
        cards,
        flippedCards,
        matchedCards,
        moves,
        matches,
        gameDuration,
        handleCardClick,
        resetGame,
    } = useGameState();
    
  return (
    <div className='card-game'>
        <h1>Welcome to! <br />Card Game</h1>
        <GameBoard cards={cards} flippedCards={flippedCards} matchedCards={matchedCards} handleCardClick={handleCardClick} />
        <div className='stats'>
            <p>Moves: {moves}</p>
            <p>Matches: {matches}</p>
            <p>Time : {gameDuration}</p>
        </div>
        {matches === 8 && (
            <div className='won-message'>
                <h2>You Won!</h2>
            </div>
        )}
        <button onClick={resetGame}>Retry Game</button>
    </div>
  );
}

export default CardComponent