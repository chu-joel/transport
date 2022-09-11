import {TouchableOpacity, View, Text} from 'react-native';
import * as React from 'react';
import { HeadingContainer, StyledHeader, ButtonContainer} from '../components/homeScreen.styles';
import { MapContainer } from '../components/map';
import { PageContainer, styles } from '../styles/styles';
import MapView from 'react-native-maps';
import { DEFAULTLONGLAT } from '../styles/constants';
import { Marker, Circle } from 'react-native-maps';


export const FinshedScreen = ({ navigation, route }) => {
//    const [pin, setPin] = React.useState({
//     latitude: -41.293189,
//     longitude: 174.7779695,
//   });
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
  