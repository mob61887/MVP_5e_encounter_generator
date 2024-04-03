import React from 'react';

function EncounterGenerator({ encounter, fetchEncounter }) {
  return (
    <div id="encounter_generator">
      {encounter.split('\n').map((paragraph) => <p>{paragraph}</p>)}
      <button id="generate_encounter_button" type="button" onClick={fetchEncounter}>Generate Encounter</button>
    </div>
  );
}

export default EncounterGenerator;
