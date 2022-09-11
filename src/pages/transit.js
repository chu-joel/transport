import { SafeAreaView,TouchableOpacity, Platform, Text, View, Pressable, PermissionsAndroid, Vibration} from 'react-native';
import { styles, PageContainer } from '../styles/styles';
import { HeadingContainer, ButtonContainer } from '../components/homeScreen.styles';
import { StyledTransitHeader, InfoContainer, InfoLabelContainer, TextContainer } from '../components/transitScreen.styles';
import { MapContainer } from '../components/map';
import MapView, { Polyline } from 'react-native-maps';
import { Colors, DEFAULTLONGLAT } from '../styles/constants';
import { Marker, Circle } from 'react-native-maps';
import React, { useEffect, useState }  from 'react';
import { Stopwatch } from 'react-native-stopwatch-timer';
import * as Location from 'expo-location';
import {getDistance} from 'geolib';
import { useSharedSettingState } from '../context/context';
import { Audio } from 'expo-av';
import Modal from 'react-native-modal';

export const options = {
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
    const [remaining, setRemaining] = useState("N/A");
    const [tripFinished, setTripFinished] = useState(false);
    const [modalVisible, setModalVisible] = useState(false); 
    const [isStopwatchStart, setIsStopwatchStart] = useState(true);
    const [time, setTime] = useState(0);
    const [ modalText, setModalText] = useState("None");
    const [ ringing, setRinging] = useState(false);
    const {distance} = useSharedSettingState();
    const {alertMode} = useSharedSettingState();
    const [sound, setSound] = React.useState();

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
           require('../Avicii.mp3')
        );
        setSound(sound);
    
        await sound.playAsync(); }
    
      React.useEffect(() => {
        return sound
          ? () => {
              sound.unloadAsync();
              sound.stopAsync() }
            
          : undefined;
      }, [sound]);

    const PATTERN = [
        3 * 1000,
        2* 1000,
        1*1000
      ];

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
        })();
      };
    useEffect(()=>{getLocation();},[])


    // Get location of user every second
    useEffect(() => {
        const interval = setInterval(() => {
        if(!tripFinished){
            getLocation();
            setTime(time+1);
            
            // Check if user is within radius
            if(parseFloat(remaining)<parseFloat(distance) &&
                remaining!="N/A" && !ringing
                && !modalVisible){
                    // Check if set to vibrate
                    if(alertMode=="vibrate"){
                        Vibration.vibrate(PATTERN, true);
                    }else{
                        console.log("Ring now")
                        playSound()
                    }
                
                setRinging(true)
                setModalText("Your stop is approaching");
                setModalVisible(true);
                }
            }
        }
        , 1000);
        return () => clearInterval(interval);
    }, [time]);
  
    return (
        getLocation,
        <PageContainer>
                <Modal 
                    isVisible={modalVisible}
                    backdropOpacity={0.8}
                    
                    
                    onRequestClose={() => {
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.modalView}>
                        <Text style={styles.h1}>{modalText}</Text>
                        
                        <View style={styles.DistanceAlertContainer}>
                            <View>
                                <Text style={[styles.title,{fontWeight: 'bold'}]}>{remaining}Km</Text>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Text style={styles.h2}>Remaining</Text>
                            </View>
                        </View>

                        <View style = {styles.SideBySideButtons}>
                            <View style={styles.ButtonContainer}>
                                <TouchableOpacity onPress={() => {
                                setModalVisible(false);
                                Vibration.cancel();
                                setSound(false)
                            }
                            }
                                        style={[styles.StopButtonContainer, {width:100}]}>
                                    <Text style={styles.h2}>BACK</Text>
                                </TouchableOpacity>
                            </View> 
                            <View style={[styles.ButtonContainer, {paddingleft:10}]}>
                            <TouchableOpacity onPress={() => {setModalVisible(!modalVisible); 
                                setTripFinished(true);
                                Vibration.cancel();
                                setSound(false)
                                navigation.navigate('Trip Finished', {duration: time})}}
                                        style={[styles.StartButtonContainer, {marginLeft:60, width:100}]}>
                                    <Text style={styles.h2}>FINISH</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
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
                    latitude: location.latitude,
                    longitude: location.longitude,
                }}
                />
                <Circle fillColor={Colors.Blue100} center={{
                    latitude: route.params.latitude,
                    longitude: route.params.longitude,
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
                    Set to {alertMode} within {distance} Km of destination
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
                        <Text style={styles.h2}>Remaining</Text>
                    </InfoLabelContainer>
                </View>
            </InfoContainer>

        <View style={styles.ButtonContainer}>
          <TouchableOpacity onPress={() => {setModalText("Finish Trip?");setModalVisible(true)}}
                style={styles.StopButtonContainer}>
            <Text style={styles.h2}>STOP</Text>
          </TouchableOpacity>
        </View> 
        
        </PageContainer>
        )
      
    
  };