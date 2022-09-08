import { StyleSheet, Text, View, Button} from 'react-native';
import { styles, PageContainer } from '../styles/styles';
import { StyledTransitHeader } from '../components/transitScreen.styles';
import { HeadingContainer } from '../components/homeScreen.styles';

export const SettingsScreen = ({ navigation, route }) => {
    return (
            <PageContainer>
                <HeadingContainer>
                    <StyledTransitHeader>Settings screen</StyledTransitHeader>
                </HeadingContainer>
            </PageContainer>
        )
  };