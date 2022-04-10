"use strict";

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let time = new Date();
  setTimeout(() => {
    let currTime = new Date();
    res.send(
      ` {
        Initated Request: ${time},
        End Request: ${currTime},
        Response Time:  ${currTime - time}ms
        }`
    );
  }, 5000);
});

app.listen(3000);
