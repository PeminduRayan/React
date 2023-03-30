import React from 'react';
import classes from './FoodTileContainer.module.css'
import FoodTypeTile from './FoodTypeTile';

const FoodTileContainer = () => {
    return (  
        <div className={classes.container}>
            <FoodTypeTile/> 
            <FoodTypeTile/> 
            <FoodTypeTile/> 
            <FoodTypeTile/> 
            <FoodTypeTile/> 
            <FoodTypeTile/> 
        </div>
    );
}
 
export default FoodTileContainer;