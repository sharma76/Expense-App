import { createContext, useReducer } from "react";

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: (id,description, amount, date) => {},
  setExpenses:(id,description, amount, date)=>{},
  updateExpense: (id, { description, amount, date }) => {},
  deleteExpense: (id) => {},
});
function expenseReducer(state, action) {
  switch (action.type) {
    case "Add": {
      const expenseData = { ...action.payload };
      const updatedExpense = [expenseData, ...state];
      return updatedExpense;
    }
    case "Set":{
      return [...action.payload];
    }
    case "Update": {
      const updateItemIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updateItemIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.expenseData };
      const updatedExpense=[...state];
      updatedExpense[updateItemIndex]=updatedItem;
      return updatedExpense;
    }
    case "Delete": {
      const updatedExpense = state.filter(
        (expense) => expense.id !== action.payload
      );
      return updatedExpense;
    }

    default:
      return state;
  }
}
function ExpenseContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expenseReducer,[]);
  function addExpense(expenseData) {
    dispatch({ type: "Add", payload: expenseData });
  }
  function setExpenses(expenses)
  {
   dispatch({type:"Set",payload:expenses})
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "Update", payload: { id, expenseData } });
  }
  function deleteExpense(id) {
    dispatch({ type: "Delete", payload: id });
  }
  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    setExpenses:setExpenses,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpenseContextProvider;
