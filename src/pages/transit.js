import { StyleSheet, Text, View, Button} from 'react-native';
import { styles } from '../styles/styles';
export const TransitScreen = ({ navigation, longitude, latitude }) => {
    console.log(latitude)
    return (
            <View>
                <Text style={styles.h1}>
                    
                   Something {longitude}
                </Text>
                <Button title = "Some button to click on"
            onPress={() =>
            navigation.navigate('HomeScreen')
            
            }
            /></View>
            
        )
  };