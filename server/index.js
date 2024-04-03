require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Path = require('path');
const getCreatures = require('./controller/getCreatures');
const postOpenAI = require('./controller/postOpenAI');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(Path.join(__dirname, '../dist')));

app.get('/creatures', (req, res) => {getCreatures(req, res)});
app.post('/openai', (req, res) => {postOpenAI(req, res)});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
