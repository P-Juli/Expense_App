import React, { useState } from 'react';
import ExpensesList from './ExpensesList';

// import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {

 const[filteredYear,setFilteredYear]=useState('2020');
    //lifting state up ie passing data from child to parent. Expenses is the parent ExpenseFilter is the child.
    const filterChangeHandler = (selectedYear) => {
      // console.log('we are inside Expenses.js')
      // console.log(selectedYear)
      // console.log('Expenses.js up to here')
      setFilteredYear(selectedYear);
    }
    //4 september
    // const filteredExpenses=props.items.filter(expenses)

    const filteredExpenses = props.items.filter((expense) => {
      if (expense.date.getFullYear().toString() === filteredYear) {
        return true;
      } else {
        return false;
      }
    });
    // also can be written as.
    // const filteredExpenses = props.items.filter((expense) => {
    //   const expenseYear = expense.date.getFullYear(); // Extract the year
    //   return expenseYear.toString() === filteredYear;
    // });
    




// moving these to the ExpenseFilter component


//     // using variables to store jsx elements
// let expenseContent= <p className='hello'> No Data Found for {filteredYear}</p>
// if (filteredExpenses.length > 0){
// // override the expenseContent
// expenseContent=filteredExpenses.map((expense,index) => {return(
//   <ExpenseItem 
//   key={expense.id}
//     title={expense.title}
//     amount={expense.amount}
//     date={expense.date}
//   />
// )}
// )
// }
// up to here



  return (
   
    <div>
 
    <Card className="expenses"> 
    
   
        {/* // passing data from child to parent from ExpenseFIlter    to expenses  */}
        <ExpenseFilter 
          onChangeFilter={filterChangeHandler} 
        /> 

{/* dynamically rendering the array */}
{/* key is important for react to know which item is the new one */}

{/* check the length of the array and use condition ? true : false */}



{/*  instead of doing this you can use variables to store the jsx elements */}

{/* { filteredExpenses.length === 0 ? (<p className='hello'> No Data Found</p>) : 
( filteredExpenses.map((expense,index) => {return(
  <ExpenseItem 
  key={expense.id}
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
  />
)}
))
} */}




{/* since we used expenseContent to store the jsx elements we can easily only output the variable */}
{/* {expenseContent} */}
{/* rendering the data from the objects */}

{/* calling ExpenseList component here */}
<ExpensesList 
items={filteredExpenses}
nodatayear={filteredYear} 
/>



{/*
      map and filter together
      {props.items
  .filter((expense) => expense.date.getFullYear().toString() === filteredYear)
  .map((expense, index) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ))}
   */}
   
    </Card>

    </div>
  );
}

export default Expenses;


