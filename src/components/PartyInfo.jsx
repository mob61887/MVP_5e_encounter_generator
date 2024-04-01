import React from 'react';

function PartyInfo ( {setPartySize, setPartyLevel} ) {
  function handlePartySizeChange(event) {
    setPartySize(event.target.value);
  }
  function handlePartyLevelChange(event) {
    setPartyLevel(event.target.value);
  }

  return (
    <form className="id">
      <div>
      <label htmlFor="partySize">Party Size:</label>
      <input type="number" id="partySize" name="partySize" min="1" max="10" defaultValue="4" onChange={handlePartySizeChange}></input>
      </div>
      <div>
        <label htmlFor="partyLevel">Party Level:</label>
        <input type="number" id="partyLevel" name="partyLevel" min="1" max="20" defaultValue="1" onChange={handlePartyLevelChange}></input>
      </div>
    </form>
  )
}

export default PartyInfo;