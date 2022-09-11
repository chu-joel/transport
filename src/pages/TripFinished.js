import { TouchableOpacity, View, Text, Dimensions } from "react-native";
import * as React from "react";
import { styles } from "../styles/styles";
import { options } from "./transit";
import { TransitStyles } from "../components/transit.styles";
import { TextStyles } from "../styles/typography";

/**
 * Screen shows up when user finishes their transit
 * Page displays stats for transit
 * Currently only displays the users Total trip duration
 * @param {*} param0
 * @returns
 */
export const FinshedScreen = ({ navigation, route }) => {
  const minutes = Math.floor(route.params.duration / 60);
  const seconds = route.params.duration - minutes * 60;
  return (
    <View style={styles.PageContainer}>
      <View style={styles.headerContainer}>
        <Text style={TextStyles.header}>Trip Finished</Text>
      </View>
      {/* Show user the total trip duration */}
      <View style={TransitStyles.InfoContainer}>
        <View style={[options.container, { width: 200 }]}>
          <Text style={TextStyles.transitNumeral}>{minutes} Minutes</Text>
          <Text style={TextStyles.transitNumeral}>{seconds} Seconds</Text>
          <View style={TransitStyles.InfoLabelContainer}>
            <Text style={TextStyles.h2}>Total Duration</Text>
          </View>
        </View>
      </View>

      <View
        style={[
          styles.ButtonContainer,
          { top: Dimensions.get("window").height - 400 },
        ]}
      >
        {/* Go back to home is user clicks close button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Select Destination")}
          style={styles.StartButtonContainer}
        >
          <Text style={TextStyles.h2}>CLOSE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
