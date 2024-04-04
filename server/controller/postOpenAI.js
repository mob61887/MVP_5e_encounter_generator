const axios = require('axios');
require('dotenv').config();

const postOpenAI = async (req, res) => {
  try {
    const content = req.body.prompt;
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'system',
        content: `Imagine you're the Dungeon Master in a Dungeons and Dragons session. You're tasked with bringing to life \
        an encounter for your players, based on the scenario provided: ${content}. Craft your narration to span 3 to 5 paragraphs, \
        weaving a rich tapestry of background, motivation, and interaction. Begin by setting the stage, detailing the environment \
        where this encounter occurs and hinting at the history or significance of this location. Introduce the creatures involved, \
        giving special attention to the primary creature, whom you should name and characterize more fully. Explain where these \
        creatures have come from and what drives them, be it a quest for revenge, hunger for power, or something more mysterious. \
        Are they forthright in their dealings, or do they have a penchant for deception? When it comes time for any creature to speak, \
        switch to a first-person perspective to give life to their words, allowing their personality and motives to shine through the \
        dialogue. Keep the narration focused on the encounter itself, without veering into the aftermath or broader campaign implications. \
        Aim to immerse your players in the moment, providing just enough detail to spark their imaginations and invite their engagement.`,
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
