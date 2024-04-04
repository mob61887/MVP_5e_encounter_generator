import React from 'react';
import { IoPersonAdd } from 'react-icons/io5';
import './componentStyles/addPlayerButton.css';

function AddPlayerButton({ party, setParty }) {
  function handleAddPlayer() {
    const lastLevel = party?.length ? party[party.length - 1].level : 1;
    const newParty = [...party];
    newParty.push({ id: party.length, level: lastLevel });
    setParty(newParty);
  }

  return (
    <button type="button" id="add_player_button" onClick={handleAddPlayer}>
      <span id="add_player_icon" onClick={handleAddPlayer}><IoPersonAdd /></span>
      {' '}
      Add Player
    </button>
  );
}

export default AddPlayerButton;
