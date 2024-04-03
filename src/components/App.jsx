import React, {useState, useEffect} from 'react';
import PartyInfo from './PartyInfo';
import EncounterContext from './EncounterContext';
import EncounterDemeanor from './EncounterDemeanor';
import Bestiary from './Bestiary';
import EncounterCreatures from './EncounterCreatures';
import bridge from './bridge';

function App() {
const [partySize, setPartySize] = useState(4);
const [partyLevel, setPartyLevel] = useState(1);
const [encounterInfo, setEncounterInfo] = useState('');
const [encounterDemeanor, setEncounterDemeanor] = useState('');
const [bestiaryData, setBestiaryData] = useState([]);
const [encounterCreatures, setEncounterCreatures] = useState([]);
const [prompt, setPrompt] = useState('');

function fetchData() {
  bridge.getCreatures(null, null, 1, 50)
    .then((response) => {
      setBestiaryData(response.data);
    });
}

function composePrompt() {
  let encounter = '';
  encounter += encounterInfo;

  encounter += ` The encounter should be ${encounterDemeanor}.`;

  if (encounterDemeanor === 'Friendly' || encounterDemeanor === 'Neutral') {
    encounter += ' The creatures should have a conflict which the players can either aid with or disregard.';
  }

  const creatureCounts = {};
  encounterCreatures.forEach(creature => {
      if (creatureCounts[creature.name]) {
          creatureCounts[creature.name]++;
      } else {
          creatureCounts[creature.name] = 1;
      }
  });
  let creatures = [];
  for (const [creature, count] of Object.entries(creatureCounts)) {
      creatures.push(`${count} ${creature}${count > 1 ? 's' : ''}`);
  }
  creatures = creatures.join(', ');
  encounter += ` The encounter should include ${creatures}.`;

  setPrompt(`${encounter}`)
}

useEffect(() => {
  fetchData();
}, []);

useEffect(() => {
  composePrompt();
}, [encounterInfo, encounterDemeanor, encounterCreatures]);

  return (
    <div>
      <p>Party Size: {partySize}</p>
      <p>Party Level: {partyLevel}</p>
      <p>Encounter: {prompt}</p>
      <PartyInfo
        setPartySize={setPartySize}
        setPartyLevel={setPartyLevel}
      />
      <EncounterContext
        setEncounterInfo={setEncounterInfo}
      />
      <EncounterDemeanor
        setEncounterDemeanor={setEncounterDemeanor}
      />
      <Bestiary
        bestiaryData={bestiaryData}
        encounterCreatures={encounterCreatures}
        setEncounterCreatures={setEncounterCreatures}
      />
      <EncounterCreatures
        encounterCreatures={encounterCreatures}
        setEncounterCreatures={setEncounterCreatures}
      />
    </div>
  );
}

export default App;
