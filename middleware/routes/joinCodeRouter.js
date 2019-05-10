const express = require("express");
const router = express.Router();
const db = require("../../helpers/groupHelpers"); // this Routers file uses the Groups helpers

// GET GROUP JOIN CODES

// endpoint: /api/joincodes/
router.get("/", (req, res) => {
  db.getJoinCodes()
    .then(join_codes => {
      res.status(200).json(join_codes);
    })
    .catch(error => res.status(500).json(error));
});

module.exports = router;
