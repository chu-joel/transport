import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../pages/home';
import { TransitScreen } from '../pages/transit';
import { AlertScreen } from '../pages/alertModal';

const Stack = createNativeStackNavigator();


export function HomePage(){
    return(
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Select Destination" component={HomeScreen}/>
        <Stack.Screen options={{headerShown: false}}  name="In Transit" component={TransitScreen}/>
        
      </Stack.Navigator>
      
    )
    
}