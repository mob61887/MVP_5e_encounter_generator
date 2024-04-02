const React = require('react');
import './componentStyles/bestiaryRow.css';

function BestiaryRow({creature}) {
  return (
    <div className="bestiary_row">
      <span>{creature.name}</span>
      <span>{creature.type}</span>
      <span>{creature.cr}</span>
      <span>{creature.source}</span>
    </div>
  );
}

export default BestiaryRow;