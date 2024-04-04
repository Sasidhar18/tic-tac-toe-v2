const GameBoard = ({ handleGameChange, board }) => {
  return (
    <div id="game-board">
      <ol>
        {board.map((row, rowIndex) => {
          return (
            <li>
              <ol key={rowIndex}>
                {row.map((column, columnIndex) => {
                  return (
                    <li>
                      <button
                        onClick={() => handleGameChange(rowIndex, columnIndex)}
                        disabled={column !== null}
                      >
                        {column}
                      </button>{" "}
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default GameBoard;
