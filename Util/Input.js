import { StyleSheet, Text, TextInput, View } from "react-native";
import GlobalStyles from "../Constants/Styles";

export default function Input({isValid,label, style, inputConfig }) {
 const textInputStyle=[styles.textInput];

 if(!!inputConfig.multiline)
 textInputStyle.push(styles.multiline)
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text,!(isValid)&&{color:GlobalStyles.colors.error500}]}>{label}</Text>
      <TextInput style={[textInputStyle,(!isValid)&&{backgroundColor:GlobalStyles.colors.error50}]} {...inputConfig}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginHorizontal: 4, marginVertical: 8 },
  text: { marginBottom: 5, color: GlobalStyles.colors.primary200 },
  textInput: {
    padding:5,
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    borderRadius: 8,
    fontSize:18
  },
  multiline:{
    minHeight:100,
    textAlignVertical:'top'
  }
});
