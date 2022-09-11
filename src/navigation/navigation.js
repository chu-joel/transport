import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../pages/home';
import { TransitScreen } from '../pages/transit';
import { FinshedScreen } from '../pages/TripFinished';

const Stack = createNativeStackNavigator();


export function HomePage(){
    return(
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Select Destination" component={HomeScreen}/>
        <Stack.Screen options={{headerShown: false}}  name="In Transit" component={TransitScreen}/>
        <Stack.Screen options={{headerShown: false}}  name="Trip Finished" component={FinshedScreen}/>
      </Stack.Navigator>
      
    )
    
}