const express = require("express");
const app = express();
const port = 3000;

app.get("/trang-chu", (req, res) => {
  a = 1;
  b = 2;
  c = a + b;
  res.send("Trang chu!");
});
app.get("/chi-tiet", (req, res) => res.send("Chu tiet!"));
app.get("/danh-muc2", (req, res) => res.send("danh muc!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
