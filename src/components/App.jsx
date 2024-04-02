import React, {useState} from 'react';
import PartyInfo from './PartyInfo';
import EncounterContext from './EncounterContext';
import IsHostile from './IsHostile';

function App() {
const [partySize, setPartySize] = useState(4);
const [partyLevel, setPartyLevel] = useState(1);
const [encounterInfo, setEncounterInfo] = useState('');
const [isHostile, setIsHostile] = useState(false);
  return (
    <div>
      <PartyInfo setPartySize={setPartySize} setPartyLevel={setPartyLevel}/>
      <EncounterContext setEncounterInfo={setEncounterInfo}/>
      <IsHostile setIsHostile={setIsHostile}/>
    </div>
  );
}

export default App;
