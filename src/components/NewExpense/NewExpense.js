import './NewExpense.css'
import ExpenseForm from './ExpenseForm' 
export default function NewExpense(props) {
    const saveExpenseData=(expenseFormData)=>{
        console.log('expeseForm Date', expenseFormData)
        const expenseData={id: Math.random().toString(),
        ...expenseFormData}
        console.log("after save in parent",expenseData);
        props.onAddExpense(expenseData);
    }
    return (<div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseData}/>
    </div>)
}