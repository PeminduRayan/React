import React from 'react';
import classes from './SingleItem.module.css';
import add from '../../assets/add.png'
import reduce from '../../assets/reduce.png'

export default function SingleItem() {
  return (
    <div className={classes.outer}>
      <div className={classes.spanOuter}>
        <span className={classes.time}>15 Minutes</span>
        <div className={classes.titleHolder}>
            <span className={classes.mainTitle}>Roast Chicken</span>
            <span className={classes.subTitle}>Rs. 500.00</span>
        </div>
              <div className={classes.imgOuter}>
                  <img className={classes.reduce} src={reduce}></img>
                  <span className={classes.items}>2</span>
                  <img className={classes.add} src={add}></img>
              </div>
      </div>
    </div>
  )
}
