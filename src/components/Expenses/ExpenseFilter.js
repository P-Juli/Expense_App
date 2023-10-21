import "./ExpenseFilter.css";

import React from 'react'

  



const ExpenseFilter = (props) => {
    
    
    //passing as props from child to parent (to Expenses.js)
    const dropDownChangeHandler = (event) => {
        
        console.log(event.target.value)
        props.onChangeFilter(event.target.value)
    }

        
    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                 <label>Filter by year</label>
                    <select defaultValue='2020' onChange={dropDownChangeHandler}> 
                    {/* // add two way bindong by adding value={props.defaultvalue} */}
                        <option value='2022'> 2022</option>
                        <option value='2021'> 2021</option>
                        <option value='2020'> 2020</option>
                        <option value='2019'> 2019</option>
                    </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;



