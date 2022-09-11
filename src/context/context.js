import settings from '../data/UserSettings.json'
import { useBetween } from 'use-between'
import { useState } from 'react';

const useSettingState = () => {
    const [distance, setDistance] = useState(settings.distance);
    const [alertMode, setAlertMode] = useState(settings.alertMode);
    return {
      distance, setDistance, alertMode, setAlertMode
    };
  };
  
export const useSharedSettingState = () => useBetween(useSettingState);

export const SaveSettings = (distance, alertMethod) => {
    console.log(distance)
    console.log(alertMethod)
}