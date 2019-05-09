const express = require("express");
const router = express.Router();
const db = require("../../helpers/groupHelpers");

router.get("/", (req, res) => {
  db.find()
    .then(groups => {
      res.status(200).json(groups);
    })
    .catch(err => {
      res.status(500).json({
        error: "Something went wrong. We can't show you the list of groups.",
        err
      });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.findById(id)
    .then(group => {
      res.status(200).json(group);
    })
    .catch(err => {
      res.status(500).json({ error: "Problem finding that group...", err });
    });
});

router.get("/:id/participants", (req, res) => {
  const id = req.params.id;
  db.getGroupParticipants(id)
    .then(participants => {
      if (participants.length == 0) {
        res.status(404).json({
          message:
            "That group ID number isn't associated with any participants. \nAre you sure that group exists?"
        });
      }
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json({
        error: "Error finding participants associated with that group ID...",
        error
      });
    });
});

// GROUP PHOTOS -- photo link for now

// get group photo
router.get("/groupphoto/:id", (req, res) => {
  db.getGroupPhoto(req.params.id)
    .then(group_photo => {
      res.status(200).json(group_photo);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "There was an error getting your group photo", error });
    });
});

// change group photo

router.put("/groupphoto/:id", (req, res) => {
  db.addGroupPhoto(req.params.id, req.body.group_photo)
    .then(() => {
      res.status(200).json({ message: "photo successfully changed" });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// change group photo back to default

router.put("/groupphoto/:id/default", (req, res) => {
  db.toDefaultGroupPhoto(req.params.id)
    .then(() => {
      res.status(200).json({ message: "group photo changed back to default" });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// delete group photo -- needs group id  -- You can't actually use a true delete on this or it will delete the whole group because of how the tables are structured, so I did it as an PUT request and made it so it would update the photo to "group photo does not exist"

router.put("/groupphoto/:id/delete", (req, res) => {
  db.deleteGroupPhoto(req.params.id)
    .then(deleted => {
      res.status(200).json({ message: "photo deleted", deleted });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

//get admin message
router.get("/adminmessage/:id", (req, res) => {
  db.getAdminMessage(req.params.id)
    .then(group_message => {
      res.status(200).json(group_message);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error getting your admin message",
        error
      });
    });
});

//update admin message
router.put("/adminmessage/:id", (req, res) => {
  db.updateAdminMessage(req.params.id, req.body.group_message)
    .then(() => {
      res.status(200).json({ message: "admin message successfully changed" });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

//change admin message to default

router.put("/adminmessage/:id/default", (req, res) => {
  db.toDefaultAdminMessage(req.params.id)
    .then(() => {
      res
        .status(200)
        .json({ message: "admin message changed back to default" });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

//change admin message to admin message does not exist
router.put("/adminmessage/:id/delete", (req, res) => {
  db.deleteAdminMessage(req.params.id)
    .then(deleted => {
      res.status(200).json({ message: "admin message deleted", deleted });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
