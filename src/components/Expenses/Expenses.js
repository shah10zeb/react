import React from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
export default function Expenses(props) {
  const [filterYear, setFilterYear] = React.useState('2020');
  const filterUpdateHandler = (updatedYear) => {
    console.log("updated Year", updatedYear)
    console.log("filter Year", filterYear)
    setFilterYear(updatedYear)
    console.log("updated filter Year", filterYear)


  }
  const expenses = props.expenses;
  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear
  })
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onFilterUpdate={filterUpdateHandler}>
      </ExpenseFilter>
      {filteredExpenses.length === 0 && <p>NO EXPENSES FOUND</p>}
      {filteredExpenses.length > 0 && filteredExpenses.map(expense => {
        return <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      })}
    </Card>
  )

}