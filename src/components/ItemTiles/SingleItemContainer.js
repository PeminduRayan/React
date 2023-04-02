import React from 'react';
import SingleItem from './SingleItem';
import classes from './SingleItemContainer.module.css';

export default function SingleItemContainer() {
  return (
        <div className={classes.allOuter}>    
            <div className={classes.container}>
                <SingleItem time= '15 Minutes' mainTitle='Roast Chicken' subTitle='Rs.500.00' />
                <SingleItem time= '10 Minutes' mainTitle='Roast Chicken' subTitle='Rs.300.00' />
                <SingleItem time= '12 Minutes' mainTitle='Roast Chicken' subTitle='Rs.1500.00' />
                <SingleItem time= '20 Minutes' mainTitle='Roast Chicken' subTitle='Rs.800.00' />
                <SingleItem time= '5 Minutes' mainTitle='Roast Chicken' subTitle='Rs.400.00' />
                <SingleItem time= '5 Minutes' mainTitle='Roast Chicken' subTitle='Rs.200.00' />
                <SingleItem time= '10 Minutes' mainTitle='Roast Chicken' subTitle='Rs.100.00' />
                <SingleItem time= '15 Minutes' mainTitle='Roast Chicken' subTitle='Rs.1500.00' />
                <SingleItem time= '25 Minutes' mainTitle='Roast Chicken' subTitle='Rs.550.00' />
            </div>
        </div>
  )
}
