const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const rfs = require('rotating-file-stream');
const path = require('path');

const accessLogStream = rfs('access.log', {
  interval: '1d', // rotate daily
  path: path.join('../logs', 'log')
})

module.exports = server => {
  server.use(express.json());
  server.use(cors());
  server.use(morgan('combined', {
    stream: accessLogStream
  }));
}