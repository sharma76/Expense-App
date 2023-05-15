import { useContext } from "react";
import ExpensesOutput from "../Components/ExpensesOutput";
import { ExpenseContext } from "../Store/ExpenseContext";
function AllExpenses() {
  const ExpenseCxt = useContext(ExpenseContext);
  return (
    <ExpensesOutput
      expenses={ExpenseCxt.expenses}
      expensesPeriod={"total"}
      fallback="No registered expenses found!"
    />
  );
}

export default AllExpenses;
