const express = require("express");
const middleware = require('../middleware/middleware');
const server = express();

middleware(server)

server.get("/", async (req, res) => {
  res.status(200).json({ message: "hello, it's me. your sanity!!" });
});

module.exports = server;
