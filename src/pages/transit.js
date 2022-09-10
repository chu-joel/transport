import { SafeAreaView,TouchableOpacity, Platform, Text, View, Pressable, Modal, PermissionsAndroid} from 'react-native';
import { styles, PageContainer } from '../styles/styles';
import { HeadingContainer, ButtonContainer } from '../components/homeScreen.styles';
import { StyledTransitHeader, InfoContainer, InfoLabelContainer, TextContainer } from '../components/transitScreen.styles';
import { MapContainer } from '../components/map';
import MapView, { Polyline } from 'react-native-maps';
import { Colors, DEFAULTLONGLAT } from '../styles/constants';
import { Marker, Circle } from 'react-native-maps';
import React, {useRef, useEffect, useState }  from 'react';
import { Stopwatch } from 'react-native-stopwatch-timer';
import * as Location from 'expo-location';
import {getDistance} from 'geolib';

const options = {
    container: {
      backgroundColor: Colors.Grey80,
      padding: 10,
      borderRadius: 5,
      width: 150,
      alignItems: 'center',
    },
    text: {
      fontSize: 25,
      color: '#FFF',
    },
  };

export const TransitScreen = ({ navigation, route }) => {
    const [location, setLocation] = useState({
        latitude: -41.293189,
        longitude: 174.7779695,
      });
    const [errorMsg, setErrorMsg] = useState(null);
    const [remaining, setRemaining] = useState(200);

    const getLocation = () => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
          }
    
          Location.setGoogleApiKey("AIzaSyBjVOnhjYP-1FgCghqtxqt7A6Hpd4LnGdg");
    
          let { coords } = await Location.getCurrentPositionAsync();
          setLocation({latitude: coords.latitude,
                        longitude: coords.longitude,});
        setRemaining(parseFloat(getDistance({
            latitude:route.params.latitude,
            longitude:route.params.longitude},
            {latitude: coords.latitude,
            longitude: coords.longitude})/1000).toFixed(1)
        )
        //   if (coords) {
        //     let { longitude, latitude } = coords;
    
            // let regionName = await Location.reverseGeocodeAsync({
            //   longitude,
            //   latitude,
            // });
            // setAddress(regionName[0]);
        //   }
        })();
      };

    // Get location of user
    useEffect(() => {
        
        const interval = setInterval(() => {
            getLocation();
        }, 100);
        return () => clearInterval(interval);
    }, []);



    const [modalVisible, setModalVisible] = useState(false); 
    const [isStopwatchStart, setIsStopwatchStart] = useState(true);

    return (
        getLocation,
        <PageContainer>
            <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
            </View>
            <HeadingContainer>
            <StyledTransitHeader>
                In Transit
            </StyledTransitHeader>
            </HeadingContainer>
            <MapContainer>
            <MapView style={styles.TransitMap} 
            region={{
                latitude: location.latitude,
                longitude: location.longitude,
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
                    latitude: location.latitude,
                    longitude: location.longitude,
                }} radius={50}/>
                <Polyline
                    coordinates={[
                        { latitude: route.params.latitude, longitude: route.params.longitude, },
                        { latitude: location.latitude, longitude: location.longitude, },
                    ]}
                    strokeColor="#000"
                    strokeWidth={1}
                />
            </MapView>
        </MapContainer>
        
            <TextContainer>
                <Text style={styles.h1}>
                    Set to Vibrate within 1 Km of destination
                </Text>
            </TextContainer>
            
            <InfoContainer>
                <View>
                    <Stopwatch
                        secs
                        start={isStopwatchStart}
                        options={options}
                    />
                    <InfoLabelContainer>
                        <Text style={styles.h2}>Duration</Text>
                    </InfoLabelContainer>
                </View>
            </InfoContainer>

            <View style={{height:20}}/>
            <InfoContainer>
                <View style={options.container}>
                    <Text style={styles.transitNumeral}>{remaining}Km</Text>
                    <InfoLabelContainer>
                        <Text style={styles.h2}>Distance</Text>
                    </InfoLabelContainer>
                </View>
            </InfoContainer>

        <View style={styles.ButtonContainer}>
          <TouchableOpacity onPress={() => setModalVisible(true)}
                style={styles.StopButtonContainer}>
            <Text style={styles.h2}>STOP</Text>
          </TouchableOpacity>
        </View> 
        
        </PageContainer>
        )
      
    
  };