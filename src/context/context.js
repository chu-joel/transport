import settings from "../data/UserSettings.json";
import { useBetween } from "use-between";
import { useState } from "react";

/**
 * Read settings from json
 * @returns
 */
const useSettingState = () => {
  const [distance, setDistance] = useState(settings.distance);
  const [alertMode, setAlertMode] = useState(settings.alertMode);
  return {
    distance,
    setDistance,
    alertMode,
    setAlertMode,
  };
};

export const useSharedSettingState = () => useBetween(useSettingState);

/**Save state */
export const SaveSettings = (distance, alertMethod) => {
  console.log(distance);
  console.log(alertMethod);
};
