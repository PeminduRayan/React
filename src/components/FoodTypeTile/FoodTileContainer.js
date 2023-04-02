import React from 'react';
import classes from './FoodTileContainer.module.css'
import FoodTypeTile from './FoodTypeTile';
import lunch from '../../assets/lunch.png'; 
import breakfast from '../../assets/breakfast.png'; 
import desserts from '../../assets/desserts.png'; 
import soup from '../../assets/soup.png'; 
import drinks from '../../assets/drinks.png'; 
import dinner from '../../assets/dinner.png'; 


const FoodTileContainer = () => {
    return (  
        <div className={classes.container}>
           
            <FoodTypeTile source = {breakfast} heading = 'Breakfast' items = '13 items' defColor = "#90e0ef" onColor = "#48cae4"/> 
            <FoodTypeTile source = {dinner} heading = "Dinner" items = '10 items' defColor = '#e7c6ff' onColor ='#c8b6ff'/> 
            <FoodTypeTile source= {lunch} heading = "Lunch" items = '14 items' defColor ='#ffc300' onColor = '#ffd60a'/> 
            <FoodTypeTile source= {drinks} heading = "Drinks" items = '12 items' defColor ='#ffb3c1' onColor= '#ff758f' /> 
            <FoodTypeTile source= {desserts} heading = "Desserts" items = '9 items' defColor = '#aacc00' onColor = '#80b918'/> 
            <FoodTypeTile source= {soup} heading = "Soup" items = '12 items' defColor='#979dac' onColor='#5c677d'/> 
            
        </div>
    );
}
 
export default FoodTileContainer;