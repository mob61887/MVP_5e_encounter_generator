import React from 'react';

function BestiaryFilter({ setBestiaryFilter }) {
  function handleFilterChange(event) {
    setBestiaryFilter(event.target.value);
  }

  return (
    <div>
      <input type="text" placeholder="Search" onChange={handleFilterChange} />
    </div>
  );
}

export default BestiaryFilter;
