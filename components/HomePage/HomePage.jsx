"use client";
import { useSelector } from "react-redux";

import { Layout } from "../Layout/Layout";
import { MovieList } from "../MovieList/MovieList";
import { Paginacion } from '@/components/Pagination/Paginacion';
import { MovieDetails } from '@/components/MovieDetails/MovieDetails';

import '@/components/HomePage/homepage.css';

export const HomePage = () => {

  const select = useSelector(state => state.movie.select);

  return (
    <>
      <Layout />
      <div>
        <div className="container">
          {
            (!select) ? (<MovieList />) : (<MovieDetails />)
          }
        </div>
        {
          (!select) &&
          <div className="flex justify-center">
            <Paginacion />
          </div>
        }
      </div>

    </>
  );
};
