import { Button} from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../styles/styles';
import * as React from 'react';

export const HomeScreen = ({ navigation }) => {
    return (
      <View style = {styles.div}>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('Transit', { name: 'Jane' })
          }
        />
     </View>
        
      
    );
  };
  