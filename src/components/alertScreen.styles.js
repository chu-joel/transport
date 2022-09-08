import styled from 'styled-components/native';
import { Colors } from '../styles/constants';
import { styles } from '../styles/styles';
import { Dimensions } from 'react-native';

export const AlertPageContainer = styled.View`
    text-align: center; 
    background-color: ${Colors.Grey100};
    width:100%;
    height:100%
`
export const AlertButtonContainer = styled.Text`
  fontSize:30px;
  color: ${Colors.White100};
`;



