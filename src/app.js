const express = require("express");
const Api = require("./api/index");
const app = express();
const port = 3000;
app.use(express.json());
app.use("/api", Api);
app.get("/", (req, res) => {
  res.send("hello express");
});
app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
});
