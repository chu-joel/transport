import {TouchableOpacity, View, Text, Dimensions} from 'react-native';
import * as React from 'react';
import { HeadingContainer, StyledHeader} from '../components/homeScreen.styles';
import { PageContainer, styles } from '../styles/styles';
import { InfoContainer, InfoLabelContainer } from '../components/transitScreen.styles';
import { options } from './transit';


export const FinshedScreen = ({ navigation, route }) => {

    const minutes = Math.floor(route.params.duration / 60);
    const seconds = route.params.duration - minutes*60;
    return (
      <PageContainer>
        <HeadingContainer>
          <StyledHeader>
            Trip Finished
          </StyledHeader>
        </HeadingContainer>

        <InfoContainer>
                <View style={[options.container, {width: 200}]}>
                    <Text style={styles.transitNumeral}>{minutes} Minutes</Text>
                    <Text style={styles.transitNumeral}>{seconds} Seconds</Text>
                    <InfoLabelContainer>
                        <Text style={styles.h2}>Total Duration</Text>
                    </InfoLabelContainer>
                </View>
            </InfoContainer>

        
         <View style={[styles.ButtonContainer, {top: (Dimensions.get('window').height)-400}]}>
          <TouchableOpacity onPress={() =>
                navigation.navigate('Select Destination')}
                style={styles.StartButtonContainer}>
            <Text style={styles.h2}>CLOSE</Text>
          </TouchableOpacity>
        </View> 
        
     </PageContainer>
        
      
    );
  };
  