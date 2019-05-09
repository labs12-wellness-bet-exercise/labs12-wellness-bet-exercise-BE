const express = require("express");
const router = express.Router();

const db = require("../../helpers/userGroupsHelpers");

router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.getGroupsByUser(id)
    .then(allInfo => {
      res.status(200).json(allInfo);
    })
    .catch(error => {
      res.status(500).json({ message: "could not join all info" });
    });
});

module.exports = router;
