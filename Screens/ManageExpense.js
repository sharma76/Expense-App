import { StyleSheet, Text, View } from "react-native";
import { useContext, useLayoutEffect, useState } from "react";
import IconButton from "../Util/IconButton";

import { ExpenseContext } from "../Store/ExpenseContext";
import ExpenseForm from "../Components/ExpenseForm";
import GlobalStyles from "../Constants/Styles";
import {deleteExpense, storeExpense, updateExpense} from "../Util/http";
import LoadingOverlay from "../Components/LoadingOverlay";
import ErrorOverlay from "../Components/ErrorOverlay";
function ManageExpense({ navigation, route }) {
  const [isLoading,setIsLoading]=useState(false);
  const ExpenseCxt = useContext(ExpenseContext);
  const editId = route.params?.expenseId;
  const [error,setError]=useState(null);
 
  const selectedExpense = ExpenseCxt.expenses?.find(
    (expense) => expense.id === editId
  );
  const isEdit = !!editId;
 
  useLayoutEffect(
    () =>
      navigation.setOptions({ title: isEdit ? "Edit Expense" : "Add Expense" }),
    [navigation, isEdit]
  );
  
  async function confirmHandler(expenseData) {
    setIsLoading(true);
    try{

      if (isEdit) {
        
        await updateExpense(editId,expenseData);
        ExpenseCxt.updateExpense(editId, expenseData);
      
       
      } else {
        
        const id=await storeExpense(expenseData);
        
        ExpenseCxt.addExpense({id:id,...expenseData});
       
  
      }
      navigation.goBack();
    }
    catch(error)
    {
       setError(error.message);
       setIsLoading(false);
    }
    
  }
  async function handleDelete() {
    setIsLoading(true);
    try{
      
      await deleteExpense(editId);
      ExpenseCxt.deleteExpense(editId);
      navigation.goBack();
    }
    catch(error){
     setError(error.message);
     setIsLoading(false);
    }
 
    
  }
  function handleCancel() {
    navigation.goBack();
  }
  if(!!error)
  return <ErrorOverlay message={error} onPress={()=>setError(null)}/>
  if(isLoading) 
  return <LoadingOverlay/>
  return (
    <View style={{}}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 27,
          fontWeight: "bold",
          marginTop: 30,
          color: GlobalStyles.colors.primary400,
        }}
      >
        Your Expense
      </Text>
      <View style={{ alignItems: "center" }}>
        <ExpenseForm
          submitButtonLabel={isEdit ? "Update" : "Add"}
          onSubmit={confirmHandler}
          onCancel={handleCancel}
          defaultValues={selectedExpense}
        />
      </View>

      {isEdit && (
        <View style={styles.iconContainer}>
          <IconButton
            name="trash"
            size={30}
            color="red"
            onPress={handleDelete}
          />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 20,
    marginHorizontal: 35,
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 2,
    width: "80%",
  },
});
export default ManageExpense;
