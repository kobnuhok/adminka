// Здесь функциональность точки входа
const express = require('express');
const fs = require('fs');

const PORT = 3000;
const app = express();


app.get("/",(req, res) => {
  fs.readFile("./public/index.html", "utf-8").then (data => {
    res.header("Content-Type", "text/html");
    res.send(data);
  })
  res.send("Hello World!");
})
// // Здесь данные
// const games = [
//   { 
//     id: 1,
//       title: "Crystal Keeper",
//       description: "Управляй боевым дроном, чтобы любой ценой защитить кристалл от враждебных космо-слизней."
//   },
//   { 
//     id: 2,
//     title: "Dangeons'n'Caves. Prologue", 
//     description: "Безымянный герой исследует пещеры и подземелья, чтобы найти больше информации о себе."
//   },
// ];

// // Здесь роутинг
// app.get('/games/:id', (req, res) => {
//   if (!games[req.params.id]) {
//     res.send(`Такой игры не существует`);

//     // Не забудем выйти из функции
//     return;
//   }

//   const { title, description } = users[req.params.id];
  
//   res.send(`Новое издание игры - ${name}, откроет для вас новый мир: ${description}`);
// });

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});