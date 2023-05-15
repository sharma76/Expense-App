import { Text, View } from "react-native";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutput({ expenses, expensesPeriod, fallback }) {
  let content = (
    <Text style={{ textAlign: "center", marginTop: 80 }}>{fallback}</Text>
  );
  if (expenses && Array.isArray(expenses) && expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

export default ExpensesOutput;
