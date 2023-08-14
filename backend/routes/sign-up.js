const router = require('express').Router();
let SignUp = require('../models/sign-up.model');

router.route('/').get((req, res) => {
	SignUp.find()
		.then((signups) => res.json(signups))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
	const name = req.body.name;

	const newSignUp = new SignUp({ name });

	newSignUp
		.save()
		.then(() => res.json('All signed up!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
