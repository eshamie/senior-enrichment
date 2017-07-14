'use strict'
const api = require('express').Router()
const db = require('../db')
const {Student, Campus} = require('../db/models');


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

api.get('/hello', (req, res) => res.send({hello: 'world'}));

/* ----------- CAMPUS REQUESTS ---------- */

api.get('/campuses', (req, res, next) => {
	Campus.findAll()
		.then(campuses => res.json(campuses))
		.catch(next);
});

api.get('/campuses/:id', (req, res, next) => {
	const campusId = req.params.id;

	Student.findAll({ where: { campusId }} )
		.then(students => res.json(students))
		.catch(next);
});

api.post('/campuses', (req, res, next) => {
	Campus.create(req.body)
		.then(campus => res.json(campus))
		.catch(next);
});

api.put('/campuses/:id', (req, res, next) => {
	const id = req.params.id;
	Campus.update( req.body, {where: { id }})
		.then(campus => res.json(campus))
		.catch(next);
});

api.delete('/campuses/:id', (req, res, next) => {
	const id = Number(req.params.id);
	Campus.destroy({where: {id}})
		.then(() => res.status(204).end())
    .catch(next);
});

/* ----------- STUDENT REQUESTS ---------- */

api.get('/students', (req, res, next) => {
	Student.findAll()
		.then(students => res.json(students))
		.catch(next);
});

api.get('/students/:id', (req, res, next) => {
	const id = req.params.id;

	Student.findOne( {where: { id }} )
		.then(student => res.json(student))
		.catch(next);
});

api.post('/students', (req, res, next) => {
	console.log(req.body)
	Student.create(req.body)
		.then(student => res.json(student))
		.catch(next);
});

api.put('/students/:id', (req, res, next) => {
	const id = Number(req.params.id);
	Student.update(req.body, {where: { id }})
		.then(student => res.json(student))
		.catch(next);
});

api.delete('/students/:id', (req, res, next) => {
	const id = req.params.id;

	Student.destroy({where: {id}})
		.then(() => res.status(204).end())
    .catch(next);
});


module.exports = api;


// .update({ attributes_to_update}, {where: {options}})
// .destroy({where:{} })
