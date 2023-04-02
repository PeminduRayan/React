import React from 'react';
import classes from './MainLogo.module.css';
import logo from '../../assets/bear.png' ;
const MainLogo = () => {
    return ( 
        <div className={classes.outer}>
            <img className={classes.image} src={logo}/>
            <h1 className={classes.h1}>Nacho's</h1>
        </div>
     );
}
 
export default MainLogo
