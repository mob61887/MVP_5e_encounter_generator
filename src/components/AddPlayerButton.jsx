import React from 'react';

function AddPlayerButton({ party, setParty }) {
  function handleAddPlayer() {
    const lastLevel = party[party.length - 1].level;
    const newParty = [...party];
    newParty.push({ id: party.length, level: lastLevel });
    setParty(newParty);
  }

  return (
    <button onClick={handleAddPlayer}>Add New Player</button>
  );
}

export default AddPlayerButton;
