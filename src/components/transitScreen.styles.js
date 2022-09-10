import styled from 'styled-components/native';
import { Colors, ShapeDefaults } from '../styles/constants';

export const StyledTransitHeader = styled.Text`
  fontSize:30px;
  color: ${Colors.White100};
`;

export const StopButtonContainer = styled.View`
    margin: auto;
    padding: 10px;
`

export const InfoContainer = styled.View`
    backgroundColor: ${Colors.Grey80};
    paddingVertical:10px;
    text-align: 'center';
    borderRadius: ${ShapeDefaults.borderRadius};
    margin:auto;
`

export const InfoLabelContainer = styled.View
`
    margin:auto;
    text-align:'center';
`

export const TextContainer = styled.View
`
    paddingVertical:20px;
    margin:auto;
    text-align:'center';
`
