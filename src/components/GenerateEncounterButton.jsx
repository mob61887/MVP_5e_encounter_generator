import React, { useState } from 'react';

function GenerateEncounterButton({ setEncounter, bridge, prompt }) {
  const [buttonStatus, setButtonStatus] = useState('idle');

  async function fetchEncounter() {
    try {
      const response = await bridge.getEncounter(prompt);
      setEncounter(response.data.choices[0].message.content);
    } catch (error) {
      setEncounter(`Failed to fetch encounter: ${error}`);
    }
  }

  async function handleWriteEncounterClick() {
    setButtonStatus('loading');
    await fetchEncounter();
    setButtonStatus('idle');
  }

  return (
    <button
      id="generate_encounter_button"
      type="button"
      onClick={handleWriteEncounterClick}
      disabled={buttonStatus === 'loading'}
    >
      {buttonStatus === 'idle' ? 'Write Encounter' : 'Loading...'}
    </button>
  );
}

export default GenerateEncounterButton;
