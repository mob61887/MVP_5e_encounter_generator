import React from 'react';
import { IoPersonAdd, IoPersonRemoveSharp } from 'react-icons/io5';
import './componentStyles/instructions.css';

function Instructions() {
  return (
    <div id="instructions">
      <h2>Instructions</h2>
      <p>
        Welcome to the Encounter Generator! This tool is designed to help you quickly and
        easily write an engaging random encounter for your game of Dungeons & Dragons.
      </p>
      <p>
        To get started, set the number of players in your party and their levels.You can set
        the party level as a whole, or assign individual levels to each player. You can add
        or remove players from the party by clicking the
        {' '}
        <button type="button">
          <span><IoPersonAdd /></span>
          {' '}
          Add Player
        </button>
        {' '}
        and
        {' '}
        <button type="button">
          Remove Player
          {' '}
          <IoPersonRemoveSharp />
        </button>
        {' '}
        buttons.
      </p>
      <p>
        Then, select from the Bestiary what creatures you would like present in your encounter.
        You can filter the Bestiary using the search bar to find specific creatures. Clicking
        on a creature in the Bestiary will add it to the encounter, while clicking on a creature
        the &quot;Creatures&quot; section will remove it from the encounter.
      </p>
      <p>
        Next, set the context for the encounter, such as what activity your party is engaged in
        when the encounter occurs and if the encounter should be hostile, friendly or neutral.
      </p>
      <p>
        Lastly, click the &quot;Write Encounter&quot; button to generate your encounter.
      </p>
    </div>
  );
}

export default Instructions;
