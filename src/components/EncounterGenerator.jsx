/* eslint-disable react/no-array-index-key */
import React from 'react';
import './componentStyles/encounterGenerator.css';

function EncounterGenerator({ encounter }) {
  return (
    <div id="encounter_generator">
      {encounter.split('\n').map((paragraph, index) => paragraph !== '' && <p className="encounter_paragraph" key={`encounter paragraph ${index}`}>{paragraph}</p>)}
    </div>
  );
}

export default EncounterGenerator;
