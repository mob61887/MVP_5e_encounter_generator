/* eslint-disable react/no-array-index-key */
import React from 'react';

function EncounterGenerator({ encounter, setEncounter, bridge, prompt}) {
  function fetchEncounter() {
    bridge.getEncounter(prompt)
      .then((response) => {
        setEncounter(response.data.choices[0].message.content);
      });
  }

  return (
    <div id="encounter_generator">
      {encounter.split('\n').map((paragraph, index) => <p className="encounter_paragraph" key={`encounter paragraph ${index}`}>{paragraph}</p>)}
      <button id="generate_encounter_button" type="button" onClick={fetchEncounter}>Generate Encounter</button>
    </div>
  );
}

export default EncounterGenerator;
