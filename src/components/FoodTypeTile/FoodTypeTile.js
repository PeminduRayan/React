import React,{useState} from 'react';
import classes from './FoodTypeTile.module.css';
import breakfast_img from '../../assets/breakfast.png';
  
const FoodTypeTile = () => {

    const [mouseState,setMouseEntered] = useState(false);

    const mouseEnterHandler =()=> {
        setMouseEntered(true);
    }
    const mouseLeaveHandler =()=> {
        setMouseEntered(false);
    }

    return ( 
        <div 
            className={classes.outer} 
            onMouseEnter = {mouseEnterHandler}
            onMouseLeave = {mouseLeaveHandler}
            style= {{backgroundColor : ! mouseState ? '#90e0ef' : "#48cae4"}}
        >
            <img className={classes.img} src= {breakfast_img}/>   
                <div className={classes.divboth}>
                    <span className={classes.mainTitle}>Breakfast</span>
                    <span className={classes.subTitle}>13 items</span>
                </div>
        </div>
     );
} 
 
export default FoodTypeTile;  