import React from 'react';

function EncounterCreaturesRow({creature, encounterCreatures, setEncounterCreatures}) {
  function handleRemoveFromEncounterClick() {
    const index = encounterCreatures.findIndex((c) => c.name === creature.name);

    if (index !== -1) {
      const newEncounterCreatures = [
        ...encounterCreatures.slice(0, index),
        ...encounterCreatures.slice(index + 1)
      ];
      setEncounterCreatures(newEncounterCreatures);
    }
  }

  return (
    <div className="bestiary_row" onClick={handleRemoveFromEncounterClick}>
      <span>{creature.name}</span>
      <span>{creature.cr}</span>
    </div>
  );
}

export default EncounterCreaturesRow;