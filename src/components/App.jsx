import React, {useState, useEffect} from 'react';
import PartyInfo from './PartyInfo';
import EncounterContext from './EncounterContext';
import IsHostile from './IsHostile';
import Bestiary from './Bestiary';
import bridge from './bridge';

function App() {
const [partySize, setPartySize] = useState(4);
const [partyLevel, setPartyLevel] = useState(1);
const [encounterInfo, setEncounterInfo] = useState('');
const [isHostile, setIsHostile] = useState(false);
const [bestiaryData, setBestiaryData] = useState([]);

function fetchData() {
  bridge.getCreatures(null, null, 1, 50)
    .then((response) => {
      setBestiaryData(response.data);
    });
}

useEffect(() => {
  fetchData();
}, []);

  return (
    <div>
      <PartyInfo setPartySize={setPartySize} setPartyLevel={setPartyLevel}/>
      <EncounterContext setEncounterInfo={setEncounterInfo}/>
      <IsHostile setIsHostile={setIsHostile}/>
      <Bestiary bestiaryData={bestiaryData}/>
    </div>
  );
}

export default App;
