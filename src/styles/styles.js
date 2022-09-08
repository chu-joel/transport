import { View, Text, StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import styled from 'styled-components/native';
import { Colors } from './constants';
import { Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    div: {
      backgroundColor: '#000000',
      color: "#FFFFFF",
    },
    h1: {
      fontSize:24,
      color: "#FFFFFF",
    },
    h2: {
      fontSize:18,
      color: "#FFFFFF",
    },
    StartButtonContainer: {
      backgroundColor: Colors.Blue100,
      color: Colors.White100,
      borderRadius: 50,
      padding: 10,
      marginTop: 20,
      width: 100,
      height: 100,
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    StopButtonContainer: {
      backgroundColor: Colors.Red,
      color: Colors.White100,
    },
    
    HomeMap: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height*0.7
    },

    TransitMap: {
      width: Dimensions.get('window').width*0.8,
      height: Dimensions.get('window').height*0.2
    }
    
});

export const PageContainer = styled.View`
    background-color: ${Colors.Grey100};
`


export const mainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.Grey100,
    color: Colors.White100,
  }
};
