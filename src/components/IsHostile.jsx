import React from 'react';

function IsHostile({ setIsHostile }) {
  function handleIsHostileChange(event) {
    if (event.target.name === 'Hostile Encounter') {
      setIsHostile(event.target.checked);
    } else if (event.target.name === 'Non-Hostile Encounter') {
      setIsHostile(!event.target.checked);
    }
  }

  return (
    <form id="is_hostile_form">
      <p>Is this encounter hostile or non-hostile?</p>
      <label htmlFor="hostile">Hostile Encounter
        <input
          type="checkbox"
          id="hostile"
          name="Hostile Encounter"
          onChange={handleIsHostileChange}
        />
      </label>
      <br />
      <label htmlFor="non-hostile">Non-Hostile Encounter
        <input
          type="checkbox"
          id="non-hostile"
          name="Non-Hostile Encounter"
          onChange={handleIsHostileChange}
        />
      </label>
    </form>
  );
}

export default IsHostile;
