import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

  const [filterYear, setFilterYear] = useState('2021');

  const expensesFilterChange = (year) => {
      setFilterYear(year);
  };

  let filteredArray = props.expenses.filter(
    (x) => x.date.getFullYear().toString() === filterYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onExpensesFilterChange={expensesFilterChange}
          selected={filterYear}
        />
        <ExpensesChart expenses={filteredArray} />
        <ExpensesList expenses={filteredArray} />
      </Card>
    </div>
  );
}

export default Expenses;
