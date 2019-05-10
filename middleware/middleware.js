const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const rfs = require("rotating-file-stream");
const path = require("path");
const dir = "./middleware";
const users = require("./routes/usersRouter");
const groups = require("./routes/groupsRouter");
const participants = require("./routes/participantsRouter");
const usergroups = require("./routes/userGroupsRouter");
const joinCodeRouter = require("./routes/joinCodeRouter");

module.exports = server => {
  server.use(express.json());
  server.use(cors());
  server.use(morgan("combined"));
  server.use("/api/users", users);
  server.use("/api/groups", groups);
  server.use("/api/participants", participants);
  server.use("/api/joincodes", joinCodeRouter);
  server.use("/api/usergroups", usergroups);
};
