import styled from 'styled-components/native';
import { Colors } from '../styles/constants';
import { styles } from '../styles/styles';
import { Dimensions } from 'react-native';

export const HeadingContainer = styled.View`
    text-align: center; 
    background-color: ${Colors.Grey100};
    margin: auto;
    paddingVertical: 20px;
    paddingBottom:30px;
`
export const StyledHeader = styled.Text`
  fontSize:30px;
  color: ${Colors.White100};
`;

// export const ButtonContainer = styled.View`
//     margin: auto;
//     text-align: center; 
//     padding: 40px;
//     paddingVertical: 20px;
//     borderRadius: 10px;
//     background-color: ${Colors.White100}
// `


