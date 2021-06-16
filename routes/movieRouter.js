const express = require('express');
const movieRouter = express.Router();

movieRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the movies to you');
})
.post((req, res) => {
    res.end(`Will add the movie: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /movies');
})
.delete((req, res) => {
    res.end('Deleting all movies');
});

module.exports = movieRouter;