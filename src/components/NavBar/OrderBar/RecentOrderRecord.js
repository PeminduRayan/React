import React from 'react';
import classes from './RecentOrderRecord.module.css';

export default function OrderRecord() {
  return (
    <div className={classes.recordContainer}>
        <span className={classes.orderID}>#O-1232</span>
        <span className={classes.status}>IN-PROGRESS</span>
    </div>
  )
}
