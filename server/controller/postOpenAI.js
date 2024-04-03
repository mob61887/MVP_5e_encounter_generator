const axios = require('axios');
require('dotenv').config();

const postOpenAI = async (req, res) => {
  try {
    const content = req.body.prompt;
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'system',
        content: `You're a Dungeon Master running a game of Dungeons and Dragons for your friends. \
          Narrate an encounter based on the following information: \
          "${content}". \
          Your response should be 3 to 5 paragraphs. Include where the creatures \
          are from and their motivation. The creatures may be honest or deceitful. When any of the \
          creatures speak, deliver the narration in a first person perspective.`,
      }],
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    });
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = postOpenAI;
