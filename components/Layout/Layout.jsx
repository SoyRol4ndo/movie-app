import React from 'react';
import { Navbar, NavbarBrand, Tooltip } from "@nextui-org/react";

import '@/components/Layout/layout.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelect } from '@/features/movie/movieSlice';

export const Layout = () => {

  const dispatch = useDispatch();
  const select = useSelector(state => state.movie.select);

  const handleCLick = () => {
    dispatch(clearSelect());
  };
  return (
    <Tooltip
      content={select && "BACK"}>
      <Navbar
        onClick={handleCLick}
        className={`layout ${select && 'volver'}`}
        isBordered isBlurred={false} >
        <NavbarBrand className='justify-center'>
          <p className="font-bold text-3xl"
          >{select ? ('MOVIE-DETAILS') : ('MOVIES-FAVORITES')}
          </p>
        </NavbarBrand>
      </Navbar>
    </Tooltip>
  );
};
