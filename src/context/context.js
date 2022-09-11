import * as React from 'react';
import settings from '../data/UserSettings.json'
import { useBetween } from 'use-between'
import { useState } from 'react';

const useSettingState = () => {
    const [distance, setDistance] = useState(settings.distance);
    const [alertMode, setAlertMode] = useState(settings.alertMode);
    console.log(distance)
    return {
      distance, setDistance, alertMode, setAlertMode
    };
  };
  
export const useSharedSettingState = () => useBetween(useSettingState);