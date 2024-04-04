import React, { useState } from 'react';

function GenerateEncounterButton({ setEncounter, bridge, prompt }) {
  const [buttonStatus, setButtonStatus] = useState('idle');

  async function fetchEncounter() {
    bridge.getEncounter(prompt)
      .then((response) => {
        setEncounter(response.data.choices[0].message.content);
      });
  }

  async function handleWriteEncounterClick() {
    setButtonStatus('loading');
    await fetchEncounter();
    setButtonStatus('idle');
  }
  return buttonStatus === 'idle' ? (
    <button id="generate_encounter_button" type="button" onClick={handleWriteEncounterClick}>Write Encounter</button>
  )
    : (
      <button id="generate_encounter_button" type="button" disabled>Loading...</button>
    );
}

export default GenerateEncounterButton;
