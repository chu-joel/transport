import { StyleSheet, Text, View, Button} from 'react-native';
export const HomeScreen = ({ navigation }) => {
    return (
        <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Transit', { name: 'Jane' })
        }
      />
      
    );
  };
  