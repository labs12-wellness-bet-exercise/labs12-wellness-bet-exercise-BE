const express = require("express");
const router = express.Router();
const db = require("../../helpers/stepHelpers");

router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.findByUserID(id)
    .then(stepinfo => {
      res.status(200).json(stepinfo);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "Could not get steps associated with that ID" });
    });
});

module.exports = router;
