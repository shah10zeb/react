import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title, setTitle]=useState(props.title);
  let counter=0;
  const clickHandler=()=>{
    setTitle(`Updated! ${counter++}` )
    console.log("CLICKED")
  }
  

  return (
    <Card className='expense-item'>
      <div className='expense-item__description'>
        <ExpenseDate date={props.date}/>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>  
      <button onClick={clickHandler}>Change TItle</button>
    </Card>
  );
}

export default ExpenseItem;
