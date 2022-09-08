import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitScreen } from './transit';
import { HomeScreen } from './home';

const Stack = createNativeStackNavigator();


export function HomePage(){
    return(
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Select Destination" component={HomeScreen}/>
        <Stack.Screen options={{headerShown: false}}  name="In Transit" component={TransitScreen}/>
      </Stack.Navigator>
    )
}