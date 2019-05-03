const express = require('express');
const router = express.Router();
const db = require('../../helpers/participantsHelpers');

router.get('/', (req, res) => {
  db.find()
    .then( participants => {
      res
        .status(200)
        .json(participants);
    })
    .catch(err => {
      res
        .status(500)
        .json({
          error: "Sorry, we had a bit of trouble finding the list of participants.",
          err
        })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.findById(id)
    .then(participant => {
      res
        .status(200)
        .json(participant);
    })
    .catch(err => {
      res 
        .status(500)
        .json({ error: "Problem finding that participant...", err })
    })
});

module.exports = router;