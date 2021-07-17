// in sublime
var express = require("express");
const Api = require("./src/api/index");
var port = process.env.PORT || 3000;
var app = express();

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded()); //

app.use(express.json());
app.use("/api", Api);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to express app"
  });
});
app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
});
