// "use client";
const axios = require('axios');

// Función para obtener las películas populares
export const getPopularMovies = async (page) => {

  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: process.env.apiKey,
        page
      },
    });

    const popularMovies = response.data.results;

    // Crear un nuevo arreglo con las propiedades deseadas solamente
    const data = popularMovies.map((movie) => ({
      id: movie.id,
      title: movie.title,
      poster_path: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
    }));

    return data;

  } catch (error) {
    console.error(error);
  }
};