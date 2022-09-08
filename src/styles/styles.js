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
      borderRadius: 20,
      padding: 20,
      marginTop: 20,
      width: 100,
      height: 100,
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      flex:1,
    },
    
    StopButtonContainer: {
      backgroundColor: '#00aeef',
      borderColor: 'red',
      borderWidth: 5,
      borderRadius: 15,
    },
    container: {
      flex:1,
    },
    
    HomeMap: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height*0.7
    },

    TransitMap: {
      width: Dimensions.get('window').width*0.8,
      height: Dimensions.get('window').height*0.2
    },

    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width:'100%',
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: Colors.Grey80,
      borderRadius: 20,
      paddingHorizontal: 100,
      paddingTop: 300,
      paddingVertical: 200,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    
});

export const PageContainer = styled.View`
    background-color: ${Colors.Grey100};
    padding-top:30px;
`


export const mainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.Grey100,
    color: Colors.White100,
  },
  
};
