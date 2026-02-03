const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello CI/CD Pipeline\n");
});

app.get("/", (req,res) =>{
  res.send("this is demo of CID piepline working work application");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("App running on port 3000");
});


