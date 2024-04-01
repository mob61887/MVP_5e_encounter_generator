require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Path = require('path');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(Path.join(__dirname, '../dist')));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
