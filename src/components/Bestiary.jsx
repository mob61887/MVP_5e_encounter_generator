import React from 'react';
import BestiaryFilter from './BestiaryFilter';
import BestiaryRow from './BestiaryRow';
import './componentStyles/bestiary';

function Bestiary({ bestiaryData, encounterCreatures, setEncounterCreatures, setBestiaryFilter }) {
  return (
    <div id="bestiary_wrapper">
      <h2>Bestiary</h2>
      <div>
        <BestiaryFilter setBestiaryFilter={setBestiaryFilter} />
      </div>
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
    </div>
  );
}

export default Bestiary;
