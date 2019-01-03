
const router = require('express').Router();
const GameController = require('../controllers/GameController.js');


//get all games
router.get('/games', (req, res) => {
	GameController.getAllGames({}, (err, games) => {
		if (err){
			res.json({'err': err});
		}
		else { res.json(games); }
	});
});

//get game by id
router.get('/games/:id', (req, res) => {
	const id = req.params.id;
	GameController.getGameById({_id: id}, (err, game) => {
		if (err)
			res.json({'err': err});
		else
			res.json(game);
	});
});

//add a game
router.post('/games', (req, res) => {
	const game = req.body;
	GameController.addGame(game, (err, game) => {
		if (err)
			res.json({'err':err});
		else
			res.json(game);
	});
});

//delete a game
router.delete('/games/:id', (req, res)=>{
	const id = req.params.id;
	GameController.deleteGameById(id, (err, game) => {
		if (err)
			res.json('err':err);
		else
			res.json(game);
	});
});

//update game
router.put('games/:id', (req, res)=>{
	const id = req.params.id;
	const payload = req.body;
	GameController.updateGameById({id, body}, (err, game) => {
		if (err)
			res.json('err':err);
		else
			res.json(game);
	});
});

//get games by category
router.get('/games/:category', (mreq,res) =>{
	const categ = req.params.category.
	GameController.getByCategory(categ, (err, game) =>{
		if (err)
			res.json('err':err);
		else
			res.json(game);
	})
});