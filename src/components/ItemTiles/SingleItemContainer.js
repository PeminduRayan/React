import React from 'react';
import SingleItem from './SingleItem';
import classes from './SingleItemContainer.module.css';

export default function SingleItemContainer() {
  return (
        <div className={classes.allOuter}>    
            <div className={classes.container}>
                <SingleItem/>
                <SingleItem/>
                <SingleItem/>
                <SingleItem/>
                <SingleItem/>
                <SingleItem/>
                <SingleItem/>
                <SingleItem/>
                <SingleItem/>
              
            </div>
        </div>
  )
}
