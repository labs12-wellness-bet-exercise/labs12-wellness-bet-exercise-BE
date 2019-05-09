const express = require("express");
const router = express.Router();
const db = require("../../helpers/participantsHelpers");

router.get("/", (req, res) => {
  db.find()
    .then(participants => {
      res.status(200).json(participants);
    })
    .catch(err => {
      res.status(500).json({
        error:
          "Sorry, we had a bit of trouble finding the list of participants.",
        err
      });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.findById(id)
    .then(participant => {
      res.status(200).json(participant);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "Problem finding that participant...", err });
    });
});

// get proof of buyin

router.get("/buyinproof/:id", (req, res) => {
  db.getBuyin(req.params.id)
    .then(buyin_proof => {
      res.status(200).json(buyin_proof);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error retrieving your proof of buyin",
        error
      });
    });
});

// add proof of buyin

router.post("buyinproof/:id", (req, res) => {
  db.addBuyinPhoto(req.params.id, req.body.buyin_proof)
    .then(buyin_proof => {
      res.status(200).json(buyin_proof);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error adding your proof of buyin",
        error
      });
    });
});

router.put("/buyinproof/:id/delete", (req, res) => {
  db.deleteBuyinPhoto(req.params.id)
    .then(deleted => {
      res.status(200).json({ message: "proof of buyin deleted", deleted });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
