import React from 'react';
import classes from './RecentOrdersContainer.module.css';
import OrderRecord from './RecentOrderRecord';

export default function OrderBar() {
  return (
    <div className={classes.container}>
        <div className={classes.title}>RECENT ORDERS</div>
        <OrderRecord/>
        <OrderRecord/>
        <OrderRecord/>
        <OrderRecord/>
        <OrderRecord/>
        
    </div>
  )
}
