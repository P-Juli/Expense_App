import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing,setIsEditing]=useState(false)
  
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
   
  //  saveExpenseDataHandler function is executed when we submit the form so, after we submit the form we set the setIsEditing to false
    setIsEditing(false)
  };
  
  
  const startEditingHandler = () => {
    setIsEditing(true);
  }
  const stopEditingHandler = () => {
    setIsEditing(false);
  }
  

  return (
    <div className='new-expense'>
      {/* we are trying to hide this form from user until they click the Add button */}
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense </button>}
      {/* !isEditing is true so the button is shown . when we click the button isEditing is set to true. */}
      {isEditing && <ExpenseForm 
      onSaveExpenseData={saveExpenseDataHandler} 
      stopIt={stopEditingHandler}
      />}
    </div>
  );
};

export default NewExpense;