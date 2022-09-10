import { StyleSheet,TouchableOpacity, TouchableHighlight, Text, View, Pressable, Modal, Button} from 'react-native';
import { styles, PageContainer } from '../styles/styles';
import { HeadingContainer, ButtonContainer } from '../components/homeScreen.styles';
import { StyledTransitHeader, InfoContainer, InfoLabelContainer, TextContainer } from '../components/transitScreen.styles';
import { MapContainer } from '../components/map';
import MapView from 'react-native-maps';
import { Colors, DEFAULTLONGLAT } from '../styles/constants';
import { Marker, Circle } from 'react-native-maps';
import React, {useRef, useEffect, useState }  from 'react';
import { Stopwatch } from 'react-native-stopwatch-timer';

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
    

    //   const getLocation = () => {
    //     return getDeviceCurrentLocation();
    //   };

    // Get location of user
    


    const [modalVisible, setModalVisible] = useState(false); 
    const [isStopwatchStart, setIsStopwatchStart] = useState(true);

    return (
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
                    <Text style={styles.transitNumeral}>100.2Km</Text>
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