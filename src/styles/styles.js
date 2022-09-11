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
    title: {
      fontSize:50,
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
      width: 200,
      paddingVertical:10,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },

    sectionStyle:{
      width:150,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    transitNumeral:{
      fontSize:25,
      color: "#FFFFFF",
    },
    
    DistanceAlertContainer: {
      backgroundColor: Colors.Grey90,
      marginTop:30,
      margin:20,
      padding:20,
      borderRadius:10,
    },

    StopButtonContainer: {
      backgroundColor: Colors.Red100,
      width: 200,
      paddingVertical:10,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
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
      height: Dimensions.get('window').height*0.2,
    },

    centeredView: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width:'100%',
      marginTop: 22,
      height:"100%",
      elevation: 20,
    },

    SideBySideButtons:{
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom:20,
    justifyContent: 'space-between',
    },

    modalView: {
      margin: 20,
      backgroundColor: Colors.Grey80,
      borderRadius: 10,
      // paddingHorizontal: 100,
      paddingTop: 20,
      // paddingVertical: 200,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      // elevation: 10000
    },

    ButtonContainer: {
      // flex: 1,
      justifyContent: "center",
      alignItems: "center",
      // width:'100%',
      marginTop: 22
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
