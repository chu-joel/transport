import { useBetween } from "use-between";
import { useState } from "react";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { database } from "../firebase/firebase.config";

/**
 * Read settings from json
 * @returns
 */
export const useSharedSettingState = () => useBetween(useSettingState);

const useSettingState = async () => {
  const [distance, setDistance] = useState();
  const [alertMode, setAlertMode] = useState();

  var parameters = await getSettings();

  setDistance(parameters.distance);
  setAlertMode(parameters.alertMode);
  return {
    distance,
    setDistance,
    alertMode,
    setAlertMode,
  };
};

export const getSettings = async () => {
  const dbRef = ref(getDatabase());
  const thing = await get(child(dbRef, `settings/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return thing;
};

export const SaveSettings = (distance, alertMethod) => {
  const database = getDatabase();

  const reference = ref(database, "settings/");
  set(reference, {
    alertMode: alertMethod,
    distance: distance,
  });
  return 0;
};
