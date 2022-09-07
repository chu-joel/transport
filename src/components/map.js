import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../styles/constants';

// <Marker
//   coordinate={{ latitude : latitude , longitude : longitude }}
//   image={{uri: 'mapPin.png'}}
// />


export const MapContainer = styled.View`
    flex-grow:1;
    background-color:${Colors.White100};
`
