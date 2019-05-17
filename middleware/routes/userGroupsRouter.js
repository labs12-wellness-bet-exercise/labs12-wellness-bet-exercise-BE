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

// this returns all user_id data for all members of a group by group_id
router.get("/members/:group_id", (req, res) => {
  db.getUsersByMembership(req.params.group_id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json({
        message: "Sorry, Could not retrieve the group members"
      });
    });
});

module.exports = router;
