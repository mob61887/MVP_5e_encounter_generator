const mongoose = require('mongoose');

const hpSchema = new mongoose.Schema({
  average: Number,
  formula: String
});

const nameEntriesSchema = new mongoose.Schema({
  name: String,
  entries: [String]
});

const variantSchema = new mongoose.Schema({
  type: String,
  name: String,
  entries: [String]
});

const bestiarySchema = new mongoose.Schema({
  name: String,
  source: String,
  size: [String],
  type: String,
  alignment: [String],
  ac: mongoose.Mixed,
  hp: hpSchema,
  speed: mongoose.Mixed,
  str: Number,
  dex: Number,
  con: Number,
  int: Number,
  wis: Number,
  cha: Number,
  save: mongoose.Mixed,
  skill: mongoose.Mixed,
  resist: [String],
  immune: [String],
  vulnerable: [String],
  conditionImmune: [String],
  senses: [String],
  passive: Number,
  languages: [String],
  cr: String,
  trait: [mongoose.Mixed],
  action: [nameEntriesSchema],
  environment: [String],
  attachedItems: [String],
  variant: [variantSchema],
  spellcasting: mongoose.Mixed,
  bonus: [nameEntriesSchema],
  reaction: [nameEntriesSchema],
  legendary: [nameEntriesSchema],
}, {
  collection: 'bestiary',
  suppressReservedKeysWarning: true,
});

module.exports = bestiarySchema;