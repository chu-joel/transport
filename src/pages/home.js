import { Button} from 'react-native';
import * as React from 'react';
import { HeadingContainer, StyledHeader, ButtonContainer, MapContainer} from '../components/homeScreen.styles';
import { PageContainer, styles } from '../styles/styles';
import MapView from 'react-native-maps';
import { DEFAULTLONGLAT } from '../styles/constants';

export const HomeScreen = ({ navigation }) => {
    return (
      <PageContainer>
        <HeadingContainer>
          <StyledHeader>
            Select your destination
          </StyledHeader>
        </HeadingContainer>
        <MapContainer>
          <MapView style={styles.map} 
          initialRegion={DEFAULTLONGLAT}/>
        </MapContainer>
        <ButtonContainer>
          <Button style = {styles.appButtonContainer}
            title="Start Journey"
            onPress={() =>
              navigation.navigate('Transit', { name: 'Jane' })
            }
          />
        </ButtonContainer>
        
     </PageContainer>
        
      
    );
  };
  