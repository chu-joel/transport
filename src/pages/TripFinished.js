import {TouchableOpacity, View, Text} from 'react-native';
import * as React from 'react';
import { HeadingContainer, StyledHeader} from '../components/homeScreen.styles';
import { PageContainer, styles } from '../styles/styles';


export const FinshedScreen = ({ navigation, route }) => {
    return (
      <PageContainer>
        <HeadingContainer>
          <StyledHeader>
            
            Trip Finished{route.params.duration}
          </StyledHeader>
        </HeadingContainer>
        
         <View style={styles.ButtonContainer}>
          <TouchableOpacity onPress={() =>
                navigation.navigate('Select Destination')}
                style={styles.StartButtonContainer}>
            <Text style={styles.h2}>CLOSE</Text>
          </TouchableOpacity>
        </View> 
        
     </PageContainer>
        
      
    );
  };
  