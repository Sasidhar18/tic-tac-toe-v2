import { useState } from "react";
import PlayerInput from "./PlayerInput";
import GameBoard from "./GameBoard";
import { WINNING_COMBINATIONS } from "./data";
import GameOver from "./GameOver";

const Game = () => {
  const inititalGame = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [players, setPlayers] = useState({
    X: "Player1",
    O: "Player2",
  });

  const [activePlayer, setActivePlayer] = useState("X");
  const [updateGame, setUpdateGame] = useState(inititalGame);
  const isDraw = updateGame.every((row) =>
    row.every((value) => value !== null)
  );

  let winner;

  const handleGameChange = (i, j) => {
    setUpdateGame((prevState) => {
      let updatedGame = [...prevState];
      updatedGame[i][j] = activePlayer;
      return updatedGame;
    });
    setActivePlayer((prevState) => (prevState === "X" ? "O" : "X"));
  };

  const resetGame = () => {
    setUpdateGame(inititalGame);
    setActivePlayer("X");
  };

  const updatedGame = [...updateGame];

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = updatedGame[combination[0].row][combination[0].column];
    const secondSquare = updatedGame[combination[1].row][combination[1].column];
    const thirdSquare = updatedGame[combination[2].row][combination[2].column];
    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = players[firstSquare];
    }
  }

  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <PlayerInput
          active={activePlayer === "X"}
          inititalName="Player1"
          symbol="X"
          setPlayers={setPlayers}
        />
        <PlayerInput
          active={activePlayer === "O"}
          inititalName="Player2"
          symbol="O"
          setPlayers={setPlayers}
        />
      </ol>
      <GameBoard
        board={updateGame}
        activePlayer={activePlayer}
        handleGameChange={handleGameChange}
      />
      {(isDraw || winner) && <GameOver playAgain={resetGame} winner={winner} />}
    </div>
  );
};

export default Game;
