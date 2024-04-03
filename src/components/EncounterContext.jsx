/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';

function EncounterContext({ setEncounterInfo }) {
  const [encounterContext, setEncounterContext] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [location, setLocation] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('');
  const [objective, setObjective] = useState('');
  const [customContext, setCustomContext] = useState('');

  useEffect(() => {
    const prompt = encounterContext === 'Traveling' ? `Your party is traveling from ${origin} to ${destination}.`
      : encounterContext === 'Exploring' ? `Your party is exploring the area of ${location}.`
        : encounterContext === 'Resting' ? `Your party is resting  in ${location} during the ${timeOfDay}.`
          : encounterContext === 'Searching' ? `Your party is searching for ${objective} in ${location}.`
            : `Your party is ${customContext}.`;
    setEncounterInfo(prompt);
  }, [encounterContext, origin, destination, location, timeOfDay, objective, customContext]);

  function handleEncounterContextChange(event) {
    setEncounterContext(event.target.value);
  }

  function handleOriginChange(event) {
    setOrigin(event.target.value);
  }

  function handleDestinationChange(event) {
    setDestination(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleTimeOfDayChange(event) {
    setTimeOfDay(event.target.value);
  }

  function handleObjectiveChange(event) {
    setObjective(event.target.value);
  }

  function handleCustomContextChange(event) {
    setCustomContext(event.target.value);
  }

  return (
    <form id="encounter_context_form">
      <div>
        <p>You&apos;re party is:</p>
        <select id="encounter_dropdown" name="encounter_dropdown" defaultValue="" onChange={handleEncounterContextChange}>
          <option value="" disabled>Select One</option>
          <option value="Traveling">Traveling</option>
          <option value="Exploring">Exploring</option>
          <option value="Resting">Resting</option>
          <option value="Searching">Searching</option>
          <option value="Custom">Custom</option>
        </select>
        {encounterContext === 'Traveling' && (
          <>
            <span> from </span>
            <input type="text" id="travelingFrom" name="travelingFrom" placeholder="Enter a Starting Location" onChange={handleOriginChange} />
            <span> to </span>
            <input type="text" id="travelingTo" name="travelingTo" placeholder="Enter a Destination" onChange={handleDestinationChange} />
          </>
        )}
        {encounterContext === 'Exploring' && (
          <>
            <span> the area of </span>
            <input type="text" id="exploringLocation" name="exploringLocation" placeholder="Enter a Location" onChange={handleLocationChange} />
          </>
        )}
        {encounterContext === 'Resting' && (
          <>
            <span> at </span>
            <input type="text" id="restingLocation" name="restingLocation" placeholder="Enter a Location" onChange={handleLocationChange} />
            <span> during the </span>
            <select id="timeOfDay" name="timeOfDay" defaultValue="" onChange={handleTimeOfDayChange}>
              <option value="" disabled>Select One</option>
              <option value="morning">morning</option>
              <option value="afternoon">afternoon</option>
              <option value="evening">evening</option>
            </select>
          </>
        )}
        {encounterContext === 'Searching' && (
          <>
            <span> for </span>
            <input type="text" id="searchingFor" name="searchingFor" placeholder="Enter an Objective" onChange={handleObjectiveChange} />
            <span> in </span>
            <input type="text" id="searchingLocation" name="searchingLocation" placeholder="Enter a Location" onChange={handleLocationChange} />
          </>
        )}
        {encounterContext === 'Custom' && (
          <>
            <span> Group Activity: </span>
            <input type="textarea" id="customFor" name="customFor" placeholder="Enter Your Custom Activity" onChange={handleCustomContextChange} />
          </>
        )}
      </div>
    </form>
  );
}

export default EncounterContext;
