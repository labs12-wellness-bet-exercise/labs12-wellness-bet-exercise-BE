const express = require("express");
// const cors = require("cors");
// const helmet = require("helmet");
const middleware = require('../middleware/middleware');
const server = express();

middleware(server)

// server.use(helmet());
// server.use(cors());
// server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json({ message: "hello, it's me. your sanity!!" });
});

module.exports = server;
