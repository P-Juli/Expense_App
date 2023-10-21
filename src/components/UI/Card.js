import React from 'react';

import './Card.css';

const Card = (props) => { // receiving from ExpenseItem.js 
  const classes = 'card ' + props.className;
  
  return (
  <div className={classes}>{props.children}</div>
  )
};

export default Card;

//The className prop 'expense-item' is passed to the Card component automatically. 
  //   .card{....} will apply css styling to the div above as it contains the name card. 
