import React,{useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"
import "./Expenseitem.css";


function Expenseitem(props) {
  const [title,setTitle] =useState(props.title)
  const clickHandler=()=>{
    setTitle("Updated!")
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>click</button>
      </div>
    </Card>
  );
}
export default Expenseitem;
