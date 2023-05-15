import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../Components/ExpensesOutput";
import { ExpenseContext } from "../Store/ExpenseContext";
import { fetchExpense } from "../Util/http";
function RecentExpenses() {

  const ExpenseCtx = useContext(ExpenseContext);

  function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
  }

  useEffect(() => {
    async function getExpense() {
      const expenses = await fetchExpense();
      ExpenseCtx.setExpenses(expenses);
    }

    getExpense();
  }, []);
  const today = new Date();
  const date7DaysAgo = getDateMinusDays(today, 7);

  const recentExpenses = ExpenseCtx.expenses?.filter((expense) => {
    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod={"Last 7 days"}
      fallback="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
