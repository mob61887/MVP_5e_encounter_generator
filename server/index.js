const Path = require('path');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const getCreatures = require('./controller/getCreatures');
const postOpenAI = require('./controller/postOpenAI');
const createRateLimiter = require('./middleware/rateLimiterMiddleware');
const corsRestricted = require('./middleware/corsRestricted');

const openaiRateLimiter = createRateLimiter(5, 60000, 'Whoa, slow down buddy, that\'s too many requests! Please wait a minute then try again. Thanks for your patience.');

const app = express();

app.set('trust proxy', true);
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/5e', express.static(Path.join(__dirname, '../dist')));
app.use(express.static(Path.join(__dirname, '../dist')));

app.get('/creatures', (req, res) => { getCreatures(req, res); });
app.post('/openai', corsRestricted, openaiRateLimiter, (req, res) => { postOpenAI(req, res); });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
