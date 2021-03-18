import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const IncomeValues = [];
  const ExpenseValues = [];

  transactions.filter((income) =>
    income.amount > 0
      ? IncomeValues.push(income.amount)
      : ExpenseValues.push(Math.abs(income.amount))
  );
  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p id='money-plus' className='money plus'>
          +${IncomeValues.reduce((acc, item) => acc + item, 0)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id='money-minus' className='money minus'>
          -${ExpenseValues.reduce((acc, item) => acc + item, 0)}
        </p>
      </div>
    </div>
  );
};
