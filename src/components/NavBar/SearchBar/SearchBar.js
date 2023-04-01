import React from 'react';
import searchIcon from '../../../assets/search.png';
import classes from './SearchBar.module.css';

function SearchBar() {
  return (
    <div className={classes.outer}>
        <img className={classes.image} src={searchIcon}></img>
        <input className={classes.input} type='text' placeholder={'Search'}></input>
    </div>
  );
}

export default SearchBar;