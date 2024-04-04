import React, { useState, useEffect } from 'react';
import Header from './Header';
import PartyInfo from './PartyInfo';
import EncounterContext from './EncounterContext';
import EncounterDemeanor from './EncounterDemeanor';
import GenerateEncounterButton from './GenerateEncounterButton';
import Bestiary from './Bestiary';
import EncounterCreatures from './EncounterCreatures';
import EncounterGenerator from './EncounterGenerator';
import Instructions from './Instructions';
import bridge from './bridge';
import './componentStyles/app.css';

function App() {
  const [party, setParty] = useState([
    { id: 0, level: 1 },
    { id: 1, level: 1 },
    { id: 2, level: 1 },
    { id: 3, level: 1 },
  ]);
  const [encounterInfo, setEncounterInfo] = useState('');
  const [encounterDemeanor, setEncounterDemeanor] = useState('');
  const [bestiaryData, setBestiaryData] = useState([]);
  const [bestiaryDataFiltered, setBestiaryDataFiltered] = useState([]);
  const [bestiaryFilter, setBestiaryFilter] = useState('');
  const [encounterCreatures, setEncounterCreatures] = useState([]);
  const [prompt, setPrompt] = useState('');
  const [encounter, setEncounter] = useState('');

  function fetchData() {
    if (localStorage.getItem('bestiaryData') && localStorage.getItem('version') === JSON.stringify(process.env.VERSION)) {
      setBestiaryData(JSON.parse(localStorage.getItem('bestiaryData')));
    } else {
      localStorage.clear();
      bridge.getCreatures(null, null, 1, 5000)
        .then((response) => {
          localStorage.setItem('bestiaryData', JSON.stringify(response.data));
          localStorage.setItem('version', JSON.stringify(process.env.VERSION));
          setBestiaryData(response.data);
        });
    }
  }

  function filterBestiaryData() {
    const filtered = bestiaryData.filter((creature) => (
      creature.name.toLowerCase().includes(bestiaryFilter.toLowerCase())
    ));
    setBestiaryDataFiltered(bestiaryFilter === '' ? bestiaryData : filtered);
  }

  function composePrompt() {
    let composition = '';
    composition += encounterInfo;

    composition += ` The encounter should be ${encounterDemeanor}.`;

    if (encounterDemeanor === 'Friendly' || encounterDemeanor === 'Neutral') {
      composition += ' The creatures should have a conflict which the players can either aid with or disregard though the creatures should not directly ask for help';
    }

    const creatureCounts = encounterCreatures.reduce((acc, creature) => {
      acc[creature.name] = (acc[creature.name] || 0) + 1;
      return acc;
    }, {});

    const creatures = Object.entries(creatureCounts)
      .map(([creature, count]) => `${count} ${creature}${count > 1 ? 's' : ''}`)
      .join(', ');

    composition += ` The encounter should include ${creatures}.`;

    setPrompt(`${composition}`);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterBestiaryData();
  }, [bestiaryData, bestiaryFilter]);

  useEffect(() => {
    composePrompt();
  }, [encounterInfo, encounterDemeanor, encounterCreatures]);

  return (
    <div id="app">
      <Header />
      <div id="app_column_container">
        <div className="app_column app_column_1">
          <PartyInfo
            party={party}
            setParty={setParty}
          />
        </div>
        <div className="app_column app_column_2">
          <Bestiary
            bestiaryData={bestiaryDataFiltered}
            setBestiaryFilter={setBestiaryFilter}
            encounterCreatures={encounterCreatures}
            setEncounterCreatures={setEncounterCreatures}
          />
          <EncounterCreatures
            encounterCreatures={encounterCreatures}
            setEncounterCreatures={setEncounterCreatures}
          />
        </div>
        <div className="app_column app_column_3">
          <EncounterContext
            setEncounterInfo={setEncounterInfo}
            setEncounter={setEncounter}
            bridge={bridge}
            prompt={prompt}
          />
          <EncounterDemeanor
            setEncounterDemeanor={setEncounterDemeanor}
          />
          <br />
          <br />
          <GenerateEncounterButton
            setEncounter={setEncounter}
            bridge={bridge}
            prompt={prompt}
          />
        </div>
      </div>
      <div id="bottom_row">
        {encounter === '' && <Instructions />}
        {encounter !== '' && (
        <EncounterGenerator
          encounter={encounter}
          setEncounter={setEncounter}
          bridge={bridge}
          prompt={prompt}
        />
        )}
      </div>
    </div>
  );
}

export default App;
