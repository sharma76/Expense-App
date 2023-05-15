import { StyleSheet } from 'react-native';

import { ActivityIndicator,View } from "react-native";
export default function LoadingOverlay()
{
return(
    <View style={styles.container}>
        <ActivityIndicator size="large" color={"#2a4ff5"}/>
    </View>
);

}
const styles = StyleSheet.create({
	container: {
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
});