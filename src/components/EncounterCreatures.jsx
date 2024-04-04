import React from 'react';
import EncounterCreaturesRow from './EncounterCreaturesRow';
import './componentStyles/encounterCreatures';

function EncounterCreatures({ encounterCreatures, setEncounterCreatures }) {
  return (
    <div id="encounter_creatures_wrapper">
      <h2>Creatures</h2>
      <div id="encounter_creatures">
        {encounterCreatures.map((creature, index) => (
          <EncounterCreaturesRow
            creature={creature}
            encounterCreatures={encounterCreatures}
            setEncounterCreatures={setEncounterCreatures}
            key={`encounter creature ${creature._id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default EncounterCreatures;
