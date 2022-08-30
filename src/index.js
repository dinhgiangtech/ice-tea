import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import api from "./routers/api.js";

// app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "alive" });
});
app.use("/api", api);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
