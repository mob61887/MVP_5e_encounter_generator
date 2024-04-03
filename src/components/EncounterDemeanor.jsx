import React from 'react';

function EncounterDemeanor({ setEncounterDemeanor }) {
  function handleEncounterDemeanorChange(event) {
    setEncounterDemeanor(event.target.value);
  }

  return (
    <form id="encounter_demeanor_form">
      <p>Is this encounter hostile, neutral, or friendly?</p>
      <select id="encounter_demeanor" name="encounter_demeanor" defaultValue="" onChange={handleEncounterDemeanorChange}>
        <option value="" disabled>Select One</option>
        <option value="Hostile">Hostile</option>
        <option value="Neutral">Neutral</option>
        <option value="Friendly">Friendly</option>
      </select>
    </form>
  );
}

export default EncounterDemeanor;
