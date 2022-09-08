import { StyleSheet, Text, View, Button} from 'react-native';
import { styles, PageContainer } from '../styles/styles';
import { StyledTransitHeader } from '../components/transitScreen.styles';
import { HeadingContainer } from '../components/homeScreen.styles';
import { AlertPageContainer } from '../components/alertScreen.styles';

export const AlertScreen = ({ navigation, route }) => {
    return (
            <AlertPageContainer>
                <HeadingContainer>
                    <StyledTransitHeader>Alert Screen</StyledTransitHeader>
                </HeadingContainer>
            </AlertPageContainer>
        )
  };