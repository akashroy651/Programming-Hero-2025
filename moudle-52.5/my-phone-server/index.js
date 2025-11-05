const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("my phones server Iam Akash roy");
});

app.listen(port, () => {
  console.log(`My phone server is running  on post ${port}`);
});
