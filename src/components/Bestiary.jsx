import React from 'react';
import BestiaryRow from './BestiaryRow';
import './componentStyles/bestiary';

function Bestiary({ bestiaryData, encounterCreatures, setEncounterCreatures }) {
  return (
    <div id="bestiary">
      {bestiaryData.map((creature) => (
        <BestiaryRow
          key={`bestiary ${creature._id}`}
          creature={creature}
          encounterCreatures={encounterCreatures}
          setEncounterCreatures={setEncounterCreatures}
        />
      ))}
    </div>
  );
}

export default Bestiary;
