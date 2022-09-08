import { StyleSheet, Text, View, Button} from 'react-native';
import { styles, PageContainer } from '../styles/styles';
import { HeadingContainer, ButtonContainer } from '../components/homeScreen.styles';
import { StyledTransitHeader } from '../components/transitScreen.styles';
import { MapContainer } from '../components/map';
import MapView from 'react-native-maps';
import { Colors, DEFAULTLONGLAT } from '../styles/constants';
import { Marker, Circle } from 'react-native-maps';
import React from 'react';
import { render } from 'react-dom';

export const TransitScreen = ({ navigation, route }) => {
      const getLocation = () => {
        return getDeviceCurrentLocation();
      };
      

    return (
        <PageContainer>
            <HeadingContainer>
            <StyledTransitHeader>
                In Transit
            </StyledTransitHeader>
            </HeadingContainer>
            <MapContainer>
            <MapView style={styles.TransitMap} 
            initialRegion={{
                latitude: route.params.latitude,
                longitude: route.params.longitude,
                latitudeDelta: DEFAULTLONGLAT.longitudeDelta,
                longitudeDelta: DEFAULTLONGLAT.latitudeDelta,
                }
            }>
                <Marker 
                coordinate={{
                    latitude: route.params.latitude,
                    longitude: route.params.longitude,
                }}
                />
                <Circle fillColor={Colors.Blue100} center={{
                    latitude: route.params.latitude,
                    longitude: route.params.longitude,
                }} radius={50}/>
            </MapView>
        </MapContainer>
            <View>
                <Text style={styles.h1}>
                    Set to Vibrate within 1 Km of destination
                    
                </Text>
            </View>
            <ButtonContainer>
            <Button style = {styles.StopButtonContainer}
                title = "Stop"
                onPress={() =>
                navigation.navigate('Select Destination')}
                />
        </ButtonContainer>
        </PageContainer>
        )
      
    
  };