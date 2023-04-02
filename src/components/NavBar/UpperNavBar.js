import React from 'react';
import classes from './UpperNavBar.module.css';
import MainLogo from './MainLogo';
import FoodTileContainer from '../FoodTypeTile/FoodTileContainer';
import SearchBar from './SearchBar/SearchBar';
export default function UpperNavBar() {
  return (
    <div className={classes.container}>
    <MainLogo/>
    <SearchBar/>
      
    </div>
  )
}
