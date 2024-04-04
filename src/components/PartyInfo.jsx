import React from 'react';
import AddPlayerButton from './AddPlayerButton';
import PartyRow from './PartyRow';

function PartyInfo({ party, setParty }) {
  function handleSetPartyLevelChange(event) {
    const newParty = party.map((member) => ({ ...member, level: event.target.value }));
    setParty(newParty);
  }
  return (
    <div>
      <span>Party Level: </span>
      <input type="number" id="partyLevel" name="party level" min="1" max="20" defaultValue="1" onChange={handleSetPartyLevelChange} />
      <br />
      <br />
      <AddPlayerButton party={party} setParty={setParty} />
      <br />
      <br />
      {party.map((member) => (
        <PartyRow
          key={`member ${member.id + 1}`}
          party={party}
          setParty={setParty}
          i={member.id}
        />
      ))}
    </div>
  );
}

export default PartyInfo;
