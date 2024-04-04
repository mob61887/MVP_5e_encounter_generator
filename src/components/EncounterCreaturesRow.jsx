import React from 'react';

function EncounterCreaturesRow({creature, encounterCreatures, setEncounterCreatures}) {
  function handleRemoveFromEncounterClick() {
    const creatureIndex = encounterCreatures.findIndex((c) => c.name === creature.name);

    if (creatureIndex !== -1) {
      // Check if the creature's quantity is greater than 1
      if (encounterCreatures[creatureIndex].quantity > 1) {
        // Decrement the quantity
        const updatedCreature = {
          ...encounterCreatures[creatureIndex],
          quantity: encounterCreatures[creatureIndex].quantity - 1,
        };
        const newEncounterCreatures = [
          ...encounterCreatures.slice(0, creatureIndex),
          updatedCreature,
          ...encounterCreatures.slice(creatureIndex + 1)
        ];
        setEncounterCreatures(newEncounterCreatures);
      } else {
        // If the quantity is 1, remove the creature
        const newEncounterCreatures = [
          ...encounterCreatures.slice(0, creatureIndex),
          ...encounterCreatures.slice(creatureIndex + 1),
        ];
        setEncounterCreatures(newEncounterCreatures);
      }
    }
  }

  return (
    <div className="bestiary_row" onClick={handleRemoveFromEncounterClick}>
      <span>{creature.name}</span>
      <span>{creature.quantity}</span>
      <span>{creature.cr}</span>
    </div>
  );
}

export default EncounterCreaturesRow;
