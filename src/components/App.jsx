import React, { useState, useEffect } from 'react';
import PartyInfo from './PartyInfo';
import EncounterContext from './EncounterContext';
import EncounterDemeanor from './EncounterDemeanor';
import Bestiary from './Bestiary';
import EncounterCreatures from './EncounterCreatures';
import EncounterGenerator from './EncounterGenerator';
import bridge from './bridge';

function App() {
  const [partySize, setPartySize] = useState(4);
  const [partyLevel, setPartyLevel] = useState(1);
  const [encounterInfo, setEncounterInfo] = useState('');
  const [encounterDemeanor, setEncounterDemeanor] = useState('');
  const [bestiaryData, setBestiaryData] = useState([]);
  const [encounterCreatures, setEncounterCreatures] = useState([]);
  const [prompt, setPrompt] = useState('');
  const [encounter, setEncounter] = useState('');

  function fetchData() {
    bridge.getCreatures(null, null, 1, 50)
      .then((response) => {
        setBestiaryData(response.data);
      });
  }

  function composePrompt() {
    let composition = '';
    composition += encounterInfo;

    composition += ` The encounter should be ${encounterDemeanor}.`;

    if (encounterDemeanor === 'Friendly' || encounterDemeanor === 'Neutral') {
      composition += ' The creatures should have a conflict which the players can either aid with or disregard.';
    }

    const creatureCounts = {};
    let creatures = Object.entries(creatureCounts).map(([creature, count]) => `${count} ${creature}${count > 1 ? 's' : ''}`);
    creatures = creatures.join(', ');
    composition += ` The encounter should include ${creatures}.`;

    setPrompt(`${composition}`);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    composePrompt();
  }, [encounterInfo, encounterDemeanor, encounterCreatures]);

  return (
    <div>
      <p>
        Party Size:
        {partySize}
      </p>
      <p>
        Party Level:
        {partyLevel}
      </p>
      <p>
        Encounter:
        {prompt}
      </p>
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
      <EncounterGenerator
        encounter={encounter}
        setEncounter={setEncounter}
        bridge={bridge}
        prompt={prompt}
      />
    </div>
  );
}

export default App;
