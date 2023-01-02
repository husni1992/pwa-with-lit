import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
