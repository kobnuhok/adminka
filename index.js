const express = require('express');

const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games');


const path = require('path');

const PORT = 3000;
const app = express();

app.use(mainRoute, 
  gamesRouter,
  express.static(path.join(__dirname, 'public'))
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});



// app.get("/",(req, res) => {
//   fs.readFile("./public/index.html", "utf-8").then (data => {
//     res.header("Content-Type", "text/html");
//     res.send(data);
//   })
// })







