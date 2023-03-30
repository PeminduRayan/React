import React from 'react';
import classes from './FoodTypeTile.module.css';
import breakfast_img from '../../assets/breakfast.png';
  
const FoodTypeTile = () => {
    return ( 
        <div>
            <img src= {breakfast_img}/>   
        </div>
     );
}
 
export default FoodTypeTile;