import './componentStyles/bestiaryRow';

const React = require('react');

function BestiaryRow({ creature, setEncounterCreatures, encounterCreatures }) {
  function handleAddToEncounterClick() {
    // Check if the creature already exists in the array
    const existingCreatureIndex = encounterCreatures.findIndex((c) => c.name === creature.name);

    if (existingCreatureIndex >= 0) {
      // If it exists, create a new array with the updated creature quantity
      const newEncounterCreatures = encounterCreatures.map((c, index) => {
        if (index === existingCreatureIndex) {
          return { ...c, quantity: c.quantity + 1 }; // Increment the quantity
        }
        return c;
      });
      setEncounterCreatures(newEncounterCreatures);
    } else {
      // If it does not exist, add the new creature with an initial quantity of 1
      setEncounterCreatures([...encounterCreatures, { ...creature, quantity: 1 }]);
    }
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
