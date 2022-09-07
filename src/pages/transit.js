import { StyleSheet, Text, View, Button} from 'react-native';
export const TransitScreen = ({ navigation, route }) => {
    return (
            <Button title = "Some button to click on"
            onPress={() =>
            navigation.navigate('HomeScreen')
            
            }
            />
        )
  };