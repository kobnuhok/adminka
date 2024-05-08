const { readData, writeData } = require("../utils/data/"); // Чтение и запись данных в JSON-файл


const getAllGames = async (req, res, next) => {
  try {
    const games = await readData("utils/data/games.json");
    if (!games || !Array.isArray(games)) {

      res.status(400).send({
        status: "error",
        message: "Нет игр в базе данных. Добавьте игру."
      });
      return;
    }
    req.games = games; 
    next();
  } catch (error) {

    res.status(500).send({
      status: "error",
      message: "Ошибка чтения из базы данных: " + error.message
    });
  }
};

const checkIfTitleInArray = (req, res, next) => {
  req.isNew = !req.games.some(item => item.title === req.body.title);
  next();
};

const updateGameArray = (req, res, next) => {
  if (req.isNew) {
    const inArray = req.games.map(item => Number(item.id));
    const maximalId = inArray.length > 0 ? Math.max(...inArray) : 0;
    req.updatedObject = {
      id: maximalId + 1,
      title: req.body.title,
      image: req.body.image,
      link: req.body.link,
      description: req.body.description
    };
    req.games.push(req.updatedObject);
    next();
  } else {
    res.status(400).send({ status: "error", message: "Игра с таким именем уже есть." });
  }
};

const findGameById = async (req, res, next) => {
  const id = Number(req.params.id);
  req.game = req.games.find((item) => item.id === id);
  if (!req.game) {
    res.status(404).send({ status: "error", message: "Игра не найдена." });
    return;
  }
  next();
};

const deleteGame = async (req, res, next) => {
  const id = Number(req.params.id);
  const index = req.games.findIndex((item) => item.id === id);
  if (index === -1) {
    res.status(404).send({ status: "error", message: "Игра не найдена." });
    return;
  }
  req.games.splice(index, 1); 
  next();
};

const updateGameFile = async (req, res, next) => {
  try {
    await writeData("utils/data/games.json", req.games);
    next();
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Ошибка записи в базу данных: " + error.message
    });
  }
};

module.exports = {
  getAllGames,
  checkIfTitleInArray,
  updateGameArray,
  updateGameFile,
  findGameById,
  deleteGame
};