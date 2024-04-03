const React = require('react');
import './componentStyles/bestiaryRow';

function BestiaryRow({creature, setEncounterCreatures, encounterCreatures}) {
  function handleAddToEncounterClick() {
    setEncounterCreatures([...encounterCreatures, creature]);
  }

  return (
    <div className="bestiary_row" onClick={handleAddToEncounterClick}>
      <span>{creature.name}</span>
      {/* <span>{creature.type}</span>
      <span>{creature.source}</span> */}
      <span>{creature.cr}</span>
    </div>
  );
}

export default BestiaryRow;