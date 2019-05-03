const express = require('express');
const router = express.Router();
const db = require('../../helpers/userHelpers');

router.get('/', (req, res) => {
  db.find()
    .then( users => {
      res
        .status(200)
        .json(users);
    })
    .catch(err => {
      res
        .status(500)
        .json({
          error: "Can't return the list of users!",
          err
        })
    })
})

module.exports = router;