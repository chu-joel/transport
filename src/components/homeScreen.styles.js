import styled from 'styled-components/native';
import { Colors } from '../styles/constants';
import { styles } from '../styles/styles';
import { Dimensions } from 'react-native';

export const HeadingContainer = styled.View`
    text-align: center; 
    background-color: ${Colors.Grey100};
    margin: auto;
    padding: 10px;
`
export const StyledHeader = styled.Text`
  fontSize:24px;
  color: ${Colors.White100};
`;

export const ButtonContainer = styled.View`
    margin: auto;
    padding: 10px;
`


