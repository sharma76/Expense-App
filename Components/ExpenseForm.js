import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "../Util/Input";
import { useState } from "react";
import Button from "../Util/Button";
export default function ExpenseForm({
  defaultValues,
  submitButtonLabel,
  onSubmit,
  onCancel,
}) {
  const [inputData, setInputData] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : "",
      isValid: true,
    },
  });
  let isAmountValid;
  let isDateValid;
  let isDescriptionValid;
  function handleInputData(enteredText, label) {
    let val;
    switch (label) {
      case "amount": {
        isAmountValid = !(isNaN(parseInt(enteredText)) || (parseInt(enteredText)<0));
        val = { value: enteredText, isValid: isAmountValid };
        break;
      }
      case "date": {
        isDateValid = new Date(enteredText).toString() !== 'Invalid Date';
        val = { value: enteredText, isValid: isDateValid };
        break;
      }
      case "description": {
        isDescriptionValid = enteredText.trim().length !== 0;
        val = { value: enteredText, isValid: isDescriptionValid };
        break;
      }
    }
    setInputData((currentData) => ({ ...currentData, [label]: val }));
  }
  function handleSubmit() {
    const expenseData = {
      amount: +inputData.amount.value,
      date: new Date(inputData.date.value),
      description: inputData.description.value,
    };
    if (
      !inputData.amount.isValid ||
      !inputData.date.isValid ||
      !inputData.description.isValid
    )
      {
      Alert.alert("Invalid Input");
        return;}
    onSubmit(expenseData);
  }
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Input
          isValid={inputData.amount.isValid}
          setInputData={setInputData}
          style={styles.inputRow}
          label="Amount"
          inputConfig={{
            onChangeText: (enteredText) =>
              handleInputData(enteredText, "amount"),
            keyboardType: "decimal-pad",
            value: inputData.amount.value,
          }}
        />
        <Input
          isValid={inputData.date.isValid}
          setInputData={setInputData}
          style={styles.inputRow}
          label="Date"
          inputConfig={{
            placeholder: "YYYY-MM-DD",
            keyboardType: "decimal-pad",
            onChangeText: (enteredText) => handleInputData(enteredText, "date"),
            value: inputData.date.value,
          }}
        />
      </View>

      <Input
        isValid={inputData.description.isValid}
        label="Description"
        inputConfig={{
          multiline: true,
          value: inputData.description.value,
          onChangeText: (enteredText) =>
            handleInputData(enteredText, "description"),
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 40,
        }}
      >
        <Button style={{ marginLeft: 60 }} mode={"flat"} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={{ marginRight: 60 }} onPress={handleSubmit}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inputRow: { flex: 1 },
});
