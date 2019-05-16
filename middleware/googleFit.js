const express = require("express");
const router = express.Router();
const { google } = require("googleapis");
const apis = google.getSupportedAPIs();
const fitness = google.fitness;

router.get("/", (req, res) => {
  res.status(200).json(fitness);
});

module.exports = router;
