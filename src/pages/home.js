import { Button} from 'react-native';
import * as React from 'react';
import { HeadingContainer, StyledHeader, ButtonContainer} from '../components/homeScreen.styles';
import { MapContainer } from '../components/map';
import { PageContainer, styles } from '../styles/styles';
import MapView from 'react-native-maps';
import { DEFAULTLONGLAT } from '../styles/constants';
import { Marker, Circle } from 'react-native-maps';


export const HomeScreen = ({ navigation }) => {
   const [pin, setPin] = React.useState({
    latitude: -41.293189,
    longitude: 174.7779695,
  });
  
    return (
      <PageContainer>
        <HeadingContainer>
          <StyledHeader>
            Select your destination
          </StyledHeader>
        </HeadingContainer>
        <MapContainer>
          <MapView style={styles.HomeMap} 
          initialRegion={DEFAULTLONGLAT}>
             <Marker 
             draggable = {true}
              coordinate={pin}
              onDragEnd = {(e) => {
                setPin({
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude,
                })
              }}
              />
              <Circle center={pin} radius={200}/>
          </MapView>
        </MapContainer>
        <ButtonContainer>
          <Button style = {styles.appButtonContainer}
            title="Start Journey"
            onPress={() =>
              navigation.navigate('Transit', {latitude: pin.latitude, longitude: pin.longitude})}
          />
        </ButtonContainer>
        
     </PageContainer>
        
      
    );
  };
  