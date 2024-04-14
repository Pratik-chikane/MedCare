const express = require("express");
require("dotenv").config();
const cors = require("cors");

const server = express();

server.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
server.use(express.json());

module.exports = server;
