const express = require("fix-esm").require("express");
const bodyParser = require("fix-esm").require("body-parser");
const add = require("./numberCheck.js");
const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Route to get input from User
app.post("/getNumbers", (req, res, next) => {
  const { data } = req.body;
  if (data === "") {
    return res.status(200).json({ output: 0 });
  }
  const { output, status, message } = add(data);

  res.status(status).json({ output: output, message: message });
});

module.exports = app;
