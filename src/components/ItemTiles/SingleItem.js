import React from 'react';
import classes from './SingleItem.module.css';
import add from '../../assets/add.png'
import reduce from '../../assets/reduce.png'

export default function SingleItem(props) {
  return (
      <div className={classes.outer}>
        <div className={classes.spanOuter}>
          <span className={classes.time}>{props.time}</span>
          <div className={classes.titleHolder}>
              <span className={classes.mainTitle}>{props.mainTitle}</span>
              <span className={classes.subTitle}>{props.subTitle}</span>
          </div>
                <div className={classes.imgOuter}>
                    <img className={classes.reduce} src={reduce}></img>
                    <span className={classes.items}>0</span>
                    <img className={classes.add} src={add}></img>
                </div>
        </div>
      </div>
  )
}
