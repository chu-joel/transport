import { StyleSheet, Text, View, Button} from 'react-native';
import { styles } from '../styles/styles';
import { PageContainer } from '../styles/styles';
import { HeadingContainer } from '../components/homeScreen.styles';
import { StyledTransitHeader } from '../components/transitScreen.styles';
import { ButtonContainer } from '../components/homeScreen.styles';

export const TransitScreen = ({ navigation, route }) => {
    return (

        <PageContainer>
            <HeadingContainer>
            <StyledTransitHeader>
                Select your destination
            </StyledTransitHeader>
          </HeadingContainer>
            <View>
                <Text style={styles.h1}>
                    
                   Long {route.params.longitude} Lat {route.params.latitude}
                </Text>
                
            </View>
            <ButtonContainer>
            <Button style = {styles.StopButtonContainer}
                title = "Stop"
                onPress={() =>
                navigation.navigate('HomeScreen')}
                />
        </ButtonContainer>
        </PageContainer>
        )
  };