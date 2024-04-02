import React from 'react';
import BestiaryRow from './BestiaryRow';

function Bestiary({bestiaryData}) {
  return (
    <div>
      {bestiaryData.map((creature) => <BestiaryRow key={creature._id} creature={creature} />)}
    </div>
  );
}

export default Bestiary;