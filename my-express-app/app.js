const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3500 || process.env.PORT;
const path = require("path");
// app.get("/", (req, res) => res.send("can you fckn show my html page!"));

app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}!`);
});

app.get("/", function (req, res) {
  console.log("serving index.html...");
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/my-account", (req, res) => {
  res.sendFile(__dirname + "/public/my-account.html");
});
app.get("/error", (req, res) => {
  res.sendFile(__dirname + "/public/error.html");
});

app.get("/echo/hello", (req, res) => res.send("hello bubba"));
app.get("/echo/secret", (req, res) =>
  res.send("the secret is 43 because why not")
);
//use body-parser middleware to parse JSON data from requests
app.use(bodyParser.json());
app.use(express.static("public"));
app.get("/login", function (req, res) {
  console.log("serving login.html...");
  res.sendFile(path.join(__dirname, "./public/login.html"));
});
//WHY IS THERE PATH.JOIN???
app.post("login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.json({ success: false });
  } else if (email === "username@email.com" && password === "very-secret") {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.get;
