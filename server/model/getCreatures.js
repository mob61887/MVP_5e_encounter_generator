const {Bestiary} = require('../database/models');

async function getCreatures(searchKey, searchValue, page = 1, count = 1) {
  const queryCondition = searchKey && searchValue ? {[searchKey]: searchValue} : {};
  return Bestiary.find(queryCondition, {
    name: 1,
    source: 1,
    type: 1,
    size: 1,
    alignment: 1,
    ac: 1,
    hp: 1,
    speed: 1,
    str: 1,
    dex: 1,
    con: 1,
    int: 1,
    wis: 1,
    cha: 1,
    save: 1,
    skill: 1,
    senses: 1,
    passive: 1,
    immune: 1,
    resist: 1,
    vulnerable: 1,
    languages: 1,
    cr: 1,
    spellcasting: 1,
    traits: 1,
    action: 1,
    bonus: 1,
    reaction: 1,
    legendary: 1,
    environment: 1,
    attachedItems: 1,
    languages: 1,
    conditionImmune: 1,
    senses: 1,
    languages: 1,
    hasFluff: 1,
  })
  .sort({name: 'asc'})
  .skip((page - 1) * count)
  .limit(count);
}

module.exports = getCreatures;