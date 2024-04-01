const mongoose = require('mongoose');

const typeEntriesChildSchema = new mongoose.Schema({
  type: String,
  entries: [String],
});

const typeEntriesParentSchema = new mongoose.Schema({
  type: String,
  entries: [typeEntriesChildSchema],
});

const fluffSchema = new mongoose.Schema({
  name: String,
  source: String,
  entries: [typeEntriesParentSchema],
},
{
  collection: 'fluff',
  suppressReservedKeysWarning: true,
});

module.exports = fluffSchema;