import './ExpenseForm.css'
import React from 'react'
const ExpenseForm=(props)=>{
    const [enteredTitle, setEnteredTitle]=React.useState('');
    const [enteredAmount, setEnteredAmount]=React.useState('');
    const [enteredDate, setEnteredDate]=React.useState('');
    // 1 we can also  use single state instead of 3
    //2 userInput is current data
    //3 react scedules these state updates and does not perform the instantly
    // const [userInput, setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''

    // })
    // console.log("userINPUT",userInput)
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value)
        // in point 3 since since react schedules these updates and does not perform it instantly
        //hence if out next state depends on previous state then thi sbelow approch may fail as it can give us outdated state

        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })

        //rather we should use

        // setUserInput((previousState)=>{

        //     return {...previousState,
        //     enteredTitle:event.target.value
        //     }
        // })
        console.log(event.target.value)
        console.log('TitleChanged')
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // })
        console.log(event.target.value)
        console.log('DATE CHANGED')
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value
        // })
        console.log(event.target.value)
        console.log('amountChanged')
    }

    const submitHandler=(event)=>{
        //by default page reloads and we want to avoid that on submit
        //to prevent we can disable it and handle it ourselve
        event.preventDefault()
        const expenseData={
            title: enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        console.log(expenseData)
        props.onSaveExpenseData(expenseData)
        //2 way binding is used with help of state
        setEnteredAmount('')
        setEnteredDate('')
        setEnteredTitle('')
        
    }
    return (<form onSubmit={submitHandler}>

        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label >Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label >Amount</label>
                <input type="number" min="0.0" step="0.1" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label >Date</label>
                <input type="date" min="2019-01-01"  value={enteredDate} onChange={dateChangeHandler}/>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>)
}
export default ExpenseForm;