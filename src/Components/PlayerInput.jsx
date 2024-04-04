import React, { useState } from "react";

const PlayerInput = ({ inititalName, symbol, active, setPlayers }) => {
  const [playerName, setPlayerName] = useState(inititalName);
  const [editing, setEditing] = useState(false);

  const handleEdit = (e) => {
    setEditing(true);
    setPlayerName(e.target.value);
  }

  const handleClick = (e) => {
    setEditing((prevState) => !prevState);
    setPlayers(prevState =>{ return {...prevState, [symbol]: playerName}});
  }
  return (
    <>
      <li className={active ? 'active' : null}>
        <span className="player">
          {editing && <input type="text" required value={playerName} onChange={handleEdit}/>}
          {!editing && <span className="player-name">{playerName}</span>}
          <span className="player-symbol">{symbol}</span>
          <button onClick={handleClick}>{editing ? "Save" : "Edit"}</button>
        </span>
      </li>
    </>
  );
};

export default PlayerInput;
