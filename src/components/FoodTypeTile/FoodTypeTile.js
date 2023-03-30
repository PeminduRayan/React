import React from 'react';
import classes from './FoodTypeTile.module.css';
import breakfast_img from '../../assets/breakfast.png';
  
const FoodTypeTile = () => {
    return ( 
        <div className={classes.outer} >
            <img className={classes.img} src= {breakfast_img}/>   
                <div className={classes.divboth}>
                    <span className={classes.mainTitle}>Breakfast</span>
                    <span className={classes.subTitle}>13 items</span>
                </div>
        </div>
     );
}
 
export default FoodTypeTile;