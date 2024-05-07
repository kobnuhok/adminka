const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const PORT = 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, 'public')))

app.get("/",(req, res) => {
  fs.readFile("./public/index.html", "utf-8").then (data => {
    res.header("Content-Type", "text/html");
    res.send(data);
  })
})











