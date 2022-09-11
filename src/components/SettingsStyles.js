import { StyleSheet } from 'react-native';
import { Colors } from '../styles/constants';

export const SettingStyles = StyleSheet.create({
    SettingsContainer: {
        backgroundColor: Colors.Grey90,
        marginTop:30,
        margin:20,
        padding:20,
        borderRadius:10,
        justifyContent: "center",
      },

      SettingHeaderContainers:{
        paddingBottom:20,
        marginLeft:10,
      },

      AlertSelectionContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom:10,
        justifyContent: 'space-between',
      },

      selectedSettingContainer:{
        backgroundColor:Colors.Grey60,
        margin:10,
        width: 110,
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10,
      },

      DistanceContainer:{
        flexDirection: 'row',
      },

      DistanceMeasurementContainer:{
        margin:10,
        paddingVertical:10,
      },

      selectedAlertMethod:{
        borderColor:Colors.Blue100,
        borderWidth:4,
      }


});