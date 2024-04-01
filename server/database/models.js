require('dotenv').config();
const mongoose = require('mongoose');
const bestiarySchema = require('./schemas/bestiary');
const fluffSchema = require('./schemas/fluff');

const dbName = 'dnd';

const uri = `mongodb://${process.env.DATABASE_HOST_IP}:27017/${dbName}`;

mongoose.connect(uri);

const models = {
  Bestiary: mongoose.model('Bestiary', bestiarySchema),
  Fluff: mongoose.model('Fluff', fluffSchema),
};

module.exports = models;
