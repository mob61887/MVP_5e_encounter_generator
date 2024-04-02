const model = require('../model');

function getCreatures(req, res) {
  const {key, val, page, count} = req.query;
  model.getCreatures(key, val, page, count)
    .then((creatures) => {
      res.status(200).send(creatures);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

module.exports = getCreatures;