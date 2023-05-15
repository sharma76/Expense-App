import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import GlobalStyles from "../Constants/Styles";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ id,description, amount, date }) {
  const navigation=useNavigation();
  function handleNavigation()
  {
    navigation.navigate("ManageExpenses",{expenseId:id});
  }
 
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.descriptionText}>{description}</Text>
        <View style={styles.amountContainer}>
        <Pressable onPress={handleNavigation} android_ripple={{color:GlobalStyles.colors.primary400}} > 
          <Text style={styles.amountText}>${amount}</Text>
        </Pressable>
        </View>
      </View>
      <Text style={styles.dateText}>{`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`}</Text>
    </View>
  );
}

export default ExpenseItem;
const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 4,
    backgroundColor: GlobalStyles.colors.primary400,
    marginVertical: 4,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descriptionText: {
    color: GlobalStyles.colors.primary50,
    fontWeight: "bold",
    fontSize:18
  },
  dateText: { color: "white" },
  amountContainer: {
    backgroundColor: "white",
    borderRadius: 3,
    minWidth:65,
    overflow:"hidden",
    justifyContent: "center",
  },
  amountText: { color: "blue", textAlign: "center",padding:10, },
});
