import {View } from 'react-native';

import { Ionicons } from "@expo/vector-icons";
function IconButton({name,size,color,onPress,style}) {
  return (
    <View style={style}>
  <Ionicons name={name} size={size} color={color} onPress={onPress}/>
    </View>
  );
}

export default IconButton;
// const styles = StyleSheet.create({
// 	container: {

//     },
// });