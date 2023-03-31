import React from 'react';
import classes from './MainLogo.module.css';
import logo from '../../assets/bear.png' ;
const MainLogo = () => {
    return ( 
        <div className={classes.outer}>
            <img className={classes.image} src={logo}/>

        </div>
     );
}
 
export default MainLogo
