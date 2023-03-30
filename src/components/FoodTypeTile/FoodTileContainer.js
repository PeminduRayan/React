import React from 'react';
import classes from './FoodTileContainer.module.css'
import FoodTypeTile from './FoodTypeTile';

const FoodTileContainer = () => {
    return (  
        <div className={classes.container}>
            <FoodTypeTile heading = 'Breakfast'/> 
            <FoodTypeTile heading = "Dinner"/> 
            <FoodTypeTile heading = "Lunch"/> 
            <FoodTypeTile heading = "Drinks"/> 
            <FoodTypeTile heading = "Desserts"/> 
            <FoodTypeTile heading = "Soup"/> 
            
        </div>
    );
}
 
export default FoodTileContainer;