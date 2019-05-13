const express = require("express");
const router = express.Router();
const db = require("../../helpers/userHelpers");

router.get("/", (req, res) => {
  db.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({
        error: "Can't return the list of users!",
        err
      });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.findById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ error: "Problem finding that user...", err });
    });
});

router.post("/", async (req, res) => {
  db.insert(req.body)
    .then(user => {
      res.status(200).json({
        message: `user was successfully added to database.`
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
}); // will add google_uuid and photo from google as profile photo to post request on front end.

module.exports = router;
