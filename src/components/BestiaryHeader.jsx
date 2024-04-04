import React from 'react';
import './componentStyles/bestiaryHeader';

function BestiaryHeader(bestiaryData, setBestiaryData) {
  return (
    <div id="bestiary_header_wrapper">
      <p id="bestiary_header">
        <span id="bestiary_header_name">Name</span>
        <span id="bestiary_header_cr">Challenge Rating</span>
      </p>
    </div>
  );
}

export default BestiaryHeader;
