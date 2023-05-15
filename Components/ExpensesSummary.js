import { View, Text, StyleSheet } from 'react-native';

import GlobalStyles from '../Constants/Styles';

function ExpensesSummary({ expenses, periodName }) {
  const summary=expenses?.reduce(((sum,expense)=>sum+expense.amount),0).toFixed(2);
  return (
    <View style={styles.container}>
        <Text style={styles.text1}>{periodName}</Text>
        <Text style={styles.text2}>${summary}</Text>
    </View>

  );
}

export default ExpensesSummary;
const styles = StyleSheet.create({
	container: {
    flexDirection:"row",
 
  marginBottom:8,
    borderRadius:10,
    justifyContent:"space-between",
    padding:9,
    backgroundColor:GlobalStyles.colors.primary50,

    },
	text1: {
        color:GlobalStyles.colors.primary200,
       
    },
    text2:{
        color:GlobalStyles.colors.primary700 ,
        fontWeight:"bold",
      
    }
});