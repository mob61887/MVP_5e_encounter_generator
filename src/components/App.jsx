import React, {useState} from 'react';
import PartyInfo from './PartyInfo';
import EncounterContext from './EncounterContext';

function App() {
const [partySize, setPartySize] = useState(4);
const [partyLevel, setPartyLevel] = useState(1);
const [encounterInfo, setEncounterInfo] = useState('');
  return (
    <div>
      <PartyInfo setPartySize={setPartySize} setPartyLevel={setPartyLevel}/>
      <EncounterContext setEncounterInfo={setEncounterInfo}/>
    </div>
  );
}

export default App;
