const express = require("express");
const router = express.Router();
const db = require("../../helpers/participantsHelpers");
const multer = require ('multer');

//const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, './data/uploads');
  },
  filename: function (req, file, cb){
    cb (null, new Date().toISOString() + file.originalname);
  }
})

const upload = multer({storage: storage});


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

router.post("/", async (req, res) => {
  db.insert(req.body)
    .then(group_participant => res.status(200).json(group_participant))
    .catch(error => {
      res.status(500).json({ message: "There was an error", error });
    });
});
// get proof of buyin

router.get("/buyinproof/:id", (req, res) => {
  db.getBuyinPhoto(req.params.id)
    .then(buyin_proof => {
      res.status(200).json(buyin_proof);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error retrieving your proof of buyin"
      });
    });
});

// add proof of buyin
//Needs to be a put. The field already exists on a participant, it's just null

router.put("/buyinproof/:id", upload.single('buyin_proof'), (req, res) => {
  console.log(req.file);
  db.addPaymentPhoto(req.params.id, req.body.buyin_proof)
  .then(() => {
    res.status(200).json({ message: "Photo Successfully Uploaded" });
  })
  .catch(error => {
    res.status(500).json({message: 'nooooo'});
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
