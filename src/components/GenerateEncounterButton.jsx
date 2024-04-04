import React from 'react';

function GenerateEncounterButton({ setEncounter, bridge, prompt }) {
  function fetchEncounter() {
    bridge.getEncounter(prompt)
      .then((response) => {
        setEncounter(response.data.choices[0].message.content);
      });
  }

  return (
    <button id="generate_encounter_button" type="button" onClick={fetchEncounter}>Write Encounter</button>
  );
}

export default GenerateEncounterButton;
