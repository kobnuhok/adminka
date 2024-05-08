    const gamesRouter = require("express").Router(); 

    const { getAllGames, 
        checkIfTitleInArray, 
        updateGameArray, 
        updateGameFile, 
        findGameById, 
        deleteGame } = require("../middlewares/games");
    const{ sendAllGames, sendUpdatedGames } = require("../controllers/games");
     
     gamesRouter.get("/games", getAllGames, sendAllGames)
     gamesRouter.delete("/games/:id", getAllGames, findGameById, deleteGame, updateGameFile, sendUpdatedGames);
     gamesRouter.post("/games", 
     getAllGames, 
     checkIfTitleInArray, 
     updateGameArray, 
     updateGameFile, 
     sendUpdatedGames);

     module.exports = gamesRouter;
     