'use strict'
const api = require('express').Router()
const db = require('../db')
const {Student, Campus} = require('../db/models');


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

api.get('/hello', (req, res) => res.send({hello: 'world'}));

//capus requests
api.get('/campuses', (req, res, next) => {
	Campus.findAll()
		.then(campuses => res.json(campuses))
		.catch(next)
});

api.get('/campuses/:id', (req, res) => res.send(

));

api.post('/campuses', (req, res) => res.send(

));

api.put('/campuses/:id', (req, res) => res.send(

));

api.delete('/campuses/:id', (req, res) => res.send(

));


//student requests
api.get('/students', (req, res) => res.send(
		Student.findAll()
		.then(students => res.json(students))
		.catch(next)
));

api.get('/student/:id', (req, res) => res.send(

));

api.post('/students', (req, res) => res.send(

));

api.put('/students/:id', (req, res) => res.send(

));

api.delete('/students/:id', (req, res) => res.send(

));

module.exports = api
