require('dotenv').config();
const express = require('express');
const axios = require('axios');
const moment = require('moment');
const { asyncHandler } = require('./src/utils');

const app = express();
const port = process.env.PORT || 5000;

app.get(
  '/api/v1/movies',
  asyncHandler(async (req, res, next) => {
    const { data } = await axios.get(
      `${process.env.TMDB_API_URL}/discover/movie?api_key=${
        process.env.TMDB_API_KEY
      }`
    );

    const movies = data.results.map(movie => {
      const { id, title, overview, poster_path, release_date } = movie;
      const baseURL = 'https://image.tmdb.org/t/p';

      return {
        id,
        title,
        overview,
        release_date,
        poster: `${baseURL}/w300/${poster_path}`
      };
    });

    return res.send(movies);
  })
);

app.listen(port, () => console.log(`App listening on port ${port}!`));
