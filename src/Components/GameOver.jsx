import React from 'react'

const GameOver = ({winner, playAgain}) => {
    let gameOver = <p>WOOHOOOO!!! <span className='winner'>{winner}</span> won the game</p>;
    if(!winner){
        gameOver = <p>Match is draw</p>
    }

  return (
    <div id='game-over'>
        <h2>Game Over!</h2>
        {gameOver}
        <button onClick={playAgain}>Play Again</button>
    </div>
  )
}

export default GameOver