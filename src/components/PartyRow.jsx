import React, { useState, useEffect } from 'react';
import { IoPersonRemoveSharp } from 'react-icons/io5';
import './componentStyles/partyRow.css';

function PartyRow({ party, setParty, i }) {
  const findMemberIndexById = (id) => party.findIndex((member) => member.id === id);

  const memberIndex = findMemberIndexById(i);
  const initialLevel = memberIndex !== -1 ? party[memberIndex].level : 1;

  const [level, setLevel] = useState(initialLevel);

  useEffect(() => {
    if (memberIndex !== -1) {
      setLevel(party[memberIndex].level);
    }
  }, [party, memberIndex]);

  function handleLevelChange(event) {
    const newLevel = parseInt(event.target.value, 10);
    setLevel(newLevel);

    const newParty = [...party];
    newParty[memberIndex].level = newLevel;
    setParty(newParty);
  }

  function handlePlayerRemoval() {
    const newParty = [...party];
    newParty.splice(memberIndex, 1);
    setParty(newParty);
  }

  return (
    <div className="party_row">
      <span>Level </span>
      <input
        type="number"
        id={`party-${i}`} // Ensure the ID is unique
        name="party"
        min="1"
        max="20"
        value={level} // Controlled component
        onChange={handleLevelChange}
      />
      <span
        className="remove-player_button"
        onClick={handlePlayerRemoval}>
        {' '}
        <IoPersonRemoveSharp />
      </span>
    </div>
  );
}

export default PartyRow;
