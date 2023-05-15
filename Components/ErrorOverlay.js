import { Button, StyleSheet, Text,View } from 'react-native';


export default function ErrorOverlay({message,onPress})
{
return(
    <View style={styles.container}>
       <Text>Error!!</Text>
       <Text>{message}</Text>
       <Button title='Try Again' onPress={onPress}/>
    </View>
);

}
const styles = StyleSheet.create({
	container: {
        flex:1,
        justifyContent:'center',
        alignItems:"center",
       
    },
});