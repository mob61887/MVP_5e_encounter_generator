import React from 'react';

function EncounterGenerator({prompt}) {

  return (
    <div id="encounter_generator">
      <p>{prompt}</p>
      <button id="generate_encounter_button">Generate Encounter</button>
    </div>
  );
}

export default EncounterGenerator;