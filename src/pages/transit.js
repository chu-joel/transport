import { StyleSheet,TouchableOpacity, Text, View, Pressable, Modal, Button} from 'react-native';
import { styles, PageContainer } from '../styles/styles';
import { HeadingContainer, ButtonContainer } from '../components/homeScreen.styles';
import { StyledTransitHeader } from '../components/transitScreen.styles';
import { MapContainer } from '../components/map';
import MapView from 'react-native-maps';
import { Colors, DEFAULTLONGLAT } from '../styles/constants';
import { Marker, Circle } from 'react-native-maps';
import React, { useState }  from 'react';
import { render } from 'react-dom';

export const TransitScreen = ({ navigation, route }) => {
      const getLocation = () => {
        return getDeviceCurrentLocation();
      };
      const [modalVisible, setModalVisible] = useState(false);
      
      

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
            <View stype = {styles.container}>
            <Button style = {styles.StopButtonContainer}
                title = "Alert"
                onPress={() => setModalVisible(true)}
                />
            </View>
            


        </ButtonContainer>
        </PageContainer>
        )
      
    
  };