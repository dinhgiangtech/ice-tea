const express = require("express");
const api = require("./routers/api.js");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "alive" });
});
app.use("/api", api);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
