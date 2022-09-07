import { View, Text, StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

export const styles = StyleSheet.create({
    div: {
      backgroundColor: '#000000',
    }
});

export const mainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#1E1E1E'
  }
};