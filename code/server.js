'use strict';
const express = require('express');

class Movie {
  constructor (comments, year, director, genrer, rating, id, title) {
    this.comments = comments
    this.year = year
    this.director = director
    this.genrer = genrer
    this.rating = rating
    this.id = id
    this.title = title
  }
};

const result = [new Movie([],2008, "Sylvester Stallone", "Action", 7, 2, "John Rambo"),
                new Movie([],2008, "Sylvester Stallone", "Action", 7, 52, "John Rambo"),
                new Movie([],1999, "Syl", "Sci-Fi", 9, 1, "The Matrix"),
                new Movie([],1999, "Syl", "Sci-Fi", 9, 51, "The Matrix"),
                new Movie([],1997, "Paul Verhoeven", "Sci-Fi", 7, 3, "Starship Troopers"),
                new Movie([],1997, "Paul Verhoeven", "Sci-Fi", 7, 53, "Starship Troopers"),
                new Movie([],1994, "Roland Emmerich", "Sci-Fi", 7, 4, "Stargate"),
                new Movie([],1994, "Roland Emmerich", "Sci-Fi", 7, 54, "Stargate"),
              ];


// Constants
const PORT = process.env.PORT || 9090;
const LANG = process.env.LANG || "ENGLISH";
const HOST = '0.0.0.0';

const app = express();
app.get('/movie-api/api/movies', (req, res) => {
  res.json(result);
});

app.get('/movie-api/api/language', (req, res) => {
  res.json(`${LANG}`);
});

app.get('/movie-api/api//movies/:id', (req,res) => {
  res.json('/movies/' + req.params.id);
})

app.get('/movie-api/api//movies/genres', (req, res) => {
  res.json('/movies/genres');
});

app.post('/movie-api/api//movies', (req, res) => {
  res.json('/movies');
});

app.put('/movie-api/api//movies/:id', (req, res) => {
  res.send('/movies/' + req.params.id);
});

app.delete('/movie-api/api//movies/:id', (req, res) => {
  res.json('/movies/' + req.params.id);
});

app.get('/movie-api/api//movies/count', (req, res) => {
  res.json('/movies/count');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


