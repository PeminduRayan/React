import React,{useState} from 'react';
import classes from './FoodTypeTile.module.css';
import breakfast_img from '../../assets/breakfast.png';
  
const FoodTypeTile = (props) => {

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
            style= {{backgroundColor : ! mouseState ? props.defColor : props.onColor}}
        >
            <img className={classes.img} src= {props.source}/>   
                <div className={classes.divboth}>
                    <span className={classes.mainTitle}>{props.heading}</span>
                    <span className={classes.subTitle}>{props.items}</span>
                </div>
        </div>
     );
} 
 
export default FoodTypeTile;  