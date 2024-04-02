import React, {useState, useEffect} from 'react';

function EncounterContext( {setEncounterInfo}) {
  const [encounterContext, setEncounterContext] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [location, setLocation] = useState('');
  const [objective, setObjective] = useState('');
  const [customContext, setCustomContext] = useState('');

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

  function handleObjectiveChange(event) {
    setObjective(event.target.value);
  }

  function handleCustomContextChange(event) {
    setCustomContext(event.target.value);
  }

  return (
    <form id="encounter_context_form">
      <div>
        <p>You're party is:</p>
        <select id="encounter_dropdown" name="encounter_dropdown" defaultValue="" onChange={handleEncounterContextChange}>
          <option value="" disabled>Select One</option>
          <option value="Traveling">Traveling</option>
          <option value="Exploring">Exploring</option>
          <option value="Resting">Resting</option>
          <option value="Searching">Searching</option>
          <option value="Custom">Custom</option>
        </select>
        {encounterContext === "Traveling" && (
          <>
            <span> from </span>
            <input type="text" id="travelingFrom" name="travelingFrom" placeholder="Enter a Starting Location" onChange={handleOriginChange}></input>
            <span> to </span>
            <input type="text" id="travelingTo" name="travelingTo" placeholder="Enter a Destination" onChange={handleDestinationChange}></input>
          </>
        )}
        {encounterContext === "Exploring" && (
          <>
            <span> the area of </span>
            <input type="text" id="exploringLocation" name="exploringLocation" placeholder="Enter a Location" onChange={handleLocationChange}></input>
          </>
        )}
        {encounterContext === "Resting" && (
          <>
            <span> at </span>
            <input type="text" id="restingLocation" name="restingLocation" placeholder="Enter a Location" onChange={handleLocationChange}></input>
          </>
        )}
        {encounterContext === "Searching" && (
          <>
            <span> for </span>
            <input type="text" id="searchingFor" name="searchingFor" placeholder="Enter an Objective" onChange={handleObjectiveChange}></input>
            <span> in </span>
            <input type="text" id="searchingLocation" name="searchingLocation" placeholder="Enter a Location" onChange={handleLocationChange}></input>
          </>
        )}
        {encounterContext === "Custom" && (
          <>
            <span> Group Activity: </span>
            <input type="textarea" id="customFor" name="customFor" placeholder="Enter Your Custom Activity" onChange={handleCustomContextChange}></input>
          </>
        )}
      </div>
    </form>
  );
}

export default EncounterContext;