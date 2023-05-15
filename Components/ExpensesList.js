import { FlatList, Text, View } from "react-native";
import ExpenseItem from "./ExpenseItem";

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(expense) => expense.id}
      renderItem={({item}) => <ExpenseItem {...item} />}
    />
  );
}

export default ExpensesList;
