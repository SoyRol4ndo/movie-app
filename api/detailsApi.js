const axios = require('axios');

// Función para obtener los detalles de una película por su ID
export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
      params: {
        api_key: process.env.apiKey,
      },
    });

    const movieDetails = response.data;

    const { title, poster_path, genres, overview, vote_average, release_date, production_companies } = movieDetails;

    // Construir un string con el array de genere
    const genreNames = genres.map(genre => genre.name);

    // Concatenar con '#' los strings 
    const namesString = genreNames.join(' #');

    const companiesNames = production_companies.map(companie => companie.name);
    const companiesString = companiesNames.join(', ');

    const data = {
      title,
      poster_path: `https://image.tmdb.org/t/p/original${poster_path}`,
      namesString,
      overview,
      vote_average,
      release_date,
      companiesString
    };

    return data;

  } catch (error) {
    console.error(error);
  }
}

