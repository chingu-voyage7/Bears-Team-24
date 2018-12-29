const router = require('express').Router();

const UserController = require('../controllers/UserController');

router.post('/users', (req, res) => {
	const user = req.body;
	UserController.addUser(user, (err, user) => {
		if (err){
			console.log(`can't create user`);
			res.json({'err': err});
		}
		else { res.json(user); }
	})
});

router.get('/users', (req, res) => {
	UserController.findUsers({}, (err, users) =>{
		if (err){
			console.log(`can't get users: ${err}`);
			res.json({'err': err});
		}
		else res.json(users);
	});
});

router.get('/users/:id', (req, res) => {
	const Id = req.params.id;
	UserController.findUserById({_id: Id}, (err, user) =>{
		if (err){
			console.log(`can't get user: ${err}`);
			res.json({'err': err});
		}
		else res.json(user);
	});
});

router.put('/users/:id', (req, res) => {
	const Id = req.params.id;
	const updatesPayload = req.body;
	const payload = {Id, updatesPayload};
	UserController.updateUserById(payload, (err, user) =>{
		if (err){
			console.log(`can't update user: ${err}`);
			res.json({'err': err});
		}
		else res.json(user);
	});
});

router.delete('/users/:id', (req, res) => {
	const Id = req.params.id;
	UserController.deleteUserById(Id, (err, user) =>{
		if (err){
			console.log(`can't delete user: ${err}`);
			res.json({'err': err});
		}
		else res.json(user);
	});
});

module.exports = router;