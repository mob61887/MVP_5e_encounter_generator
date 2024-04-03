const {Fluff} = require('../database/models');

async function getFluff(searchKey, searchValue) {
  const queryCondition = searchKey && searchValue ? { [searchKey]: searchValue } : {};
  return Fluff.findOne(queryCondition, {});
}

module.exports = getFluff;
