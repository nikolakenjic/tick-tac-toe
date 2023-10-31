import React, { useState } from 'react';

const Player = ({ initialName, playerSymbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing((prevValue) => !prevValue);
    // Save and Editing name
    if (isEditing) {
      onChangeName(playerSymbol, playerName);
    }
  };

  const handlePlayerName = (e) => {
    setPlayerName(e.target.value);
  };

  //   First default Value
  let editingPlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editingPlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handlePlayerName}
      />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editingPlayerName}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Player;
