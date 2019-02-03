const router = require('express').Router();

const CategoryController = require('../controllers/CategoryController');

// to add id of game created to every category in categories attribute
router.post('/categories', (req, res) => {
	const category = req.body;
	CategoryController.addCategory(category, (err, category) => {
		if (err){
			console.log(`can't create a category`);
			res.json({'err': err});
		}
        else
            res.json(category);
	})
});

router.get('/categories', (req, res) => {
	CategoryController.findAllCategories({}, (err, categories) => {
		if (err){
			console.log(`can't get all categories ${err}`);
			res.json({'err': err});
		}
        else
            res.json(categories);
	})
});

router.get('/categories/:id', (req, res) => {
	const Id = req.params.id;
	CategoryController.findCategoryById({_id: Id}, (err, categories) => {
		if (err){
			console.log(`can't get category ${err}`);
			res.json({'err': err});
		}
        else
            res.json(catregory);
	})
});

router.put('/categories/:id', (req, res) => {
	const Id = req.params.id;
	const updatesPayload = req.body;
	const payload = {Id, updatesPayload};
	CategoryController.updateCategoryById(payload, (err, category) =>{
		if (err){
			console.log(`can't update category: ${err}`);
			res.json({'err': err});
		}
		else res.json(category);
	});
});

router.delete('/categories/:id', (req, res) => {
	const Id = req.params.id;
	CategoryController.deleteCategoryById(Id, (err, category) =>{
		if (err){
			console.log(`can't delete category: ${err}`);
			res.json({'err': err});
		}
		else res.json(category);
	});
});

module.exports = router;